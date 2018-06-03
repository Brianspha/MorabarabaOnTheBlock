
pragma solidity ^0.4.23;


contract MorabarabaContract
{
struct SessionPlayer
{ 
 address Id; //This links to the actual players contract    
 uint8 UnplacedPieces;//How many pieces has the player not placed on the board
 uint8 PlacedPieces;//How many pieces has the player placed on the board
 uint8 State; //Either Placing, Flying Shooting or Stationary
 mapping(uint256 => Mill) PlayerMills;
 uint8 MillCount;
}
//Represents each position on the board
struct Node 
{
uint256 Index;
bool InAMill;
bool Occupied;
uint8 ByWhom;//0 not Occupied 1 by player one 2 by player two
}  
//Represents the Mill formed on the board
struct Mill
{
    Node position1;
    Node position2;
    Node position3;
}
//Represents the Board as a whole
struct Board
{
 uint256 NodeCount;//Ensure that only 24 nodes are added to the Board
 bool Activated;//Keeps track of whether the Board has been initialised or not
 uint256 PlacedSoFar;//Keeps track of the number of placed Nodes by players thus far :XD
 mapping (uint256 =>Node) InternalBoard;

}
//Keeps track of every possible mill in the game
struct PossibleMills
{
 bool Activated;//Prevents the adding of Mills over and over again    
 uint256 Count;
 mapping(uint8 => Mill) Mills;
}
//Represents each morabaraba Game session
struct Morabaraba
{
 bool Activated;
 SessionPlayer P1;
 SessionPlayer P2;
 Board CurrentBoard;
 address Winner;
 address Loser;
 uint256 SessionId;
 bool Turn;//True player 1 false player 2
}
Morabaraba currentGameSession;
uint8 constant Flying=3;
uint8 constant Shooting=2;
uint8 constant Moving=1;
uint8 constant Stationary=0;
uint256 SessionIdCount=0;
Board brd = Board(24,true,0);
event GeneralLogger (string message);
//@Dev Constructor
function Constructor() private
{
    emit GeneralLogger("Constructor Called.");
}
//@Dev Responsible for starting a new game 
function NewGame(address one,address two) public returns (bool success)
{
  require(one !=address(0));
  require (two != address(0));//Malicious address
  require(one != two);//Ensure player doesnt play against himself
  SessionPlayer memory p1 = SessionPlayer(one,12,0,0,0);
  SessionPlayer memory p2 = SessionPlayer(two,12,0,0,0);
  Node []  memory nodes =new Node[](24);
  for(uint8 i =0; i < 24;i++)
  {
      Node memory temp = Node(i,false,false,0);//Occupied by zero means its not Occupied by any player
      nodes[i]=temp;
  }
  for(uint8 a=0;a<24;a++)
  {
      brd.InternalBoard[a]=nodes[a];
  }
  currentGameSession=Morabaraba(true,p1,p2,brd,one,two,SessionIdCount++,true);
  success =true;
    emit GeneralLogger("Successfully created new game.");

}
//@Dev makes a move given a players address as well the desired position
function MakeMove(address player,uint256 position) public returns (string message)
{
    if(!currentGameSession.Activated)
    {
     message="Game hasnt been initialised";
     emit GeneralLogger(message);
    }
    if(player ==address(0))
    {
    message="Invalid Address";
    return message;
    }
    else if(position <0 || position >23)
    {
        message="Invalid Position";
        return message;
    }
    bool currentTurn = currentGameSession.Turn;
    if(currentTurn)
    {
      bool occupied = currentGameSession.CurrentBoard.InternalBoard[position].Occupied;
      if(!occupied)
      {
      currentGameSession.CurrentBoard.InternalBoard[position]= Node(position,false,true,1);
      currentGameSession.P1.UnplacedPieces--;
      currentGameSession.P1.PlacedPieces++;
      currentGameSession.Turn=false;//Player 2's turn
      message ="Player 2's Turn";
      }
      else
      {
       message="Invalid position, position already occupied";
      }
    }
    else
    {
      currentGameSession.CurrentBoard.InternalBoard[position]= Node(position,false,true,1);
      currentGameSession.P2.UnplacedPieces--;
      currentGameSession.P2.PlacedPieces++;
      currentGameSession.Turn=true;//Player 1's turn
      message ="Player 1's Turn";
    }
      if(!occupied)
      {
      uint256 a;
      uint256 b;
      uint256 c;
      (a,b,c) = CheckForMill(player,position);
      if(a !=25 && b!=25 &&c !=25)//25 indicates not mill was found 25 is out of bounds of the game 
      {
        if(currentTurn)
        {
         currentGameSession.P1.PlayerMills[currentGameSession.P1.MillCount++]=Mill(currentGameSession.CurrentBoard.InternalBoard[a],currentGameSession.CurrentBoard.InternalBoard[b],currentGameSession.CurrentBoard.InternalBoard[c]);
         message="Player 1 formed a Mill";
        }
        else
        {
         currentGameSession.P2.PlayerMills[currentGameSession.P2.MillCount++]=Mill(currentGameSession.CurrentBoard.InternalBoard[a],currentGameSession.CurrentBoard.InternalBoard[b],currentGameSession.CurrentBoard.InternalBoard[c]);
        message="Player 2 Formed a Mill";
        }
      }
    }
        emit GeneralLogger("Move Made.");
}
//@Dev Checks if the player has formed a mill or not
function CheckForMill (address player,uint256 node) public view returns (uint256 a,uint256 b ,uint256 c)
{
  require(player != address(0));
  require(node >=0 && node <24);
  require(currentGameSession.CurrentBoard.Activated);
  require(currentGameSession.CurrentBoard.PlacedSoFar >=5);//we only check for mills after 5 pieces hae been placed
  bool found =false;
  uint256 [] memory Adjacents = GetAdjacentMills(node);
  for(uint i =0; i < Adjacents.length-2;i++)
  {
    Node memory n1= currentGameSession.CurrentBoard.InternalBoard[i];
    Node memory n2= currentGameSession.CurrentBoard.InternalBoard[i+1];
    Node memory n3= currentGameSession.CurrentBoard.InternalBoard[i+2];
    if(n1.InAMill && n2.InAMill && n3.InAMill)
    {
     a=n1.Index;
     b=n2.Index;
     c=n3.Index;
     found=true;
     break;
    }
  }
  if(found)
  {
    return (a,b,c);
  }
  return (25,25,25);//Nothing found

}
//@Dev gets all Adjacent mills given an index
function GetAdjacentMills(uint256 position) public pure returns (uint [] Indexes)
{
    require(position >=0);
    if(position==0)
    {
      Indexes[0]=1;
      Indexes[1]=2;
      Indexes[2]=0;
      Indexes[3]=3;
      Indexes[4]=6;
      Indexes[5]=0;
      Indexes[6]=9;
      Indexes[7]=21;
      Indexes[8]=0;  
    }
    if(position==1)
    {
      Indexes[0]=0;
      Indexes[1]=2;
      Indexes[2]=1;
      Indexes[3]=4;
      Indexes[4]=7;
      Indexes[5]=1;
    }
    if(position==2)
    {
     Indexes[0]=0;
     Indexes[1]=2;
     Indexes[2]=1;
     Indexes[3]=5;
     Indexes[4]=8;
     Indexes[5]=2;
     Indexes[6]=14;
     Indexes[7]=23;
     Indexes[8]=2;
    }
   else if(position==3)
    {
        Indexes[0]=0;
        Indexes[1]=6;
        Indexes[2]=3;
        Indexes[3]=4;
        Indexes[4]=5;
        Indexes[5]=3;
        Indexes[6]=18;
        Indexes[7]=10;
        Indexes[8]=3;
    }
    else if(position==4)
    {
     Indexes[0]=1;
     Indexes[1]=7;
     Indexes[2]=4;
     Indexes[3]=3;
     Indexes[4]=5;
     Indexes[5]=4;
    }
    else if(position==5)
    {
     Indexes[0]=2;
     Indexes[1]=8;
     Indexes[2]=5;
     Indexes[3]=4;
     Indexes[4]=3;
     Indexes[5]=5;
     Indexes[6]=13;
     Indexes[7]=20;
     Indexes[8]=5;
    }
    else if(position==6)
    {
      Indexes[0]=7;
      Indexes[1]=8;
      Indexes[2]=6;
      Indexes[3]=3;
      Indexes[4]=0;
      Indexes[5]=6;
      Indexes[6]=11;
      Indexes[7]=15;
      Indexes[8]=6;
    }
    else if(position==7)
    {
     Indexes[0]=6;
     Indexes[1]=8;
     Indexes[2]=7;
     Indexes[3]=4;
     Indexes[4]=1;
     Indexes[5]=7;
    }
    else if(position==8)
    {
     Indexes[0]=12;
     Indexes[1]=17;
     Indexes[2]=8;
     Indexes[3]=5;
     Indexes[4]=2;
     Indexes[5]=8;
     Indexes[6]=6;
     Indexes[7]=7;
     Indexes[8]=8;
    }
    else if(position==9)
    {
     Indexes[0]=10;
     Indexes[1]=11;
     Indexes[2]=9;
     Indexes[3]=0;
     Indexes[4]=21;
     Indexes[5]=9;
    }
    else if(position==11)
    {
     Indexes[0]=11;
     Indexes[1]=9;
     Indexes[2]=10;
     Indexes[3]=3;
     Indexes[4]=18;
     Indexes[5]=10;
    }
    else if(position==12)
    {
     Indexes[0]=8;
     Indexes[1]=17;
     Indexes[2]=12;
     Indexes[3]=13;
     Indexes[4]=14;
     Indexes[5]=12;
    }
    else if(position==13)
    {
    Indexes[0]=12;
    Indexes[1]=14;
    Indexes[2]=13;
    Indexes[3]=5;
    Indexes[4]=20;
    Indexes[5]=13;
    }
    else if(position==14)
    {
        Indexes[0]=12;
        Indexes[1]=13;
        Indexes[2]=14;
        Indexes[3]=2;
        Indexes[4]=23;
        Indexes[5]=14;
    }
    else if(position==15)
    {
       Indexes[0]=17;
       Indexes[1]=16;
       Indexes[2]=15;
       Indexes[3]=11;
       Indexes[4]=6;
       Indexes[5]=15;
       Indexes[6]=18;
       Indexes[7]=21;
       Indexes[8]=15;
    }
    else if(position==16)
    {
     Indexes[0]=15;
     Indexes[1]=17;
     Indexes[2]=16;
     Indexes[3]=19;
     Indexes[4]=22;
     Indexes[5]=16;
    }
    else if(position==17)
    {
     Indexes[0]=15;
     Indexes[1]=16;
     Indexes[2]=17;
     Indexes[3]=12;
     Indexes[4]=8;
     Indexes[5]=17;
     Indexes[6]=20;
     Indexes[7]=23;
     Indexes[8]=17;
    }
    else if(position==18)
    {
      Indexes[0]=19;
      Indexes[1]=20;
      Indexes[2]=18;
      Indexes[3]=10;
      Indexes[4]=3;
      Indexes[5]=18;
      Indexes[6]=21;
      Indexes[7]=15;
      Indexes[8]=18;
    }
    else if(position==19)
    {
       Indexes[0]=18;
       Indexes[1]=20;
       Indexes[2]=19;
       Indexes[3]=16;
       Indexes[4]=22;
       Indexes[5]=19;
    }
    else if(position==20)
    {
      Indexes[0]=19;
      Indexes[1]=18;
      Indexes[2]=20;
      Indexes[3]=23;
      Indexes[4]=17;
      Indexes[5]=20;
      Indexes[6]=13;
      Indexes[7]=5;
      Indexes[8]=20;
    }
    else if(position==21)
    {
     Indexes[0]=22;
     Indexes[1]=23;
     Indexes[2]=21;
     Indexes[3]=9;
     Indexes[4]=0;
     Indexes[5]=21;
     Indexes[6]=18;
     Indexes[7]=15;
     Indexes[8]=21;
    }
    else if(position==22)
    {
    Indexes[0]=21;
    Indexes[1]=23;
    Indexes[2]=22;
    Indexes[3]=19;
    Indexes[4]=16;
    Indexes[5]=22;
    }
    else if(position==23)
    {
      Indexes[0]=21;
      Indexes[1]=22;
      Indexes[2]=23;
      Indexes[3]=20;
      Indexes[4]=17;
      Indexes[5]=23;
      Indexes[6]=14;
      Indexes[7]=2;
      Indexes[8]=23;
    }

}


}
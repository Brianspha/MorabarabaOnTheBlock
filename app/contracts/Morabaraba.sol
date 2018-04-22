pragma solidity ^ 0.4.21;


contract MorabarabaContract
{
struct SessionPlayer
{ 
 address Id; //This links to the actual players contract    
 uint8 UnplacedPieces;//How many pieces has the player not placed on the board
 uint8 PlacedPieces;//How many pieces has the player placed on the board
 uint8 State; //Either Placing, Flying Shooting or Stationary
 mapping(uint8 => Mill) PlayerMills;
 uint8 MillCount;
}
//Represents each position on the board
struct Node 
{
uint8 Index;
bool InAMill;
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
 uint8 NodeCount;//Ensure that only 24 nodes are added to the Board
 bool Activated;//Keeps track of whether the Board has been initialised or not
 PossibleMills posiblebMills;//Keeps track of every possible mill that can be formed
 mapping (uint8 =>Node) InternalBoard;

}
//Keeps track of every possible mill in the game
struct PossibleMills
{
 bool Activated;//Prevents the adding of Mills over and over again    
 uint8 Count;
 mapping(uint8 => Mill) Mills;
}
//Represents each morabaraba Game session
struct Morabaraba
{
 SessionPlayer P1;
 SessionPlayer P2;
 Board CurrentBoard;
 address Winner;
 address Loser;
 uint256 SessionId;
}
Morabaraba currentGameSession;
uint8 constant Flying=3;
uint8 constant Shooting=2;
uint8 constant Moving=1;
uint8 constant Stationary=0;
uint256 SessionIdCount=0;
PossibleMills tempPossible;

//@Dev Constructor
function MorabarabaContract()
{
    require(!tempPossible.Activated);
    tempPossible = PossibleMills(true,60);
    Mill []  memory tempMills =new Mill[](60);
    tempMills[0]=Mill(Node(1,true),Node(2,true),Node(0,true));
    tempMills[1]=Mill(Node(3,true),Node(6,true),Node(0,true));
    tempMills[2]=Mill(Node(9,true),Node(21,true),Node(0,true));
    tempMills[3]=Mill(Node(0,true), Node(2,true),Node(1,true));
    tempMills[4]=Mill(Node(4,true), Node(7,true), Node(1,true));
    tempMills[5]=Mill(Node(1,true), Node(0,true), Node(2,true));
    tempMills[6]=Mill(Node(5,true), Node(8,true), Node(2,true));
    tempMills[7]=Mill(Node(14,true), Node(23,true), Node(2,true));
    tempMills[8]=Mill(Node(0,true),Node(6,true),Node(3,true));
    tempMills[9]=Mill(Node(4,true),Node(5,true),Node(3,true));
    tempMills[10]=Mill(Node(18,true),Node(10,true),Node(3,true));
    tempMills[11]=Mill(Node(1,true),Node(7,true),Node(4,true));
    tempMills[12]=Mill(Node(3,true),Node(5,true),Node(4,true));
    tempMills[13]=Mill(Node(2,true),Node(8,true),Node(5,true));
    tempMills[14]=Mill(Node(4,true),Node(3,true),Node(5,true));
    tempMills[15]=Mill(Node(13,true),Node(20,true),Node(5,true));
    tempMills[16]=Mill(Node(7,true),Node(8,true),Node(6,true));
    tempMills[17]=Mill(Node(3,true),Node(0,true),Node(6,true));
    tempMills[18]=Mill(Node(11,true),Node(15,true),Node(6,true));
    tempMills[19]=Mill(Node(6,true),Node(8,true),Node(7,true));
    tempMills[20]=Mill(Node(4,true),Node(1,true),Node(7,true));
    tempMills[21]=Mill(Node(12,true),Node(17,true),Node(8,true));
    tempMills[22]=Mill(Node(5,true),Node(2,true),Node(8,true));
    tempMills[23]=Mill(Node(6,true),Node(7,true),Node(8,true));
    tempMills[24]=Mill(Node(10,true),Node(11,true),Node(9,true));
    tempMills[25]=Mill(Node(0,true),Node(21,true),Node(9,true));
    tempMills[26]=Mill(Node(11,true),Node(9,true),Node(10,true));
    tempMills[27]=Mill(Node(3,true),Node(18,true),Node(10,true));
    tempMills[28]=Mill(Node(9,true),Node(10,true),Node(11,true));
    tempMills[29]=Mill(Node(6,true),Node(15,true),Node(11,true));
    tempMills[30]=Mill(Node(8,true),Node(17,true),Node(12,true));
    tempMills[31]=Mill(Node(13,true),Node(14,true),Node(12,true));
    tempMills[32]=Mill(Node(12,true),Node(14,true),Node(13,true));
    tempMills[33]=Mill(Node(5,true),Node(20,true),Node(13,true));
    tempMills[34]=Mill(Node(12,true),Node(13,true),Node(14,true));
    tempMills[35]=Mill(Node(2,true),Node(23,true),Node(14,true));
    tempMills[36]=Mill(Node(17,true),Node(16,true),Node(15,true));
    tempMills[37]=Mill(Node(11,true),Node(6,true),Node(15,true));
    tempMills[38]=Mill(Node(18,true),Node(21,true),Node(15,true));
    tempMills[39]=Mill(Node(15,true),Node(17,true),Node(16,true));
    tempMills[40]=Mill(Node(19,true),Node(22,true),Node(16,true));         
    tempMills[41]=Mill(Node(15,true),Node(16,true),Node(17,true));
    tempMills[42]=Mill(Node(12,true),Node(8,true),Node(17,true));
    tempMills[43]=Mill(Node(20,true),Node(23,true),Node(17,true));
    tempMills[44]=Mill(Node(19,true),Node(20,true),Node(18,true));
    tempMills[45]=Mill(Node(3,true), Node(10,true),Node(18,true));
    tempMills[46]=Mill(Node(15,true),Node(21,true),Node(18,true));
    tempMills[47]=Mill(Node(16,true),Node(22,true),Node(19,true));
    tempMills[48]=Mill(Node(20,true),Node(18,true),Node(19,true));
    tempMills[49]=Mill(Node(19,true),Node(18,true),Node(20,true));
    tempMills[50]=Mill(Node(23,true), Node(17,true),Node(20,true));
    tempMills[51]=Mill(Node(13,true),Node(5,true),Node(20,true));
    tempMills[52]=Mill(Node(22,true),Node(23,true),Node(21,true));
    tempMills[53]=Mill(Node(9,true),Node(0,true),Node(21,true));
    tempMills[54]=Mill(Node(18,true),Node(15,true),Node(21,true));
    tempMills[55]=Mill(Node(21,true),Node(23,true),Node(22,true));
    tempMills[56]=Mill(Node(19,true),Node(16,true),Node(22,true));
    tempMills[57]=Mill(Node(21,true),Node(22,true),Node(23,true));
    tempMills[58]=Mill(Node(20,true),Node(17,true),Node(23,true));
    tempMills[59]=Mill(Node(14,true),Node(2,true),Node(23,true));
    for(uint8 a =0; a < 60;a++)
    {
        tempPossible.Mills[a]=tempMills[a];
    }
}
//@Dev Responsible for starting a new game 
function NewGame(address one,address two) returns (bool success)
{
  require(one !=address(0));
  require (two != address(0));//Malicious address
  SessionPlayer memory p1 = SessionPlayer(one,12,0,0,0);
  SessionPlayer memory p2 = SessionPlayer(two,12,0,0,0);
  Node []  memory nodes =new Node[](24);
  for(uint8 i =0; i < 24;i++)
  {
      Node memory temp = Node(i,false);
      nodes[i]=temp;
  }
  Board memory brd = Board(24,true,tempPossible);
  for(uint8 a=0;a<24;a++)
  {
      brd.InternalBoard[a]=nodes[a];
  }
  currentGameSession=Morabaraba(p1,p2,brd,one,two,SessionIdCount++);
  success =true;
}


}
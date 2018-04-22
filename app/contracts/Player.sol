pragma solidity ^0.4.23;

contract PlayerContract
{
struct Player
{
 address Id;//Used to identify each player
 uint256 TotalWinnings;//Total winnings the player has won this will be the total DOGO tokens they've won
 uint256 TotalWins;//The number of wins the player has thus far
 uint256 TotalLosses;//The number of times the player has lost
 bool Active;//used to check if the player instance is active or not
 uint256 PreviousOpponentCount;//no of opponents that the user has faced 
 address [] PreviousOpponentsAddresses;//Keeps track of previous opponents addresses
 mapping (address=>Player) PreviousOponnents;//Previous opponents the player has faced
}
uint256 DefualtTokenAward=10;//defualt no of tokens awarded to a player for each win
mapping(address=>Player) RegisteredPlayers;
//No constructor needed since we not initialising anything within it due to change in the future
//This function is responsible for initialising the a player object
function RegisterPlayer(address id) public returns (bool success)
{
 require(id != address(0));
 require(!RegisteredPlayers[id].Active);//Player must not be registerd
 address [] memory PreviousOps= new address[](1000000);//make space for a million addresses
 RegisteredPlayers[id]=Player(msg.sender,0,0,0,true,0,PreviousOps);
 success=true;
}
//@Dev This function updates the specified players total wins i.e. player is awarded DOGO's by defualt 10 dogos are awarded for each win
function UpdatePlayerTotalWinnings(address id) internal returns (bool success) 
{
 require(id != address(0));//ensure the address is valid and not malicious
 require(RegisteredPlayers[id].Active);//player is registered
 RegisteredPlayers[id].TotalWinnings +=  DefualtTokenAward;
 success=true;
}
//@Dev updates the players total Wins
function UpdatePlayerTotalWins(address id) public returns (bool success) 
{
 require(id != address(0));//ensure the address is valid and not malicious
 require(RegisteredPlayers[id].Active);//player is registered
 RegisteredPlayers[id].TotalWins++;//increment by one
 require(UpdatePlayerTotalWinnings(id));// esnure that we reward the player for winning 
 success=true;
}
//@Dev updates the players totatal losses
function UpdatePlayerTotalLosses(address id) public returns (bool success) 
{
 require(id != address(0));//ensure the address is valid and not malicious
 require(RegisteredPlayers[id].Active);//player is registered
 RegisteredPlayers[id].TotalLosses++;//increment by one
 success=true;
}
//@Dev This method adds an opponent to the players previous opponents list 
function AddPreviousOpponent(address opponent,address player) public returns (bool success)
{
 require(opponent != address(0) && player != address(0));//ensure that both address are safe and not invalid
 require (RegisteredPlayers[opponent].Active&&RegisteredPlayers[player].Active);//Both player and opponent must be registered
 RegisteredPlayers[player].PreviousOponnents[opponent]=RegisteredPlayers[opponent];
 RegisteredPlayers[player].PreviousOpponentCount++;//increment by one
 RegisteredPlayers[opponent].PreviousOpponentCount++;//increment by one
 //This if statement ensures that if the opponent has faced the player i.e current winner the information contained in their records is updated as well
 if(RegisteredPlayers[opponent].PreviousOponnents[player].Active)
 {
     RegisteredPlayers[opponent].PreviousOponnents[player].PreviousOpponentCount++;
 }
 RegisteredPlayers[player].PreviousOponnents[opponent].PreviousOpponentCount++;
 success=true;
}
//@Dev this returns the players Information constant because we are not modifying the state of the player
function GetPlayer(address id) public constant returns (uint256 TotalWinnings,uint256 TotalWins,uint256 TotalLosses,address [] PreviousOps)
{
  require(id!=address(0));
  require(RegisteredPlayers[id].Active);
  PreviousOps =RegisteredPlayers[id].PreviousOpponentsAddresses;
  TotalWinnings =RegisteredPlayers[id].TotalWinnings;
  TotalLosses =RegisteredPlayers[id].TotalLosses;
  TotalWins =RegisteredPlayers[id].TotalWins;
 }
}

pragma solidity ^ 0.4.23;

//@Dev Interface for the Morabaraba Game
contract IMorabaraba
{
function NewGame (address p1,address p2) returns (bool success);
function MakeMove (address player,uint8 position) returns (string message);
function CheckForMill () returns (bool found);
function ShootCow () returns (string message);
function MakeMill (address playerId) returns (bool success);
function UpdatePlayerState (address id) returns (bool success);
function UpdatePlayerMills (address id) returns (bool success);
}
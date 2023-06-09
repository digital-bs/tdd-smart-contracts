// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract FootballerFactory {

    event NewFootballer(uint footballerId, string name, uint dna);

    uint private dnaDigits = 16;
    uint private dnaModulus = 10 ** 16;
    uint private footballerCount;

    struct Footballer{
        string name;
        uint dna;
    }

    Footballer[] private footballers;
    
    function getDnaDigits() public view returns (uint) {
        return dnaDigits;
    }
    function getDnaModulus() public view returns (uint) {
        return dnaModulus;
    }  
    function getFootballerCount() public view returns (uint) {
        return footballerCount;
    } 
    function createFootballer(string memory name, uint dna) public {
        footballers.push(Footballer(name, dna));
        footballerCount++;
        uint id = footballers.length - 1;
        emit NewFootballer(id, name, dna);
    }

    function getAllFootballers() view public returns (Footballer[] memory){
        return footballers;
    }
    
    function generateRandomDna(string memory _str) public view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

    function createRandomFootballer(string memory _name) public {
        uint randDna = generateRandomDna(_name);
        createFootballer(_name, randDna);
    }

}

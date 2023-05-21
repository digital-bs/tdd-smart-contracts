// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract FootballerFactory {

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
    }

    function getAllFootballers() view public returns (Footballer[] memory){
        return footballers;
    }

    
}

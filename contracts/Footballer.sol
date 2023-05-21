// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract FootballerFactory {

    uint private dnaDigits = 16;
    uint private dnaModulus = 10 ** 16;
    uint private footballerCount;
    
    function getDnaDigits() public view returns (uint) {
        return dnaDigits;
    }
    function getDnaModulus() public view returns (uint) {
        return dnaModulus;
    }  
    function getFootballerCount() public view returns (uint) {
        return footballerCount;
    } 

}

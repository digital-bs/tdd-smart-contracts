// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract FootballerFactory {

    uint private dnaDigits = 16;
    
    function getDnaDigits() public view returns (uint) {
        return dnaDigits;
    }

}

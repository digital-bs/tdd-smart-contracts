const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FootballerAcademy", function(){

    it("get Footballer contract", async function(){
        const footballerContract = await ethers.getContractFactory("FootballerFactory");
    });

});
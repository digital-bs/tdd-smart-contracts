const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("FootballerAcademy", function(){
    let footballerContractFactory;
    let footballerContract;

    it("get Footballer contract", async function(){
        const footballerContract = await ethers.getContractFactory("FootballerFactory");
    });
    beforeEach(async function() {        
        footballerContractFactory = await ethers.getContractFactory("FootballerFactory");
        footballerContract = await footballerContractFactory.deploy();
    })

    it("get dnaDigits", async function() {        
        const dnaDigits = await footballerContract.getDnaDigits();
        expect(dnaDigits).to.equal(16);
    });



});
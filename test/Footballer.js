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

    it("get dnaDigits for generating footballers", async function() {        
        const dnaDigits = await footballerContract.getDnaDigits();
        expect(dnaDigits).to.equal(16);
    });

    it("get dnaModulus for generating footballers", async function() {        
        const dnaModulus = await footballerContract.getDnaModulus();
        expect(dnaModulus/1000000).to.equal(10 ** 10);
    });

    it("get footballerCount", async function() {        
        const footballerCount = await footballerContract.getFootballerCount();
        expect(footballerCount).to.equal(0);
    });



});
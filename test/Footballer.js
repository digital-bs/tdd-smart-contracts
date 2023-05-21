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

    it("Each footballer should have name and dna, we can create and get list of footballers", async function () {
        await footballerContract.deployed();      
        await footballerContract.createFootballer("number1", 1771);
        await footballerContract.createFootballer("number2", 5555);
        const [firstFootballer, secondFootballer] = await footballerContract.getAllFootballers();

        expect(firstFootballer.name).to.equal("number1");
        expect(firstFootballer.dna).to.equal(1771);
        expect(secondFootballer.name).to.equal("number2");
        expect(secondFootballer.dna).to.equal(5555);
        expect(await footballerContract.getFootballerCount()).to.equal(2);
    });

    it("generate dna based on keccak256 under str", async function()
    {
       await footballerContract.deployed();
       const randomDna = await footballerContract.generateRandomDna("randFootballer");
       console.log(randomDna);
       expect(randomDna).to.equal(2007898401940750);
    });


});
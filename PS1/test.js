const {reverseAlpha} = require('./PS1.P1');
const {getOperator,parse} = require('./PS1.P2');
const {doFunction} = require('./PS1.P3');

const {describe,it} = require('mocha');
const {expect} = require('chai');

describe('Reverse Alpha Tests', ()=>{
    it('should sort string and reverse: ', ()=>{
        let res = reverseAlpha('supercalifragilisticexpialidocious');
        expect(res).to.be.equal('xuutsssrrppoollliiiiiiigfeedcccaaa')
    });

    it('should sort string and reverse ', ()=>{
        let res = reverseAlpha('reverse');
        expect(res).to.be.equal('vsrreee');
    });

});

describe('getOperator tests', ()=>{
    it('should return 8 when given \'2*4\': ', ()=>{
        let res = getOperator('2*4')(parse('2*4')[0],parse('2*4')[1]);
        expect(res).to.be.equal(8);
    });

    it('should return 2 when given \'4/2\': ', ()=>{
        let res = getOperator('4/2')(parse('4/2')[0],parse('4/2')[1]);
        expect(res).to.be.equal(2);
    });

});

describe('doFunction on decorator test', ()=>{
    it('should split string on the letter c ', ()=>{
        let res = doFunction('supercalifragilisticexpialidocious', (inp) => inp.replace(/c/g,",c").split(","));
        expect(res).to.have.ordered.members([ 'super', 'califragilisti', 'cexpialido', 'cious' ]);
    });

    it('returns object w/original string, modified string, number of chars replaced, and original legnth of string.', ()=>{
        let res = doFunction('supercalifragilisticexpialidocious', (inp) => {
                let objectOfStringInfo = {
                    originalString: inp,
                    modifiedString: inp.replace(/a/g,"A"),
                    numberReplaced: inp.replace(/a/g,"A").split("A").length-1,
                    length: inp.length
                };
                return objectOfStringInfo;
            }
        );
        let ans = {
            originalString: 'supercalifragilisticexpialidocious',
            modifiedString: 'supercAlifrAgilisticexpiAlidocious',
            numberReplaced:  3,
            length: 34
        };
        expect(res).to.be.deep.equal(ans);
    });

});
const formatFullName = require('../formatFullName.js');
const expect = require('chai').expect;

describe('FormatFullName', () => {

  it('should return an error if "fullName" arg is not a string or is empty', () => {
    expect(formatFullName(132)).to.equal('Error');
    expect(formatFullName(undefined)).to.equal('Error');
    expect(formatFullName({})).to.equal('Error');
    expect(formatFullName([])).to.equal('Error');
    expect(formatFullName(function() {})).to.equal('Error');
    expect(formatFullName()).to.equal('Error')
  });
  
  it('should return an error if "fullName" arg is not two words', () => {
    expect(formatFullName('test')).to.equal('Error');
    expect(formatFullName('test test test')).to.equal('Error');
  });

  it('should return correct format of string', () => {
    expect(formatFullName('john doe')).to.equal('John Doe');
    expect(formatFullName('jOHN dOe')).to.equal('John Doe');
    expect(formatFullName('JOHN DOE')).to.equal('John Doe');
  });
   
});
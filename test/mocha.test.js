const { expect } = require('chai');

const currentTime = () => {
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`
    return date;
}

describe('Current Date', () => {
    it('Should show date of today', () => {
        expect(currentTime()).to.deep.equal('3/6/2022')

    })
})
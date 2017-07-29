class Year {
  constructor(year) {
    this.year = year;
  }

  isLeap() {
    var y = this.year;
    var divisibleByFour = y % 4 == 0;
    var divisibleByOneHundred = y % 100 == 0;
    var divisibleByFourHundred = y % 400 == 0;
    return divisibleByFour && (!divisibleByOneHundred || divisibleByFourHundred);
  }
}

export default Year;

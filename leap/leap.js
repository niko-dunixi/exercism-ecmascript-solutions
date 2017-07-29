class Year {
  constructor(year) {
    this.y = year;
  }

  isLeap() {
    console.log(this.year);
    return this.year % 4 == 0; // && (this.year % 100 != 0 || this.year % 400 == 0);
  }
}

export default Year;

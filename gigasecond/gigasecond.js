const gigasecond = (10 ** 9) * 1000; // gigaseconds converted to ms

class Gigasecond {
  constructor(date) {
    // This is super un-intuitive. Especially because every other
    // resource shows that setSecond should work just fine.
    // TL;DR: it doesn't :/
    this.futureDate = new Date(date.getTime() + gigasecond);
  }

  date() {
    return this.futureDate;
  }
}

export default Gigasecond;

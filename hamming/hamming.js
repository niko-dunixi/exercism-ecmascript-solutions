class Hamming {

  compute(a, b) {
    var distance = 0;

    for (var i = 0, length = a.length; i < length; i++) {
      var first = a.charAt(i);
      var second = b.charAt(i);
      if (first != second) {
        distance++;
      }
    }
    return distance;
  }

}

export default Hamming;

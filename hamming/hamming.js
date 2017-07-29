class Hamming {

  compute(a, b) {
    if (a.length != b.length) {
      // How to throw exceptions:
      //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
      throw 'DNA strands must be of equal length.';
    }

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

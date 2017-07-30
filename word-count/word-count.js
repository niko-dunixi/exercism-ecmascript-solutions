class Words {
  count(phrase) {
    let words = phrase.trim().toLowerCase().split(/\s+/)

    // We can't create a dict literal with curly brackets.
    // This results in a NaN for the string 'constructor'.
    // I don't know why, but this solution works.
    //    https://mcculloughwebservices.com/2015/05/12/exercism-word-count/
    // This gives /some/ incite.
    //    http://www.htmlgoodies.com/beyond/javascript/object.create-the-new-way-to-create-objects-in-javascript.html
    let result = Object.create(null);

    for (let word of words) {
      if (word in result) {
        result[word]++;
      } else {
        result[word] = 1;
      }
    }
    return result;
  }
}

export default Words;

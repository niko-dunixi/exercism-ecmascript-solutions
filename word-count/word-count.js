class Words {
  count(phrase) {
    let words = phrase.split(/\s+/)
    let result = {};
    for (let word of words) {
      if (result[word]) {
        result[word]++;
      } else {
        result[word] = 1;
      }
    }
    return result;
  }
}

export default Words;

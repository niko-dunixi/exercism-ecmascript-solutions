class Words {
  count(phrase) {
    let words = phrase.trim().toLowerCase().split(/\s+/)
    let result = {};
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

class Transcriptor {
  toRna(dna) {
    let rna = '';
    for (let i = 0, length = dna.length; i < length; i++) {
      let current = dna.charAt(i);
      if (current === 'G') {
        rna += 'C';
      } else if (current === 'C') {
        rna += 'G';
      } else if (current === 'T') {
        rna += 'A';
      } else if (current === 'A') {
        rna += 'U';
      } else {
        throw 'Invalid input DNA.';
      }
    }
    return rna;
  }
}

export default Transcriptor;

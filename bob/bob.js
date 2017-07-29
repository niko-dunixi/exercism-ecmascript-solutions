/* eslint-disable no-unused-vars */

class Bob {
  hey(message) {
    // Note, we need to include unicode ranges to get this to work:
    //  https://stackoverflow.com/a/22017800/1478636
    if (message.match(/[A-Z\u00c4-\u00df]/u) && !message.match(/[a-z\u00e4-\u00fc]/u)) {
      return 'Whoa, chill out!';
    } else if (message.match(/\?$/)) {
      return 'Sure.';
    } else if (message.match(/^\s*$/)) {
      return 'Fine. Be that way!'
    }
    return 'Whatever.';
  }
}

export default Bob;

/* eslint-disable no-unused-vars */

class Bob {
  hey(message) {
    if (message.match(/\?$/)) {
      return "Sure."
    } else if (message.match(/[A-Z]/) && !message.match(/[a-z]/)) {
      return "Whoa, chill out!";
    }
    return 'Whatever.';
  }
}

export default Bob;

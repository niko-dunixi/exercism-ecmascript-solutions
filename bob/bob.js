/* eslint-disable no-unused-vars */

class Bob {
  hey(message) {
    if (message.match(/[A-Z]/) && !message.match(/[a-z]/)) {
      return "Whoa, chill out!";
    } else if (message.match(/\?$/)) {
      return "Sure."
    }
    return 'Whatever.';
  }
}

export default Bob;

const firstTask = (string, number) => string.length <= number;

const secondTask = (string) => {
string = string.toLowerCase().replaceAll('', '');
return string === string.split('').reverse().join('');
}

const thirdTask = (string) => {
  if (typeof string === 'number') {
    return string;
  }
    let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
    result += string.at(i);
    }
  }
    return parseInt(result, 10);
}

const myPadStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
    return pad.slice(0, actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}


exports.moneyFormat = function moneyFormat(money) {
  return money.toLocaleString();
}

exports.toThousandsNum = function toThousandsNum(money) {
  let result = '';
  let strMoney = (money || 0).toString();
  let [integerPart, decimalPart] = strMoney.split('.');

  while (integerPart.length > 3) {
    result = `,${integerPart.slice(-3)}${result}`;
    integerPart = integerPart.slice(0, integerPart.length - 3);
  }

  if (integerPart) {
    result = integerPart + result;
  }

  return result;
}

exports.toThousands = function toThousands(money) {
  let strMoney = (money || 0).toString();
  let result = [];
  let counter = 0;

  for (let i = strMoney.length - 1; i >= 0; i--) {
    counter++;
    result.unshift(strMoney[i]);
    if (counter % 3 === 0 && i !== 0) {
      result.unshift(',');
    }
  }

  return result.join('');
}


module.exports = function removeLeastFrequentCharacter(str) {
  const mapper = {};
  for (let i = 0; i < str.length; i++) {
    const ele = str[i];
    if (!mapper[ele]) {
      mapper[ele] = 0;
    }
    mapper[ele] += 1;
  }

  const keys = Object.keys(mapper);
  const values = Object.values(mapper);
  const minNum = Math.min(...values);
  const delChars = keys.filter(key => mapper[key] === minNum);
  const result = Array.from(str).filter(char => !delChars.includes(char)).join('');

  return result;
}

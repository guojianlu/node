module.exports = function getQueryParams() {
  const result = {};
  const queryString = window.location.search;
  // ?name=tom&age=18
  const reg = /[?&][^?&]+=[^?&]+/g;
  const found = queryString.match(reg);
  // ['?name=tom', '&age=18']
  if (found) {
    found.forEach(item => {
      const temp = item.substring(1).split('=');
      const [key, value] = temp;
      result[key] = value;
    });
  }

  return result;
}

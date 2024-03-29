module.exports = function compile(template) {
  template = template.replace(/\{\{([^}]+)\}\}/g, function () {
    let key = arguments[1].trim();
    return "${" + key + "}";
  });

  let head = `let str = '';\r\n with(obj){\r\n`;
  head += "str+=`";
  template = template.replace(/\{\%([^%]+)\%\}/g, function () {
    return "`\r\n" + arguments[1] + "\r\nstr+=`\r\n";
  });

  let tail = "`}\r\n return str;";
  console.log(`==========render=========`)
  console.log(head + template + tail);
  return new Function("obj", head + template + tail);
}

// const obj = {name: "tom"};
// const template1 = "<b>{{ name }}</b>";
// const template2 = "<b>{{ name.toUpperCase() }}</b>";
// const generate1 = compile(template1);
// const generate2 = compile(template2);
// console.log(generate1(obj));
// console.log(generate2(obj));

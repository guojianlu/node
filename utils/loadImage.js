module.exports = function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = function onload() {
      resolve(img);
    }
    img.onerror = function onerror() {
      const error = new Error(`图片加载失败，url为：${url}`);
      reject(error);
    }
    img.src = url;
  });
}

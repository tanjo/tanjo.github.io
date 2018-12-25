window.onload = () => {
  [...document.querySelectorAll('.clipboard')].forEach((e) => {
    e.addEventListener("click", () => {
      copy(e.dataset.clipboard);
    });
  });
};

function copy(string) {
  var tmp = document.createElement('div');
  tmp.appendChild(document.createElement('pre')).textContent = string;
  var s = tmp.style;
  s.position = 'fixed';
  s.left = '-100%';
  document.body.appendChild(tmp);
  document.getSelection().selectAllChildren(tmp);
  var result = document.execCommand('copy');
  document.body.removeChild(tmp);
  return result;
}

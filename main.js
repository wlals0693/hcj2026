document.getElementById('time').innerHTML = new Date().toLocaleString();

function pink() {
  document.body.style.backgroundColor = 'pink';
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue';
}
function yellow() {
  document.body.style.backgroundColor = 'yellow';
}
function reset() {
  document.body.style.backgroundColor = 'linen';
}

function showhtml() {
  document.getElementById('fig').src = 'image/HTML.png';
  document.getElementById('desc').innerHTML =
    'HTML은 웹문서를 작성하는데 사용하는 마크업 언어이다.';
}
function showcss() {
  document.getElementById('fig').src = 'image/css.png';
  document.getElementById('desc').innerHTML =
    'CSS는 웹문서의 스타일을 지정하는데 사용하는 언어이다.';
}
function showjs() {
  document.getElementById('fig').src = 'image/js.png';
  document.getElementById('desc').innerHTML =
    'javascript는 웹을 위한 프로그래밍 언어이며 웹문서에게 동작을 실행 할 수 있게 한다.';
}

function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}

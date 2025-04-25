
const textLines = [
  '이제혁의 포트폴리오에 오신 것을 환영합니다.',
  '왼쪽은 저의 사진입니다.'
];

const typing = document.getElementById('typing');
let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < textLines.length) {
    const currentLine = textLines[lineIndex];
    if (charIndex < currentLine.length) {
      typing.innerHTML += currentLine[charIndex];
      charIndex++;
      setTimeout(typeLine, 50);
    } else {
      typing.innerHTML += '<br>';
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLine, 300);
    }
  }
}

window.onload = typeLine;

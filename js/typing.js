const qBox = document.querySelector(".qBox");

//타이핑 관련 변수
function typing(){

  if(typingIdx <= content.length-1){
      qBox.textContent += content[typingIdx++];
  }

  else{ //길이가 넘으면
    qBox.textContent = content;
  }
}
setInterval(typing, 200);

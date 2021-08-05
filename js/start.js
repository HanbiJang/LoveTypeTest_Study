const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function begin(){
  // 1초 동안 메인 섹션이 사라지고, qna 섹션이 등장함
  main.style.WebkitAnimation = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";

  //1초 뒤에 실행되게 함
  setTimeout(()=>{
    // 애니메이션 시작
    qna.style.WebkitAnimation = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";

    setTimeout(()=>{
        main.style.display = "none";
        qna.style.display = "block";

    },450);
    let qIdx = 0;
    goNext(qIdx);

  },450);

}

//버튼 만드는 함수
function addAnswer(answerText , qIdx){
  var a = document.querySelector('.answerBox'); //선택지
  var answerBtn = document.createElement('button'); //지정한 태그 네임에 해당하는 html 요소를 만들어 만환
  answerBtn.classList.add('answerList');
  answerBtn.classList.add('my-5');
  answerBtn.classList.add('py-3');
  answerBtn.classList.add('mx-auto'); //센터에 위치하게 비율
  answerBtn.classList.add('fadeIn');

  a.appendChild(answerBtn); //answer (버튼)을  a의 자식으로 html 만들어버림
  answerBtn.innerHTML = answerText; //버튼 텍스트 설정

  answerBtn.style.WebkitAnimation = "fadeIn 1s";
  answerBtn.style.WebkitAnimation = "fadeIn 1s";


  //버튼을 클릭하면 버튼이 사라짐
  answerBtn.addEventListener("click", function(){
    var children = document.querySelectorAll('.answerList');

    for(let i = 0; i < children.length; i++){
      children[i].disabled = true;
      children[i].style.WebkitAnimation = "fadeOut 1s";
      children[i].style.animation = "fadeOut 1s";
    }

    setTimeout(()=>{ //950ms 뒤에 실행됨

      for(let i = 0; i < children.length; i++){
        children[i].style.display= 'none';
      }

      goNext(++qIdx); //다음 질문 가져오기

    },950)

  }, false);


}

//qIdx에 해당하는 질문과 선택지 버튼을 가져오는 함수
function goNext(qIdx){
  var q = document.querySelector('.qBox'); //index.html의 변수 qBox //질문 영역
  q.innerHTML = qnaList[qIdx].q; //data의 질문 리스트의 첫번째 요소를 가져와서 q에 넣음

  for (let i in qnaList[qIdx].a){ //각 선택지 텍스트 배열에 대해서 반복하기
    addAnswer(qnaList[qIdx].a[i].answer, qIdx); //버튼을 만드는 함수
  }
}

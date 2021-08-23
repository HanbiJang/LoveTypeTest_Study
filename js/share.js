const url = "https://natsumelovetype.netlify.app"

//공유하기 기능에 대한 정보 설정
function setShare(){
  var resultImg = document.querySelector('#resultImg');
  var resultAlt = resultImg.firstElementChild.alt; //resultImg 존에 스크립트로 child로써 이미지를 넣어줬었음(start.js 에서)

  const shareTitle = '나의 게임 속 직업 결과';
  const shareDes = infoList[resultAlt].name;
  const shareImg = url + '/img/image-' + resultAlt + '.png';
  const sharLink = url + '/results/result-' + resultAlt + '.html';

  Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
      title: shareTitle,
      description: shareDes,
      imageUrl:shareImg,
      link: {
        mobileWebUrl: sharLink,
        webUrl: sharLink
      },
    },

    buttons: [
      {
        title: '결과 확인하Gi',
        link: {
          mobileWebUrl: sharLink,
          webUrl: sharLink
        },
      },

    ]
  });
}

function kakaoShare(){



}
  // Kakao.Link.sendDefault({
  //   objectType: 'feed',
  //   content: {
  //     title: '디저트 사진',
  //     description: '아메리카노, 빵, 케익',
  //     imageUrl:
  //       'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
  //     link: {
  //       mobileWebUrl: 'https://developers.kakao.com',
  //       androidExecutionParams: 'test',
  //     },
  //   },
  //   social: {
  //     likeCount: 10,
  //     commentCount: 20,
  //     sharedCount: 30,
  //   },
  //   buttons: [
  //     {
  //       title: '웹으로 이동',
  //       link: {
  //         mobileWebUrl: 'https://developers.kakao.com',
  //       },
  //     },
  //     {
  //       title: '앱으로 이동',
  //       link: {
  //         mobileWebUrl: 'https://developers.kakao.com',
  //       },
  //     },
  //   ]
  // });

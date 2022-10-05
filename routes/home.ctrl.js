const home = (req, res) => {
  // function (req, res) { .. } 와 같음.
  // get 요청이 들어오면 응답
  //res.send('Hello World'); // 서버에서 text로 응답
  //res.sendFile(__dirname+"/public/main.html"); // HTML 파일로 응답
  res.render("index", {
    title: "여행플랫폼 : hanul",
    subtitle: "한울투어",
    message: "새로운 여행지를 검색하세요",
    src: "images/welcome.jpg",
  }); // pug로 응답
};

const tour = (req, res) => {
  // get 요청이 들어오면 응답
  //res.sendFile(__dirname+"/public/reserve.html"); // HTML 파일로 응답
  res.render("tour", {
    title: "여행플랫폼 : hanul",
    subtitle: "한울투어",
    message: "한울투어는 어떤 서비스일까요?",
    src: "images/tour-cover.jpg",
  });
};

const reserve = (req, res) => {
  // get 요청이 들어오면 응답
  //res.sendFile(__dirname+"/public/reserve.html"); // HTML 파일로 응답
  res.render("reserve", {
    title: "여행플랫폼 : hanul",
    subtitle: "예약/확인",
    message: "고객님의 예약사항을 확인하세요",
    src: "images/reserve-cover.jpg",
  });
};

const customer = (req, res) => {
  // get 요청이 들어오면 응답
  //res.sendFile(__dirname+"/public/reserve.html"); // HTML 파일로 응답
  res.render("cs", {
    title: "여행플랫폼 : hanul",
    subtitle: "고객센터",
    message: "무엇이든 물어보세요!",
    src: "images/cs-cover.jpg",
  });
};

const sendPost = (req, res) => {
  //   자바스크립트 xhr을 이용한 post 데이터가 전송되면, 이를 출력
  //   console.log("수신 데이터 : ", req.body);
  //   console.log("수신 데이터 타입 : ", typeof req.body);
  //   res.send("<h1>POST 데이터가 정상적으로 수신되었습니다.</h1>");
  res.render("http-done", {
    title: "여행플랫폼 : hanul",
    subtitle: "post 통신 완료",
    message: "post 데이터 전송 완료",
    src: "images/done-cover.jpg",
    received_name: req.body.guest_name,
    received_phone: req.body.guest_phone,
  });
}

const sendPostAjax = (req, res) => {
  // 실제 서비스로직상 DB와 연동해서 회원정보 유무를 확인하고,
  // 이에 따른 처리를 실시해야 함!
  console.log("수신 데이터 : ", req.body);
  console.log("수신 데이터 타입 : ", typeof req.body);

  // 클라이언트에게 전송할 데이터
  const responseData = {
    guest_name: req.body.name,
    guest_phone: req.body.phone,
  };
  res.json(responseData); // json 타입으로 응답함
}

module.exports = {
  home,
  tour,
  reserve,
  customer,
  sendPost,
  sendPostAjax
};

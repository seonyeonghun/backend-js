// 사용할 모듈(=자바스크립트 파일)을 기록하는 곳
const express = require('express'); // express 모듈을 express 객체를 사용한다.
const morgan = require('morgan'); // HTTP request logger를 사용한다.

const app = express(); // app이라는 express 객체의 인스턴스를 생성한다.

// 사용할 미들웨어 모듈 - 정적인 파일 : img, css, js 처리 
app.use(express.static('public'));
app.use(morgan("dev")); // 개발 끝나고, 서비스(=배포)할때는 combined 사용 [정보의 양이 적고 많음의 차이]

// routing 처리 : 요청에 따른 응답 방법을 결정하는 것
// routing method : .get(), .post(), .put(), .del(), .patch()...expressjs.con > 라우팅 안내서 참고!!

app.get('/', function (req, res) { // get 요청이 들어오면 응답
    //res.send('Hello World'); // 서버에서 text로 응답
    res.sendFile(__dirname+"/public/main.html"); // HTML 파일로 응답
});

app.post('/reserve', function (req, res) { // get 요청이 들어오면 응답
    res.send('post 요청 처리페이지')
});

app.listen(3000, function(){
    console.log(`서버가 3000번 포트에서 실행중입니다`)
})
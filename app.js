// 사용할 모듈(=자바스크립트 파일)을 기록하는 곳
const express = require('express'); // express 모듈을 express 객체를 사용한다.
const morgan = require('morgan'); // HTTP request logger를 사용한다.
const bodyParser = require('body-parser'); // body-parser를 사용한다.

const app = express(); // app이라는 express 객체의 인스턴스를 생성한다.

app.set('view engine', 'pug'); // view 템플릿 엔진을 pug를 사용한다고 설정, views 폴더에 pug파일 생성
app.set('port', 3000); // 서버 포트를 3000으로 사용한다고 설정


// 사용할 미들웨어 모듈 : 미들웨어는 순서대로 호출됨(=순서가 중요함)
app.use(express.static('public')); // 정적인 파일 : img, css, js 처리
app.use(bodyParser.json());  // json 데이터를 처리
app.use(bodyParser.urlencoded({extended: true})); // 인코딩된 문자열 처리
app.use(morgan("dev")); // 개발 끝나고, 서비스(=배포)할때는 combined 사용 [정보의 양이 적고 많음의 차이]

// routing 처리 : 요청에 따른 응답 방법을 결정하는 것
// routing method : .get(), .post(), .put(), .del(), .patch()...expressjs.con > 라우팅 안내서 참고!!

app.get('/', function (req, res) { // get 요청이 들어오면 응답
    //res.send('Hello World'); // 서버에서 text로 응답
    //res.sendFile(__dirname+"/public/main.html"); // HTML 파일로 응답
    res.render('index', { title: 'hanul tour!', message: '지금 예약하세요!' }); // pug로 응답
});

app.get('/tour', function (req, res) { // get 요청이 들어오면 응답
    //res.sendFile(__dirname+"/public/reserve.html"); // HTML 파일로 응답
    res.render('tour');
});

app.get('/reserve', function (req, res) { // get 요청이 들어오면 응답
    //res.sendFile(__dirname+"/public/reserve.html"); // HTML 파일로 응답
    res.render('reserve');
});

app.get('/customer', function (req, res) { // get 요청이 들어오면 응답
    //res.sendFile(__dirname+"/public/reserve.html"); // HTML 파일로 응답
    res.render('cs');
});

app.post('/send_reserve', function(req, res){
    res.send(req.body.guest_name+"님, 환영합니다."); // bodyParser가 이해하고 출력
})

const CURRENT_PORT = app.get('port'); // app.set() 으로 4000번을 지정했음.

app.listen(CURRENT_PORT, function(){
    console.log(`서버가 ${CURRENT_PORT}번 포트에서 실행중입니다`)
})
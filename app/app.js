// 사용할 모듈(=자바스크립트 파일)을 기록하는 곳
const express = require("express"); // express 모듈을 express 객체를 사용한다.
const morgan = require("morgan"); // HTTP request logger를 사용한다.
const bodyParser = require("body-parser"); // body-parser를 사용한다.
const indexRouter = require("./src/routes"); //index.js를 사용한다.

const app = express(); // app이라는 express 객체의 인스턴스를 생성한다.

app.set("views", "./src/views");
app.set("view engine", "pug"); // view 템플릿 엔진을 pug를 사용한다고 설정, views 폴더에 pug파일 생성
app.set("port", 3000); // 서버 포트를 3000으로 사용한다고 설정

// 사용할 미들웨어 모듈 : 미들웨어는 순서대로 호출됨(=순서가 중요함)
app.use(express.static("./src/public")); // 정적인 파일 : img, css, js 처리
app.use(bodyParser.json()); // json 데이터를 처리
app.use(bodyParser.urlencoded({ extended: true })); // 인코딩된 문자열 처리
app.use(morgan("dev")); // 개발 끝나고, 서비스(=배포)할때는 combined 사용 [정보의 양이 적고 많음의 차이]
app.use("/", indexRouter); // 라우터를 사용한다.

module.exports = app;

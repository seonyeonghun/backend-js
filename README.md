# backend-js

nodejs 를 이용한 백엔드 자바스크립트

 # 필수 개발환경
 * nodejs LTS v16.x
 * vscode
 * git
 
 # table of index
 1. node 설치 
 2. vscode 설치
 3. 작업폴더 지정 (ex. D:\backend-js) 후  클론(git clone)
 4. nodemon 전역설치 : npm i nodemon -g
 5. 새 터미널 열기 : CTRL+`
 6. nodemon app

# http response code
웹서버에서 요청에 따른 응답 코드는 1~5까지로 구분됩니다.
* 1xx (정보) : 요청을 받았고, 프로세스를 진행합니다. (100, 101, 102,..)
* 2xx (성공) : 요청이 성공적이고, 이에 따른 결과를 응답합니다 (200, 201, 202, ...)
* 3xx (리다이렉션) : 요청완료를 위한 추가적인 조치가 필요함을 뜻합니다 (300, 301, 302, ...)
* 4xx (클라이언트 오류) : 클라이언트측 오류 (400, 401, 402, ...)
* 5xx (서버 오류) : 서버측 오류 (500, 501, 502, ...)

> [모질라 http 응답코드 정리] (https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

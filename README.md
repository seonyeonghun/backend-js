# backend-js

nodejs 를 이용한 백엔드 자바스크립트

# 필수 개발환경

- nodejs LTS v16.x
- vscode
- git

# table of index

1.  node 설치
2.  vscode 설치
3.  작업폴더 지정 (ex. D:\backend-js) 후 클론(git clone)
4.  nodemon 전역설치 : npm i nodemon -g
5.  새 터미널 열기 : CTRL+`
6.  nodemon app

> -g 스위치는 nodejs의 global 영역에 설치한다는 의미로, --global 과 같습니다.

# http response code

웹서버에서 요청에 따른 응답 코드는 1~5까지로 구분됩니다.

- 1xx (정보) : 요청을 받았고, 프로세스를 진행합니다. (100, 101, 102,..)
- 2xx (성공) : 요청이 성공적이고, 이에 따른 결과를 응답합니다 (200, 201, 202, ...)
- 3xx (리다이렉션) : 요청완료를 위한 추가적인 조치가 필요함을 뜻합니다 (300, 301, 302, ...)
- 4xx (클라이언트 오류) : 클라이언트측 오류 (400, 401, 402, ...)
- 5xx (서버 오류) : 서버측 오류 (500, 501, 502, ...)

> [모질라 http 응답코드 정리] (https://developer.mozilla.org/ko/docs/Web/HTTP/Status)

# 추가로 진행중인 사항

- MVC 패턴 적용 : 현재 model(=DB)은 빠져있음
- Router 분리
- Listener 분리
- 보다 현실적인 디렉터리 구조(=scaffold) 적용
- 배포(=Deploy)를 생각하고 디렉터리 구조를 한번 더 변경

# 서버실행 방법

1. git bash, cmd 또는 powershell 중 하나를 실행하거나 vsc를 실행하고 터미널에서 아래 명령을 복사&붙여넣어 실행하기
2. git clone https://github.com/seonyeonghun/backend-js.git
3. cd backend-js && code .
4. [터미널 or bash]

> 가급적이면 모든 명령 수행은 git bash 에서 하세요! 또한 윈도우-리눅스를 함께 사용하는 경우 git config --global core.autocrlf input 명령을 적용하여, 명령행 끝부분(=개행문자) 처리를 동일한 방식으로 처리하도록 설정을 변경하길 권합니다.
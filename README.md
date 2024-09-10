# 💫 Strange MBTI
이상한 문제.. 
이상한 이미지...
이상한 경고창까지...?

과연 결과는 정상적으로 나올까...?! 이상한 MBTI를 지금 바로 경험해보세요!
<br/>
<br/>

# 🌟 배포 링크

[Strange MBTI](https://strange-mbti.vercel.app/)
<br/>
<br/>

# 📚 프로젝트 구조

<details>
<summary>접었다 펴기</summary>

```
📦src
 ┣ 📂api
 ┃ ┣ 📜api.js
 ┃ ┗ 📜testResults.js
 ┣ 📂assets
 ┃ ┣ 📜0.png
 ┃ ┣ 📜1.png
 ┃ ┣ 📜2.png
 ┃ ┣ 📜3.png
 ┃ ┣ 📜4.png
 ┃ ┣ 📜5.png
 ┃ ┣ 📜6.png
 ┃ ┣ 📜7.png
 ┃ ┣ 📜8.png
 ┃ ┣ 📜9.png
 ┃ ┣ 📜down.png
 ┃ ┣ 📜edit.png
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜github.svg
 ┃ ┣ 📜login-bg.png
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜up.png
 ┃ ┗ 📜velog.svg
 ┣ 📂components
 ┃ ┣ 📜AuthForm.jsx
 ┃ ┣ 📜TestForm.jsx
 ┃ ┗ 📜testFormStyle.js
 ┣ 📂context
 ┃ ┗ 📜AuthContext.jsx
 ┣ 📂data
 ┃ ┣ 📜mbtiPoints.js
 ┃ ┗ 📜questions.js
 ┣ 📂layout
 ┃ ┣ 📂footer
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┗ 📜footerStyle.js
 ┃ ┣ 📂header
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┗ 📜headerStyle.js
 ┃ ┗ 📜Layout.jsx
 ┣ 📂pages
 ┃ ┣ 📂join
 ┃ ┃ ┣ 📜Join.jsx
 ┃ ┃ ┗ 📜joinStyle.js
 ┃ ┣ 📂list
 ┃ ┃ ┣ 📜List.jsx
 ┃ ┃ ┗ 📜listStyle.js
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📜Login.jsx
 ┃ ┃ ┗ 📜loginStyle.js
 ┃ ┣ 📂mypage
 ┃ ┃ ┣ 📜MyPage.jsx
 ┃ ┃ ┗ 📜mypageStyle.js
 ┃ ┣ 📂test
 ┃ ┃ ┣ 📜Test.jsx
 ┃ ┃ ┗ 📜testStyle.js
 ┃ ┣ 📜Main.jsx
 ┃ ┗ 📜Result.jsx
 ┣ 📂queries
 ┃ ┗ 📜useTestQueries.js
 ┣ 📂shared
 ┃ ┣ 📜CommonStyle.js
 ┃ ┣ 📜PrivateRouter.jsx
 ┃ ┗ 📜Router.jsx
 ┣ 📂utiils
 ┃ ┗ 📜mbtiCalculator.jsx
 ┣ 📂zustand
 ┃ ┗ 📜userStore.js
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┣ 📜main.jsx
 ┗ 📜reset.css
```
</details>


<br/><br/>

# ⚒️ 개발 환경

![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white)
![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![](https://img.shields.io/badge/zustand-black?style=for-the-badge&logoColor=white)
![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


<br/>
<br/>

# 📆프로젝트 기간

24.09.05 ~ 24.09.10

<br/>
<br/>

# ✨ 주요 기능

## 1️⃣ 로그인 / 회원가입
![login](https://github.com/user-attachments/assets/8377b8d3-1bbb-4f25-9c69-0f7f7707f847)

### 1-1. 회원가입
닉네임, 아이디, 비밀번호를 통해 간단한 회원가입을 진행 할 수 있습니다.


### 1-2. 로그인
가입한 아이디와 비밀번호를 이용하여 로그인이 가능합니다.

<br/>

## 2️⃣ MBTI 테스트
![test](https://github.com/user-attachments/assets/3488fba2-bff6-4b5b-99d2-566d86bbe77b)


### 2-1. 테스트 제공
20개의 항목의 테스트 문항을 제공해드리고 있습니다.
각 문항에 맞는 답변을 체크해서 제출 할 수 있습니다.

### 2-2. 테스트 완료
테스트 제출 후에는 결과 페이지가 노출됩니다.
MBTI와 설명, 그리고 랜덤한 이미지가 같이 노출됩니다.

<br/>

## 3️⃣ MBTI 결과 목록
![result](https://github.com/user-attachments/assets/f217bd11-865a-47d9-ab2b-967380055499)


### 3-1. MBTI TOP3
다른 유저들의 정보까지 모두 모아, 가장 많이 등록된 MBTI를 TOP3로 보여줍니다.

### 3-2. 공개/비공개, 삭제
유저들의 검사 결과들이 출력되며, 본인의 검사 결과는 공개/비공개 처리와 삭제가 가능합니다.


<br/>

## 4️⃣ 마이페이지
![mypage](https://github.com/user-attachments/assets/d8132a1a-bb3d-4369-86ee-d8aa0c549e91)

### 4-1. 닉네임 수정
마이페이지에서는 출력할 닉네임을 변경 하실 수 있습니다.

### 4-2. 내 검사 결과
본인의 검사 결과들만 확인 가능하며,
마찬가지로 공개/비공개, 삭제처리가 가능합니다.

<br/>
<br/>
<br/>
<br/>

# 💥 트러블 슈팅

| 문제 | 원인 | 해결|
|---|---| ---|
| 로그인 하고 일정 시간이 지나면 자꾸 401에러가 출력 됨 | **Access Token**이 만료되어 나오는 에러 | 유저정보를 가져올 때, 에러가 나게되면 경고창을 띄워주고 로그아웃을 시켜주어 해결하였다.| 
| 다른 아이디로 접속 시, 이전 로그인 정보가 남아있음 | 토큰을 저장해둔 변수가 정보를 불러오는 함수 외부에 선언되어있어서 새로운 값을 바로 받아오지 못 함 | 정보를 불러오는 함수 내부에서 토큰을 불러와서 해결 |
| 제출하기 버튼 다중 클릭시 결과가 여러번 제출 됨 | 다중 클릭 이벤트를 막지 않아서 클릭 할 때마다 이벤트가 호출 됨 | 기본값이 true인 **state**를 만들어주고 **true**일 경우에만 클릭이벤트가 실행되게 변경. 클릭 이벤트 발생시 state에 **false**를 저장하여 다중 클릭을 막음 |

<br/>
<br/>
<br/>

# 💭 회고
axios... Tanstack Query... Tailwind... zustand까지 머리가 터져나가는 프로젝트였던것 같습니다.

그래도 Tanstack Query를 커스텀 훅으로도 사용해보고, json-server와 axios를 이용하여 데이터도 주고받아보고 많이 배우게 된 프로젝트가 되었습니다.

당장 위 기술들을 능숙하게 바로바로 사용하지는 못하지만 다음에는 좀 더 수월하게 쓸 수 있을 것 같고, 그렇게 쓰다보면 어느새 능숙하게 사용 할 수 있으리라 생각합니다.

아즈아 아즈아 다음 팀플도 화이또
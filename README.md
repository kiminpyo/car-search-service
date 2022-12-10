## 프로젝트 요약

```
차량의 정보를 보여주는 페이지입니다. 크기별로 분류가 가능하고, 날짜에 따라 신규로 들어온 것은 표시를 합니다.
kakao API를 이용해 페이지를 공유할 수 있습니다.
```

### 📆 기간

#### 22년 11월 01일 ~ 22년 11월 04일

---

### 🔧 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>   
 <img src="https://img.shields.io/badge/styled_components-3U7U2U?style=for-the-badge&logoColor=black"/> 
  <img src="https://img.shields.io/badge/react_router-FFAA04?style=for-the-badge&logo=css&logoColor=black"/> 
 <img src="https://img.shields.io/badge/react_helmet-E8A1F1?style=for-the-badge&logo=reacthelmet&logoColor=white"/> 
</div>

---

### 💻 실행 방법

1.  라이브러리를 설치합니다.

```
npm install
```

2.  프로젝트를 실행합니다.

```
 npm start
```

### 배포 링크

[배포링크 바로가기](https://radiant-pothos-873f1e.netlify.app/)
<br/>

## 프로젝트 설명

<details>
<summary>  📂 디렉토리 구조</summary>
<div markdown="1">

```

🗂 src
┣ 📁 apis
    ┗  searchCar.js
 ┣ 📁 components
 	┗  📁Layout.js
    	┣ AppLayout.js
    	┗ DiaryEditor.js
    ┣ CarCategory.js
    ┣ CarPreview.js
    ┗ Loader.js
 ┣ 📂 pages
   ┣ CarDetailPage.js
   ┣ ErrorPage.js
   ┗ LandingPage.js
 ┣ 📂 util
   ┗ color.js
   ┗ conversation.js
   ┗ date.js
 ┣ App.js
 ┣ index.js
 
```

</div>
</details>

<details>
<summary>🧻 요구사항</summary>
<div markdown="1">

### ⚙️ 과제 범위

- Figma 상의 디자인 및 기능 구현
    - 모바일 웹 기준으로 제작
    - **450px ~ 360px**까지 고려해서 제작

### 요구 사항

- 필수 요구 사항
    - Figma 상의 디자인 및 기능 구현
        - 차량 리스트
            - 차량이 없을 때 처리
            - 차량 불러오는 중 처리
        - 차량 상세
    
- 추가 구현 사항
    - SEO
        - 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출되도록 해야 함
            - 제목: car.brand + car.name
            - 내용: 월 car.amount 원
            - 사진: 차량 사진
</div>
</details>


---


### 사용한 라이브러리 및 API, CDN 등
- octokit
- github-markdown
- react-router
- styled-components
- react-helmet
---







// 모든 페이지 공통: 배경 CSS 변수 주입
const url = `${import.meta.env.BASE_URL}assets/bg.png`;
document.documentElement.style.setProperty('--bg-img', `url("${url}")`);

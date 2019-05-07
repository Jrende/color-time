import './style.css'
let body = document.querySelector('body');
let now = new Date();
let secPerDay = 60 * 60 * 24;
let currentTimeInSeconds = (now.getHours() * 60 * 60 * 1) + now.getMinutes() * 60 + now.getSeconds();
body.style.animationDelay = `-${currentTimeInSeconds}s`;

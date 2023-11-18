//去掉a連結原本設定
const link=document.querySelectorAll('a');
link.addEventListener=('click',function(e){
  e.preventDefault();
})

//marquee-time的time-meter，時間倒數器。
//擷取DOM
const secs=document.querySelector('.secs');
const mins=document.querySelector('.mins');
const hours=document.querySelector('.hours');
const days=document.querySelector('.days');
//時間倒數
setInterval(function(){
    //目前時間
    const nowTime=new Date();
    //終止時間
    const endTime=new Date(`January 13 2024 00:00:00`);
    //終止時間扣掉目前時間，並換算成天數、時、分、秒。
    const remain=(endTime-nowTime)/1000;
    const remainSecs=parseInt(remain%60);
    const remainMins=parseInt((remain/60)%60);
    const remainHours=parseInt((remain/60/60)%24);
    const remainDays=parseInt(remain/60/60/24);
    //渲染到畫面上
    secs.textContent=remainSecs;
    mins.textContent=remainMins;
    hours.textContent=remainHours;
    days.textContent=remainDays;
});

//news-swiper的圖片swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      576: {
            slidesPerView: 1,
          },
      '@1.5': {
        slidesPerView: 3,
      },
    }, 
    width: 500,
    // Optional parameters
    /*direction: 'horizontal',*/
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
//email表單驗證
let form=document.querySelector('.email form');
let email=document.querySelector('.sender-email input');
let emailError=document.querySelector('.sender-email p');
let nameInput=document.querySelector('.sender-name input');
let nameError=document.querySelector('.sender-name p');
let textarea=document.querySelector('.email form textarea');
let textareaError=document.querySelector('.textarea-error');
let submit=document.querySelector('.email-submit');
/*let emailRule= /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;*/
function verifyEmail() {
  if(!email.value){
    email.classList.add('invalid');
    emailError.classList.add('error');
  }
}
function verifyName() {
  if(!nameInput.value){
    nameInput.classList.add('invalid');
    nameError.classList.add('error');
  }
}
function verifyTextarea() {
  if(!textarea.value){
    textarea.classList.add('invalid');
    textareaError.classList.add('error');
  }
}
submit.addEventListener('click', function (e) {
  e.preventDefault()
  verifyEmail();
  verifyName();
  verifyTextarea();
  form.reset();
})
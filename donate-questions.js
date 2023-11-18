//donate表單驗證
let form=document.querySelector('.donate-money form');
let money=document.querySelector('.money-order');
let submit=document.querySelector('.donate-submit');
function NumberVerify( value ){
    // 過濾空白
    value = value.replace(/ /g, '');
    // 進行數字驗證
    // 宣告 RegExp，只能輸入數字
    let regex = new RegExp(/^\d+$/); 
    // 使用轉型態，讓字串轉為數字
    // 利用轉型與輸入特性，處裡數字後字串，避免誤觸
    let v = parseInt(value);
    
    // 進行數值驗證與比對
    value = regex.test(v.toString()) ? v < min ? min : v > max ? max : v : min;
  
    return value;
  }
submit.addEventListener('click', function (e) {
    e.preventDefault;
    if(!money.value){
        email.classList.add('invalid');
        emailError.classList.add('error');
    }
    form.reset();
})
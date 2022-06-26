const moreChoice = document.querySelector('.info__below-more');

moreChoice.addEventListener('mouseover', function(e) {
    document.querySelector('.info__below-more .fa-solid.fa-sort-down').classList.replace('fa-sort-down', 'fa-sort-up');
    document.querySelector('.info__below-more i').style.transform = 'translateY(2px)';
})

moreChoice.addEventListener('mouseout', function(e) {
    document.querySelector('.info__below-more .fa-solid.fa-sort-up').classList.replace('fa-sort-up', 'fa-sort-down');
    document.querySelector('.info__below-more i').style.transform = 'translateY(-28%)';
})

let coupons = document.querySelectorAll('.coupon-right');
for(let i = 0; i < coupons.length; i++) {
    coupons[i].onclick = function () {
        alert('Bạn đã lưu phiếu giảm giá thành công!');
    }
}

let hearts = document.querySelectorAll('.fa-solid.fa-heart');
for(let i = 0; i < hearts.length; i++) {
    hearts[i].onclick = function () {
        this.classList.toggle('heart--active');
    }
}

let mainBtns = document.querySelectorAll('.main-content-btn');
for(let i = 0; i < mainBtns.length; i++) {
    mainBtns[i].onclick = function () {
        for(let j = 0; j < mainBtns.length; j++) {
            if(mainBtns[j].classList.contains('main-btn--active')) {
                mainBtns[j].classList.remove('main-btn--active');
                break;
            }
        }
        mainBtns[i].classList.add('main-btn--active');
    }
}

let header = document.querySelectorAll('.info__below .col-2-sm');
for(let i = 0; i < header.length; i++) {
    header[i].onclick = function () {
        for(let j = 0; j < header.length; j++) {
            if(header[j].classList.contains('active-pri')) {
                header[j].classList.remove('active-pri');
                break;
            }
        }
        header[i].classList.add('active-pri');
    }
}

let myModel = document.querySelector('.modal.register-form');
let modal = document.querySelector('.register-form .form-modal');
let myModel2 = document.querySelector('.modal.login-form');
let modal2 = document.querySelector('.login-form .form-modal');

document.querySelector('.register').onclick = function(e) {
    e.preventDefault();
    myModel.style.display = 'block';
}

document.querySelector('.login').onclick = function(e) {
    e.preventDefault();
    myModel2.style.display = 'block';
}

closeModel = () => {
    myModel.style.display = 'none';
}

closeModel2 = () => {
    myModel2.style.display = 'none';
}

document.querySelector('.register-form .fa-xmark').onclick = closeModel;
myModel.onclick = closeModel;
document.querySelector('.login-form .fa-xmark').onclick = closeModel2;
myModel2.onclick = closeModel2;

modal.onclick = function(e) {
    e.stopPropagation();
}

modal2.onclick = function(e) {
    e.stopPropagation();
}

let checkPhone = /^\d{10}$/;
let checkMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.querySelector('.register-form .form-btn').onclick = function(e) {
    let phoneNumber = document.getElementById('phoneNumber');
    if(!checkPhone.test(phoneNumber.value)) {
        phoneNumber.classList.add('error-input');
        e.preventDefault();
        alert('Số điện thoại không hợp lệ!');
    } else {
        phoneNumber.classList.remove('error-input');
        alert('Đăng ký thành công!')
    }
}

var acount = document.getElementById('account');
var pss = document.getElementById('pss');

document.querySelector('.login-form .form-btn').onclick = function(e) {
    let check = true;
    if(!checkMail.test(acount.value) && !checkPhone.test(acount.value)) {
        check = false;
        acount.classList.add('error-input');
        e.preventDefault();
        alert('Tài khoản đăng nhập không hợp lệ!');
    } else {
        acount.classList.remove('error-input');
        if(pss.value.length < 5 || pss.value.length > 12) {
            check = false;
            pss.classList.add('error-input');
            e.preventDefault();
            alert('Mật khẩu từ 5 - 12 ký tự!');
        } else 
            pss.classList.remove('error-input');
    }
    if(check)
        alert('Đăng nhập thành công!');
}

document.querySelector('.psw i').onclick = function(e) {
    if(pss.type === 'password') 
        pss.type = 'text';
    else 
        pss.type = 'password';
}
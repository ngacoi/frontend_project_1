// console log dc gia tri user nhap tren giao dien

// module pattern IFFE

// cay DOM
const DOM_HELPER = (function () {
    const getElementById = id => document.getElementById(id);
    const getElementByClass = _class => document.getElementsByClassName(_class);

    return {
        getElementById,
        getElementByClass
    }
})();


(function () {
    const $submitBtn = DOM_HELPER.getElementById('login-btn');
    const $errname = DOM_HELPER.getElementByClass('err-text')[0];

    log = text => {console.log(text);}
    isRightUserName = name => name == 'hoang.tran' ? true : false;
    isRightPassWord = pass => pass == 'hoang1111' ? true : false;

    $submitBtn.addEventListener('click', function (e) {
        const $email = DOM_HELPER.getElementById('inputEmail');
        const $password = DOM_HELPER.getElementById('inputPassword');
        if (!isRightUserName($email.value) || !isRightPassWord($password.value)) {
            $errname.innerHTML = 'leu leu may nhap sai cmn roi haha';
            $errname.className = 'red';
        } else {
            $errname.innerHTML = 'well done, cuoi cung may cung vao thanh cong';
            $errname.className = 'green';
        }
    })
})();
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

    const $errname = DOM_HELPER.getElementByClass('err-username')[0];
        $errpass = DOM_HELPER.getElementByClass('err-password')[0];

    function log(text) {
        console.log(text);
    }

    function isRightUserName(name) {
        if (name == 'hoang.tran') {
            return true;
        }
        return false;
    }
    function isRightPassWord(pass) {
        if (pass == 'hoang1111') {
            return true;
        } return false;
    }
        // validate username + password
        // username : hoang.tran
        // pasword hoang1111

        /// nhap user name k dung thi bao loi k dung username
        /// nhap password sai thi bao k dung password

        //     // bao loi khi nhan nut login


    // log(`email ${$email.innerText}`);
    // log(`password ${$password.innerText}`);
    // $email.addEventListener('keyup', function(e){
    //    const input = e.target.value;
    //    if (input.length < 5){
    //        log('m da nhap duoi 5 ky tu roi day!!!');
    //        $display.innerHTML = 'm da nhap duoi 5 ky tu roi day!!!';
    //        $display.className = 'green';
    //    } else {
    //        log('aaaa m nhap hon 5 ky tu roi day thang ngu');
    //        $display.innerHTML = 'aaaa m nhap hon 5 ky tu roi day thang ngu';
    //        $display.className = 'red';
    //    }
    // });

    // $password.addEventListener('keyup', function(e){
    //     log(e.target.value);
    // });

    $submitBtn.addEventListener('click', function (e) {
        log('abc');
        const $email = DOM_HELPER.getElementById('inputEmail');
        const $password = DOM_HELPER.getElementById('inputPassword');
        log(`email ${$email.value}`);
        if (!isRightUserName($email.value)) {
            $errname.innerHTML = 'leu leu may nhap sai cmn roi haha';
            $errname.className = 'red';
        } else {
            $errname.innerHTML = 'an may thoi';
            $errname.className = 'green';
        }
        log(`passWord ${$password.value}`);
        if (!isRightPassWord($password.value)) {
            $errpass.innerHTML = 'thang nao ca vang, tao pass lam gi ma k bao gio nho';
            $errpass.className = 'red';
        } else {
            $errpass.innerHTML = 'well done, cuoi cung may cung vao thanh cong';
            $errpass.className = 'green';
        }

    })
})();
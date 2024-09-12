const modals = document.querySelectorAll('.modal');

function openAuthenForm(type) {
    for(var modal of modals) {
        modal.classList.add('active');
    }
    if(type === 'register') {
        let registerForm = document.getElementById('auth-form-register');
        registerForm.style.display = 'block';
    }
    else if (type === 'login') {
        let loginForm = document.getElementById('auth-form-login');
        loginForm.style.display = 'block';
    }
}


// Xử lí chuyển đổi giữa đăng kí và đăng nhập
function switchLoginForm() {
    // ẩn form đăng kí
    let currentForm =  document.getElementById('auth-form-register');
    currentForm.style.display = 'none';
    // hiện form đăng nhập
    let newForm = document.getElementById('auth-form-login');
    newForm.style.display = 'block';
}

function switchRegisterForm() {
    // ẩn form đăng nhập
    let currentForm =  document.getElementById('auth-form-login');
    currentForm.style.display = 'none';
    // hiện form đăng kí
    let newForm = document.getElementById('auth-form-register');
    newForm.style.display = 'block';
}

function cancelModal() {
    // tắt modal
    for(var modal of modals) {
        modal.classList.remove('active');
    }
    // ẩn các form
    const authForms = document.querySelectorAll('.auth-form');
    authForms.forEach(function(authForm){
        authForm.style.display = "none";
    })
}


    
    





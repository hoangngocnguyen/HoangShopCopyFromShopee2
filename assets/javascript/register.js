// Lấy element của form đăng ký
const registerForm = document.getElementById("form-register");
const emailRegister = document.getElementById("emailRegister");
const passwordRegister = document.getElementById("passwordRegister");
const rePasswordRegister = document.getElementById("rePasswordRegister");

// Element liên quan đến lỗi
const emailRegisterError = document.getElementById("emailRegisterError");
const passwordRegisterError = document.getElementById("passwordRegisterError");
const rePasswordRegisterError = document.getElementById(
  "rePasswordRegisterError"
);

// Lấy dữ liệu từ localStorage
const userLocal = JSON.parse(localStorage.getItem("users")) || [];

/**
 *
 * @param {*} email: Chuỗi email người dùng nhập vào
 * @returns Dữ liệu nếu email đúng định dạng, ngược lại undefined
 * Author: Hoang Nguyen - 23/07/2024
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (password) => {
  return (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password) &&
    password.length > 8
  );
};

registerForm.onkeydown = function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
};

registerForm.addEventListener("submit", function (e) {
  // Ngăn chặn sự kiện load lại trang
  e.preventDefault();

  const userExist = userLocal.find(
    (user) => user.email === emailRegister.value.toLowerCase()
  );
  // Validate email
  if (!emailRegister.value) {
    emailRegisterError.style.display = "block";
  } else {
    emailRegisterError.style.display = "none";
    // Kiểm tra định dạng email
    if (!validateEmail(emailRegister.value)) {
      emailRegisterError.style.display = "block";
      emailRegisterError.innerHTML = "Email không đúng định dạng";
    } else {
      // Kiểm tra email đã tồn tại ở localStorage chưa
      if (userExist) {
        emailRegisterError.style.display = "block";
        emailRegisterError.innerHTML = "Email đã tồn tại, vui lòng sử dụng email khác";
      } else {
        emailRegisterError.style.display = "none";
        emailRegisterError.innerHTML = "Email không được để trống";
      }
    }
  }

  // Validate password
  if (!passwordRegister.value) {
    passwordRegisterError.style.display = "block";
  } else {
    // Kiểm tra password hợp lệ
    if (!validatePassword(passwordRegister.value)) {
      passwordRegisterError.style.display = "block";
      passwordRegisterError.innerHTML = "Mật khẩu phải dài hơn 8 kí tự (bao gồm kí tự hoa, thường và 1 kí tự đặc biệt)";
    } else {
      passwordRegisterError.style.display = "none";
      passwordRegisterError.innerHTML = "Mật khẩu không được để trống";
    }
  }

  // Validate repassword
  if (!rePasswordRegister.value) {
    rePasswordRegisterError.style.display = "block";
  } else {
    rePasswordRegisterError.style.display = "none";
    // Kiểm tra mật khẩu với nhập lại mật khẩu
    if (passwordRegister.value !== rePasswordRegister.value) {
      rePasswordRegisterError.style.display = "block";
      rePasswordRegisterError.innerText = "Mật khẩu không trùng khớp";
    }
  }

  // Gửi dữ liệu từ form lên localStorage
  if (
    emailRegister.value &&
    passwordRegister.value &&
    rePasswordRegister.value &&
    passwordRegister.value === rePasswordRegister.value &&
    validateEmail(emailRegister.value) &&
    !userExist &&
    validatePassword(passwordRegister.value)
  ) {
    // Lấy dữ liệu từ form và gộp thành đối tượng user
    const user = {
      userId: Math.ceil(Math.random() * 100000000),
      email: emailRegister.value.toLowerCase(),
      password: passwordRegister.value,
    };

    // Push user vào mảng userLocal
    userLocal.push(user);

    // Gửi dữ liệu lên localStorage
    localStorage.setItem("users", JSON.stringify(userLocal));

    // Reset form đăng kí + Chuyển hướng sang đăng nhập
    setTimeout(function () {
      registerForm.reset();
      switchLoginForm();
    }, 1000);
  }
});

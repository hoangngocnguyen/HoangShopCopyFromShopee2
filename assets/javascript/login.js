// Lấy element nút đăng kí, đăng nhập
const loginBtn = document.getElementById("login-btn");

// Lấy element của form đăng ký
const loginForm = document.getElementById("form-login");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");

// Element liên quan đến lỗi
const emailLoginError = document.getElementById("emailLoginError");
const passwordLoginError = document.getElementById("passwordLoginError");
const alertLoginError = document.getElementById("alert-login-error");

// Elemt liên quan thành công
const alertLoginSuccess = document.getElementById("alert-login-success");

// Cập nhật giao diện người dùng dựa vào trạng thái đăng nhập
function updateUI() {
  let registerBtnOnHeader = document.getElementById("register-btn-on-header");
  let loginBtnOnHeader = document.getElementById("login-btn-on-header");
  let userOnHeader = document.getElementById("js-header__navbar-user");
  let userName = document.getElementById("userName");
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
  if (isLoggedIn) {
    // Ẩn nút đăng kí/ đăng nhập & hiển thị thông tin tài khoản
    registerBtnOnHeader.style.display = "none";
    loginBtnOnHeader.style.display = "none";
    userOnHeader.style.display = "flex";
  } else {
    // Hiện nút đăng kí/ đăng nhập & ẩn thông tin tài khoản
    registerBtnOnHeader.style.display = "block";
    loginBtnOnHeader.style.display = "block";
    userOnHeader.style.display = "none";
  }
}

// Ngăn chặn hành vi phím Enter
loginForm.onkeydown = function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
  }
};

loginForm.addEventListener("submit", function (e) {
  // Ngăn chặn sự kiện load lại trang
  e.preventDefault();

  // Validate dữ liệu đầu vào
  if (!emailLogin.value) {
    emailLoginError.style.display = "block";
  } else {
    emailLoginError.style.display = "none";
    // Kiểm tra định dạng email
    if (!validateEmail(emailLogin.value)) {
      emailLoginError.style.display = "block";
      emailLoginError.innerHTML = "Email không đúng định dạng";
    }
  }

  // Validate dữ liệu đầu vào
  if (!passwordLogin.value) {
    passwordLoginError.style.display = "block";
  } else {
    passwordLoginError.style.display = "none";
  }

  // Lấy dữ liệu từ local về
  const userLocal = JSON.parse(localStorage.getItem("users")) || [];

  // Tìm kiếm email và mật khẩu người dùng nhập có tồn tại trên local
  const findUser = userLocal.find(
    (user) =>
      emailLogin.value.toLowerCase() === user.email && passwordLogin.value === user.password
  );

  if (
    emailLogin.value &&
    passwordLogin.value &&
    validateEmail(emailLogin.value)
  ) {
    if (!findUser) {
      // Nếu không tồn tại thì thông báo cho người dùng nhập lại dữ liệu
      alertLoginError.style.display = "block";
    } else {
      // Nếu có tồn tại thì đăng nhập thành công và quay lại trang chủ
      alertLoginError.style.display = "none";
      alertLoginSuccess.style.display = "block";

      // Lưu thông tin của user đăng nhập lên localStorage: email, password
      localStorage.setItem("userLogin", JSON.stringify(findUser));

      // Reset form đăng nhập + trở lại trang chủ + cập nhật trạng thái isLoggedIn
      setTimeout(function () {
        loginForm.reset();
        cancelModal();
      }, 800);

      // Cập nhật trạng thái isLoggedIn trên local
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      // Cập nhật giao diện theo trạng thái đăng nhập
      updateUI();
    }
  }
});

// Khi người dùng nhấn đăng xuất trên header user
let logOutBtn = document.getElementById("logOutBtn");
logOutBtn.addEventListener("click", function (e) {
  // Ngăn hành vi mặc định thẻ a
  // e.preventDefault();

  // Cập nhật trạng thái isLoggedIn trên local
  localStorage.setItem("isLoggedIn", JSON.stringify(false));

  // Xóa userLogin hiện tại
  localStorage.removeItem("userLogin");

  // Cập nhật giao diện theo trạng thái đăng nhập
  updateUI();
});

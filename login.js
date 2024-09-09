// validation form login
const inputUsername = document.querySelector(".username");
const inputPassword = document.querySelector(".password");
const btnLogin = document.querySelector(".login");

// validation form login

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let foundUser = users.find((user) => user.username ===  inputUsername.value);

    if (foundUser) {
      // Người dùng tồn tại, so sánh mật khẩu
      if (foundUser.password === inputPassword.value) {
        alert("Đăng Nhập Thành Công");
        localStorage.setItem("current user",JSON.stringify(foundUser));
        window.location.href = "index.html";
      } else {
        alert("Đăng Nhập Thất Bại");
      }
    }
    else alert("sai mật khẩu!");
  }
});

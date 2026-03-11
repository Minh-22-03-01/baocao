document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // chặn gửi form;

    //lấy dữ liệu :tại sao dùng var???
    //trim: xóa khoảng trắng đầu cuối
    //value: lấy nd cái người đk nhập
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var fullname = document.getElementById("fullname").value.trim();
    var password = document.getElementById("password").value;
    var password2 = document.getElementById("password2").value;
    var terms = document.getElementById("terms").checked;

    // kiểm tra có trống ô nào ko
    if (
      phone === "" ||
      email === "" ||
      fullname === "" ||
      password === "" ||
      password2 === ""
    ) {
      alert("please fill all fields!");
      return;
    }

    //kiểm tra sdt có đủ 10 số không( bắt đầu bằng 0 kết thúc là từ 0-9)
    var phoneRegex = /^0[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be 10 digits and start with 0!");
    }
    //kiểm tra số email có đúng format ko
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Invalid email format!");
      return;
    }
    //kiểm tra password có đủ 6 kí tự, bao gồm chữ cái hoa, cái thường, số, kí tự đặc biệt
    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (!/[a-z]/.test(password)) {
      alert("Password must include lowercase letter");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      alert("Password must include uppercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      alert("Password must include number");
      return;
    }

    if (!/[\W_]/.test(password)) {
      alert("Password must include special character");
      return;
    }
    //kiểm tra lại password nhập lại phải trùng với password bên trên
    if (password !== password2) {
      alert("Passwords do not match!");
      return;
    }
    //kiểm tra đã ấn nút đồng ý chưa
    if (!terms) {
      alert("You must agree to the terms!");
      return;
    }
    //nếu tất cả đúng thì thông báo ra màn hình là đăng kí thành công
  });

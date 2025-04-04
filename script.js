function toggleDriverFields() {
    const role = document.getElementById('role').value;
    const driverFields = document.getElementById('driver-extra');
    driverFields.style.display = role === 'Driver' ? 'block' : 'none';
}

function handleSignup(e) {
    e.preventDefault();
  function validateSignupForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Name must not be empty
    if (fullName === "") {
      alert("Please enter your full name.");
      return false;
    }

    // Phone must be 10 digits
    const phoneRegex = /^[1-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }

    // Email must be valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    // Password must be at least 6 characters
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 6 characters long.\n-one uppercase letter\n-one lowercase letter\n-one number\n-one special character");
      return false;
    }

    // All good
    alert("Signup successful!");
    return true;
  }

    const uniqueId = 'D2S' + Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("d2s-user-id", uniqueId);
    window.location.href = "final.html";
    return false;
}

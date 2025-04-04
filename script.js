function toggleDriverFields() {
    const role = document.getElementById('role').value;
    const driverFields = document.getElementById('driver-extra');
    driverFields.style.display = role === 'Driver' ? 'block' : 'none';
}

function handleSignup(e) {
    e.preventDefault();

    const fullName = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    // Name
    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Phone validation (10 digits, starts with 6-9)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number starting with 6-9.");
        return false;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password (min 6 chars, includes upper, lower, digit, special)
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%*?&]).{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must have:\n- At least 6 characters\n- One uppercase letter\n- One lowercase letter\n- One number\n- One special character");
        return false;
    }

    // Driver-specific fields
    if (role === 'Driver') {
        const licenseNumber = document.getElementById("licenseNumber").value.trim();
        const vehicleType = document.getElementById("vehicleType").value.trim();
        const vehicleNumber = document.getElementById("vehicleNumber").value.trim();

        if (licenseNumber === "") {
            alert("Please enter your license number.");
            return false;
        }
        if (vehicleType === "") {
            alert("Please enter your vehicle type.");
            return false;
        }
        if (vehicleNumber === "") {
            alert("Please enter your vehicle number.");
            return false;
        }
    }

    // If everything is valid
    const uniqueId = 'D2S' + Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("d2s-user-id", uniqueId);
    alert("Signup successful! Your ID: " + uniqueId);
    window.location.href = "final.html";
    return true;
}

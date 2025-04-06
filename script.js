function toggleDriverFields() {
    const role = document.getElementById('role').value;
    const driverFields = document.getElementById('driver-extra');
    driverFields.style.display = role === 'Driver' ? 'block' : 'none';
}

async function handleSignup(e) {
    e.preventDefault();

    const fullName = document.getElementById("username").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const role = document.getElementById("role").value;

    // Name
    if (fullName === "") {
        alert("Please enter your full name.");
        return false;
    }

    // Phone validation (10 digits, starts with 1-9)
    const phoneRegex = /^[1-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number starting with 1-9.");
        return false;
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must have:\n- At least 6 characters\n- One uppercase letter\n- One lowercase letter\n- One number\n- One special character");
        return false;
    }

    // Driver-specific fields
    let licenseNumber = "";
    let vehicleType = "";
    let vehicleNumber = "";

    if (role === 'Driver') {
        licenseNumber = document.getElementById("licenseNumber").value.trim();
        vehicleType = document.getElementById("vehicleType").value.trim();
        vehicleNumber = document.getElementById("vehicleNumber").value.trim();

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

    const uniqueId = 'D2S' + Math.floor(100000 + Math.random() * 900000);

    const formData = {
        id: uniqueId,
        username: fullName,
        phone,
        email,
        password,
        role,
        licenseNumber,
        vehicleType,
        vehicleNumber
    };

    try {
        const res = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        });

        const result = await res.json();
        console.log(result);

        alert("Signup successful! Your ID: " + result.userId);
        window.localStorage.setItem("d2s-user-id", result.userId);
        window.location.href = "final.html";
    } catch (error) {
        console.error("Signup failed:", error);
        alert("Something went wrong. Please try again.");
    }
}

function toggleDriverFields() {
    const role = document.getElementById('role').value;
    const driverFields = document.getElementById('driver-extra');
    driverFields.style.display = role === 'Driver' ? 'block' : 'none';
}

function handleSignup(e) {
    e.preventDefault();
    const uniqueId = 'D2S' + Math.floor(100000 + Math.random() * 900000);
    localStorage.setItem("d2s-user-id", uniqueId);
    window.location.href = "final.html";
    return false;
}

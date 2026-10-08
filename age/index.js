function validateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    const statusMessage = document.getElementById('statusMessage');
    
    // Clear any previous status styles
    statusMessage.className = "message";
    
    // 1. Check if a date was actually entered
    if (!birthdateInput) {
        statusMessage.textContent = "Please select a valid date.";
        statusMessage.classList.add("error");
        return;
    }

    const dob = new Date(birthdateInput);
    const today = new Date();
    
    // 2. Prevent choosing a date in the future
    if (dob > today) {
        statusMessage.textContent = "Birthdate cannot be in the future.";
        statusMessage.classList.add("error");
        return;
    }

    // 3. Calculate preliminary age based on year difference
    let age = today.getFullYear() - dob.getFullYear();
    
    // 4. Adjust age if the birthday hasn't occurred yet this year
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // 5. Enforce minimum age requirement (e.g., 18)
    const minimumAge = 18;
    if (age >= minimumAge) {
        statusMessage.textContent = `Access Granted. You are ${age} years old.`;
        statusMessage.classList.add("success");
    } else {
        const yearsToWait = minimumAge - age;
        statusMessage.textContent = `Access Denied. You must be ${minimumAge}. Please try again in ${yearsToWait} year(s).`;
        statusMessage.classList.add("error");
    }
}
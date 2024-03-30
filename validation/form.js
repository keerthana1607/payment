function printError(Id, Msg) {
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm() {
    var name = document.form1.name.value;
    var email = document.form1.email.value;
    var phone = document.form1.phone.value;
    var country = document.form1.country.value;
    var gender = document.querySelector('input[name="gender"]:checked');

    var nameErr = emailErr = phoneErr = countryErr = genderErr = false;

    if (name.trim() === "") {
        printError("nameErr", "Please enter your name");
        nameErr = true;
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (!regex.test(name)) {
            printError("nameErr", "Please enter a valid name");
            nameErr = true;
        }
    }

    if (email.trim() === "") {
        printError("emailErr", "Please enter your email");
        emailErr = true;
    } else {
        var regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!regex.test(email)) {
            printError("emailErr", "Please enter a valid email");
            emailErr = true;
        }
    }

    if (phone.trim() === "") {
        printError("phoneErr", "Please enter your phone number");
        phoneErr = true;
    } else {
        var regex = /^\d{10}$/;
        if (!regex.test(phone)) {
            printError("phoneErr", "Please enter a valid 10-digit phone number");
            phoneErr = true;
        }
    }

    if (country === "Select") {
        printError("countryErr", "Please select a country");
        countryErr = true;
    }

    if (!gender) {
        printError("genderErr", "Please select a gender");
        genderErr = true;
    }

    if (nameErr || emailErr || phoneErr || countryErr || genderErr) {
        return false;
    }
}
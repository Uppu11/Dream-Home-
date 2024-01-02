function validation(values) {

    if (values.name === "") {
        error.name = "Name should not be empty"
    }
    else if (!email_pattern.test(values.email)) {
        error.email = "Email did not match"

    } else {
        error.email = ""
    }

    if (values.password === "") {
        error.password = "Empty field"
    }
    else if (!password_pattern.test(values.password)) {
        error.password = "Password did not match"
    } else {
        error.password = ""
    }
    return error;
}

export default validation;
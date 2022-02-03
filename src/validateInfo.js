export default function validateInfo(values) {
    let errors = {};

    if (!values.name.trim()) {
        errors.name = 'Name is required';
    } else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        errors.name = 'Enter a valid name';
    } else if (values.name.length < 3) {
        errors.name = 'Min length 3 characters';
    }

    if (!values.lastname.trim()) {
        errors.lastname = 'Lastname is required';
    } else if (!/^[A-Za-z]+/.test(values.lastname.trim())) {
        errors.lastname = 'Enter a valid name';
    } else if (values.lastname.length < 3) {
        errors.lastname = 'Min length 3 characters';
    }

    if (!values.website.trim()) {
        errors.website = 'Website is required';
    } else if (!/^[A-Za-z]+/.test(values.website.trim())) {
        errors.website = 'Enter a valid name';
    } else if (values.website.length < 3) {
        errors.website = 'Min length 3 characters';
    }


    if (!values.number.trim()) {
        errors.number = 'Age is required';
    } else if (values.number < 18) {
        errors.number = 'to young';
    }

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Incorrect format';
    }
    if (!values.country.trim()) {
        errors.country = 'Country is required';
    } else if (!/^[A-Za-z]+/.test(values.country.trim())) {
        errors.country = 'Enter a valid name';
    } else if (values.country.length < 3) {
        errors.country = 'Min length 3 characters';
    }
    if (!values.city.trim()) {
        errors.city = 'City is required';
    } else if (!/^[A-Za-z]+/.test(values.website.trim())) {
        errors.city = 'Enter a valid name';
    } else if (values.city.length < 3) {
        errors.city = 'Min length 3 characters';
    }
    if (!values.catch.trim()) {
        errors.catch = 'Catch phrase is required';
    } else if (!/^[A-Za-z]+/.test(values.catch.trim())) {
        errors.catch = 'Enter a valid name';
    } else if (values.catch.length < 3) {
        errors.catch = 'Min length 3 characters';
    }

    return errors;
}
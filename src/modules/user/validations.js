import * as Yup from "yup";

export const addUserSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name must be at most 20 characters')
        .required('Name is Required'),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?[\d-.]{7,10}$/, 'Enter a valid Phone number')
        .required('Phone number is required'),
    age: Yup.number().required("Age is required").positive().integer(),
    address: Yup.string()
        .max(100, 'Address must be at most 10 characters').required("Address is required"),
    gender: Yup.string().required("Gender is required"),
});


export const editUserSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name must be at most 20 characters')
        .required('Name is Required'),
    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),
    phone: Yup.string()
        .matches(/^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?[\d-.]{7,10}$/, 'Enter a valid Phone number')
        .required('Phone number is required'),
    age: Yup.number().required("Age is required").positive().integer(),
    address: Yup.string()
        .max(100, 'Address must be at most 10 characters').required("Address is required"),
    gender: Yup.string().required("Gender is required"),
});
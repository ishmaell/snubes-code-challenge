import * as yup from 'yup';

export const ContactSchema = yup.object({
  company: yup
    .string()
    .required('Enter the company name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field ')
    .max(80, 'Company name should only have 80 characters'),
  fullname: yup
    .string()
    .required('Please enter your full name')
    .max(50, 'Name should only have 50 characters'),
  phone: yup.string().required('Phone number is required'),
  email: yup
    .string()
    .required('Your email is required')
    .email('This is an invalid email format')
    .trim()
    .lowercase(),
});

export type ContactType = yup.InferType<typeof ContactSchema>;

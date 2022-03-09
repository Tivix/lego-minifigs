import * as React from 'react';
import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import * as Yup from 'yup';

const StyledTextfield = styled(TextField)({
  margin: '20px 0',
  border: '1px solid gray',
  color: 'white',
});

const StyledFormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '60%',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  marginBottom: 40,
});

const StyledContainer = styled('div')({
  width: '50%',
});

const StyledButton = styled(Button)({
  alignSelf: 'center',
  width: '60%',
});

// @todo: Type formik values

interface FormikTextFieldProps {
  formik: any;
  id: string;
  name: string;
  label: string;
  placeholder: string
  // eslint-disable-next-line react/require-default-props
  fullWidth?: boolean;
}

const FormikTextField = ({
  formik, id, name, label, placeholder, fullWidth = true,
}: FormikTextFieldProps) => (
  <StyledTextfield
    fullWidth={fullWidth}
    id={id}
    name={name}
    label={label}
    placeholder={placeholder}
    InputLabelProps={{
      style: { color: '#fff' },
    }}
    value={formik.values[name]}
    onChange={formik.handleChange}
    error={Boolean(formik.errors[name])}
  />
);

// @todo: refactor, add phone number to validation, fix date validation (emotion?)

const FormValidation = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  surname: Yup.string()
    .required('Required'),
  email: Yup.string().email('Wrong email').required('Required'),
  birthDate: Yup.date().nullable().min(new Date(1900, 0, 1)).required('Required'),
  phoneNumber: Yup.string().required('Required'),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  zipCode: Yup.string().required('Required'),
});

const ContactForm: React.FC<{}> = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      email: '',
      birthDate: '',
      phoneNumber: '',
      city: '',
      state: '',
      zipCode: '',
    },
    validationSchema: FormValidation,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      alert('Thank you for using our store. You will be redirected to main site');
    },
  });

  // @todo: refactor- create a config with fields and mapper

  return (
    <StyledContainer>
      <form onSubmit={formik.handleSubmit}>
        <StyledFormContainer>
          <FormikTextField fullWidth={false} formik={formik} id="name" name="name" label="Name" placeholder="John" />
          <FormikTextField fullWidth={false} formik={formik} id="surname" name="surname" label="Surname" placeholder="Doe" />
          <FormikTextField formik={formik} id="email" name="email" label="Email" placeholder="john.doe@example.com" />
          <FormikTextField formik={formik} id="phoneNumber" name="phoneNumber" label="Phone Number" placeholder="+11(111) 111-111" />
          <FormikTextField formik={formik} id="birthDate" name="birthDate" label="Birth date" placeholder="dd/mm/yyyy" />
          <FormikTextField formik={formik} id="city" name="city" label="City" placeholder="Warsaw" />
          <FormikTextField formik={formik} id="state" name="state" label="State" placeholder="Warsaw" />
          <FormikTextField formik={formik} id="zipCode" name="zipCode" label="Zipcode" placeholder="11-111" />
        </StyledFormContainer>
        <StyledButton type="submit" color="secondary" variant="contained">Purchase</StyledButton>
      </form>
    </StyledContainer>
  );
};

export default ContactForm;

import { Button, Paper, TextField} from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { object, string } from 'yup';
import Page from '../components/Page';

export default function LoginPage() {
  const navigate = useNavigate()

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values;

    const response = await fetch(
      `https://tms-js-pro-back-end.herokuapp.com/api/users/signin`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      },
    );

    const data = await response.json();
    sessionStorage.token = data.token;
    sessionStorage.email = data.email;
    navigate('/', { replace: true })
    setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
    validationSchema: object().shape({
      email: string().email().required(),
      password: string().required(),
    }),
    validateOnMount: true,
  });

  return (
    <Page className="justify-center items-center">
      <Paper
        className="grid grid-cols-1 gap-4 p-4 w-1/2"
        component="form"
        elevation={4}
        onSubmit={formik.handleSubmit}
      >
        <TextField
          label="Логин"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          error={formik.touched.email && !!formik.errors.email}
          helperText={
            formik.touched.email && !!formik.errors.email && formik.errors.email
          }
        />
        <TextField
          label="Пароль"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && !!formik.errors.password}
          helperText={
            formik.touched.password &&
            !!formik.errors.password &&
            formik.errors.password
          }
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!formik.isValid && !formik.isSubmitting}
        >
          Войти
        </Button>
      </Paper>
    </Page>
  );
}

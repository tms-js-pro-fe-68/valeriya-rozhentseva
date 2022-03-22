import React from 'react';
import { Formik, Form, useField } from 'formik';

function MyTextInput({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

function MyCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

function MySelect({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}

export default function Clothes() {
  return (
    <Formik
      initialValues={{
        name: '',
        description: '',
        email: '',
        acceptedTerms: false,
        price: '',
        type: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 300);
      }}
    >
      <Form>
        <div className="form_div">
          <MyTextInput
            label="Название товара:"
            name="name"
            type="text"
            placeholder="Adidas Hoodie"
            className="label_style"
          />

          <MyTextInput
            label="Краткое описание товара:"
            name="description"
            type="text"
            className="label_style"
            placeholder="It is red, ... hoodie"
          />

          <MyTextInput
            label="Контакты: email"
            name="email"
            type="email"
            className="label_style"
            placeholder="valeriyar@gmail.com"
          />

          <MySelect className="label_style" label="Стоимость товара:  " name="price">
            <option value="">-</option>
            <option value="100$">100$</option>
            <option value="200$">200$</option>
            <option value="300$">300$</option>
            <option value="400$">400$</option>
            <option value="500$">500$</option>
          </MySelect>

          <MySelect className="label_style" label="Категория товара:  " name="type">
            <option value="">-</option>
            <option value="Bags, backpacks">Bags, backpacks</option>
            <option value="Dress, sundress$">Dress, sundress</option>
            <option value="Shoes">Shoes</option>
            <option value="Shirts">Shirts</option>
            <option value="Rings, pendants, earrings">Rings, pendants, earrings</option>
            <option value="Hoodie, sweaters">Hoodie, sweaters</option>
            <option value="Trousers, jeans">Trousers, jeans</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
}

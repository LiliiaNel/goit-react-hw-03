import { useId } from "react";
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid';


let contactSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Minimum 3 characters!').max(50, 'Maximum 50 characters!').required('This is a required field'),
        number: Yup.string('Only numbers and dashes allowed').min(3, 'Minimum 3 characters!').max(50, 'Maximum 50 characters!').required("This is a required field"),
  });


export default function ContactForm({onAdd}) {
     const fieldId = useId();    
    const initialValues = {
        name: "",
        number: "",
  };  

const handleSubmit = (values, actions) => {
  onAdd({
    id: nanoid(),
    ...values,
  });
  actions.resetForm();
};
  

    return <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={contactSchema}>
        <Form className={css.form}>
            <label htmlFor={`${ fieldId }-name`}>Name</label>
            <Field type="text" name="name" id={`${fieldId}-name`} />
            <ErrorMessage name="name" className={css.error}  />
              <label htmlFor={`${ fieldId }-number`}>Number</label>
            <Field type="number" name="number" id={`${fieldId}-number`} />
             <ErrorMessage name="number" className={css.error}  />
              <button type="submit">Add contact</button>
        </Form>
    </Formik>
};
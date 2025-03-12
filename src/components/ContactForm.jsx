import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too much!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too much!")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="number">Number:</label>
              <Field type="text" id="number" name="number" />
              <ErrorMessage name="number" component="div" className="error" />
            </div>
            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;

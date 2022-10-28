import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from 'yup';

export const ContactForm = () => {
    const [form, setForm] = useState({ name: "", email: "", tel: "", message: "" });
    const validSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email().required(),
        tel: Yup.string().required().matches(/((\+92)|0)[.\- ]?[0-9][.\- ]?[0-9][.\- ]?[0-9]/),
    });
    const handleSubmit = (value) => {
        console.log(value);
    }
    return (
        <div className="container pt-3">
            <Formik
                initialValues={form}
                validationSchema={validSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ errors, touched }) => (
                        <Form>
                            <p>Name</p>
                            <Field name="name" ></Field>
                            <br />
                            <ErrorMessage component="div" className="text-danger"  name="name"></ErrorMessage>

                            <p>Email</p>
                            <Field name="email" ></Field>
                            <br />
                            <ErrorMessage component="div" className="text-danger" name="email"></ErrorMessage>

                            <p>Phone</p>
                            <Field name="tel"></Field>
                            <br />
                            <ErrorMessage component="div" className="text-danger" name="tel"></ErrorMessage>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
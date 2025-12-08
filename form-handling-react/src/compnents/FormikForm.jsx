import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required."),
    email: Yup.string().email("Email is incorrect.").required("Email is necessary."),
    password: Yup.string().min(6, "At least 6 characters").required("Password is necessary."),
});

const FormikForm = () => {
    return (
        <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log("Formik Submitted:", values);
            }}
        >
            {() => (
                <Form>
                    <h2>Formik Registration Form</h2>

                    <Field type="text" name="username" placeholder="Username" />
                    <ErrorMessage name="username" component="div" style={{ color: "red" }} />

                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="div" style={{ color: "red" }} />

                    <Field type="password" name="password" placeholder="Password" />
                    <ErrorMessage name="password" component="div" style={{ color: "red" }} />

                    <button type="submit">Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;

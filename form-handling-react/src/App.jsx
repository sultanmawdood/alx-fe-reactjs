import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Form Handling</h1>

      <hr />
      <RegistrationForm />

      <hr />
      <FormikForm />
    </div>
  );
};

export default App;

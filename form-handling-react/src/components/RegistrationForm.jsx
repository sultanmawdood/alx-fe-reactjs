import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.username || !formData.email || !formData.password) {
            setError("All fields must be filled in.");
            return;
        }

        setError("");
        console.log("Submitted Data:", formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Controlled Registration Form</h2>

            <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />

            <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />

            <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;

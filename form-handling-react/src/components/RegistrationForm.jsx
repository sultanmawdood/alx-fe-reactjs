import { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError("All fields must be filled in.");
            return;
        }

        setError("");
        console.log("Submitted Data:", { username, email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Controlled Registration Form</h2>

            <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Register</button>
        </form>
    );
};

export default RegistrationForm;

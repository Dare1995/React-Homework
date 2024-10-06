import { useState } from "react";
import "./style.css"

function ControlledContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmitData] = useState(null);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name || formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters long";
        }
        if (!formData.email) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.message || formData.message.length < 10) {
            newErrors.message = "Your message must be at least 10 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            setSubmitData(formData);
            setFormData({ name: "", email: "", message: "" });
        }
    };

    return (
        <div>
            <h2>Controlled Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        value={formData.name}
                        type="text"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        value={formData.email}
                        type="email"
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Message: </label>
                    <textarea
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                        }
                    />
                    {errors.message && (
                        <span style={{ color: "red" }}>{errors.message}</span>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>

            {submittedData && (
                <div>
                    <h3>Submitted Data</h3>
                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Message: {submittedData.message}</p>
                </div>
            )}
        </div>
    );
}

export default ControlledContactForm;
import { useRef, useState } from "react";

function UncontrolledContactForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [errors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState(null);

    const validateForm = () => {
        const newErrors = {};

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const message = messageRef.current.value;

        if (!name || name.length < 3) {
            newErrors.name = "Name must be at least 3 characters long";
        }
        if (!email) {
            newErrors.email = "Please enter a valid email";
        }

        if (!message || message.length < 10) {
            newErrors.message = "Your message must be at least 10 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const name = nameRef.current.value;
            const email = emailRef.current.value;
            const message = messageRef.current.value;

            setSubmittedData({ name, email, message });

            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        }
    };

    return (
        <div>
            <h2>Uncontrolled Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input ref={nameRef} type="text" />
                    {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
                </div>
                <div>
                    <label>Email: </label>
                    <input ref={emailRef} type="email" />
                    {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                </div>
                <div>
                    <label>Message: </label>
                    <textarea ref={messageRef} />
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

export default UncontrolledContactForm;
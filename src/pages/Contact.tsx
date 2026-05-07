import { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', message: ''});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await new Promise(r => setTimeout(r, 500));
        setSubmitted(true);
    };

    if (submitted) return <h2>Thanks!</h2>;
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={form.name} onChange={handleChange} />
            <input name="message" value={form.message} onChange={handleChange} />
            <button type="submit">Send</button>
        </form>
    );
}

export default Contact;

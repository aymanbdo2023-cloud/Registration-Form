import { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({ name: '', message: ''});
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await new Promise(r => setTimeout(r, 500));
        setSubmitted(true);
    };

    if (submitted) return <div className="page-container"><h2>Thanks!</h2></div>;
    return (
        <div className="page-container">
          <h1>Contact</h1>
          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows={4} />
                </div>
                <button className="btn-primary" type="submit">Send</button>
            </form>
          </div>
        </div>
    );
}

export default Contact;

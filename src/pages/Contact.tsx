import { useState } from 'react';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

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

    if (submitted) return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="h4" color="success.main">Thanks!</Typography>
            </Box>
        </Container>
    );

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 3 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Contact
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        variant="outlined"
                        value={form.name}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Your Message"
                        name="message"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        size="large"
                    >
                        Send
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default Contact;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Box, Typography } from '@mui/material';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string; confirm?: string }>({});

    const validateEmail = (value: string) => {
        if (!value) setErrors(prev => ({ ...prev, email: 'Required' }));
        else if (!/\S+@\S+\.\S+/.test(value)) setErrors(prev => ({ ...prev, email: 'Invalid email' }));
        else setErrors(prev => ({ ...prev, email: undefined }));
    };

    const validatePassword = (value: string) => {
        if (!value) setErrors(prev => ({ ...prev, password: 'Required' }));
        else if (value.length < 6) setErrors(prev => ({ ...prev, password: 'Min 6 characters' }));
        else setErrors(prev => ({ ...prev, password: undefined }));
    };

    const validateConfirm = (value: string, currentPassword: string) => {
        if (!value) setErrors(prev => ({ ...prev, confirm: 'Required' }));
        else if (value !== currentPassword) setErrors(prev => ({ ...prev, confirm: 'Passwords do not match' }));
        else setErrors(prev => ({ ...prev, confirm: undefined }));
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);
        if (errors.email) validateEmail(value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        if (errors.password) validatePassword(value);
        if (confirm && errors.confirm) validateConfirm(confirm, value);
    };

    const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirm(value);
        if (errors.confirm) validateConfirm(value, password);
    };

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: { email?: string; password?: string; confirm?: string } = {};
        if (!email) newErrors.email = 'Required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email';
        if (!password) newErrors.password = 'Required';
        else if (password.length < 6) newErrors.password = 'Min 6 characters';
        if (password !== confirm) newErrors.confirm = 'Passwords do not match';
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) navigate('/success');
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        error={!!errors.password}
                        helperText={errors.password}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        label="Confirm Password"
                        variant="outlined"
                        type="password"
                        value={confirm}
                        onChange={handleConfirmChange}
                        error={!!errors.confirm}
                        helperText={errors.confirm}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        type="submit"
                        size="large"
                    >
                        Register
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

export default RegistrationForm;

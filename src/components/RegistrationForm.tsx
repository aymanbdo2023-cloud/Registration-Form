import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [errors, setErrors] = useState<{ email?: string; password?: string; confirm?: string }>({});

    const validate = () => {
        const newErrors: { email?: string; password?: string; confirm?: string } = {};
        if (!email) newErrors.email = 'Required';
        else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email';
        if (!password) newErrors.password = 'Required';
        else if (password.length < 6) newErrors.password = 'Min 6 characters';
        if (password !== confirm) newErrors.confirm = 'Passwords do not match';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) navigate('/success');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            {errors.email && <span>{errors.email}</span>}
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            {errors.password && <span>{errors.password}</span>}
            <input type="password" placeholder="Confirm Password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            {errors.confirm && <span>{errors.confirm}</span>}
            <button type="submit">Register</button>
        </form>
    )
}

export default RegistrationForm;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <div className="form-wrapper">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="form-group">
                  <input placeholder="Email" value={email} onChange={handleEmailChange} />
                  {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="form-group">
                  <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                  {errors.password && <span className="error">{errors.password}</span>}
              </div>
              <div className="form-group">
                  <input type="password" placeholder="Confirm Password" value={confirm} onChange={handleConfirmChange} />
                  {errors.confirm && <span className="error">{errors.confirm}</span>}
              </div>
              <button className="btn-primary" type="submit">Register</button>
          </form>
        </div>
    );
}

export default RegistrationForm;

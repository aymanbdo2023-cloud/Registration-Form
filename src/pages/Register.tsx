import RegistrationForm from '../components/RegistrationForm';
import { Typography, Box } from '@mui/material';

function Register() {
    return (
        <Box sx={{ py: 2 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                Register to the system
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Create your account below.
            </Typography>
            <RegistrationForm />
        </Box>
    );
}

export default Register;

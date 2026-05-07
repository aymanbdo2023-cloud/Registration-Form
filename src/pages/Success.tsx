import { Typography, Box } from '@mui/material';

function Success() {
    return (
        <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h3" component="h2" color="success.main" gutterBottom>
                Registration Successful!
            </Typography>
            <Typography variant="body1" color="text.secondary">
                Your account has been created.
            </Typography>
        </Box>
    );
}

export default Success;

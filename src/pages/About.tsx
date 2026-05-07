import { Typography, Box } from '@mui/material';

function About() {
    return (
        <Box sx={{ py: 2 }}>
            <Typography variant="h3" component="h1" gutterBottom>
                About
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                We are a small team focused on building clean and simple web applications. Our goal is to create tools that are easy to use and deliver real value.
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
                Our Mission
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                To make development straightforward by focusing on good design, clear code, and a great user experience.
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
                Our Approach
            </Typography>
            <Typography variant="body1" color="text.secondary">
                We believe in keeping things simple. No unnecessary complexity — just solid fundamentals done well.
            </Typography>
        </Box>
    );
}

export default About;

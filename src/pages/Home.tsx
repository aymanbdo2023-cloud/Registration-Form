import { Link } from 'react-router-dom';
import { Button, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Build Something Great
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
        A simple and clean starting point for your next project.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" size="large" component={Link} to="/about">
          Get Started
        </Button>
        <Button variant="outlined" size="large" component={Link} to="/contact">
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}

export default Home;

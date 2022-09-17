import { Box, Container, Paper, Typography } from "@mui/material";

const About = () => {
    return (
        <Container maxWidth='md'>
            <Paper sx={{my: 4, p: 2}} elevation={3}>
                <Box>
                    <Typography component='h1' variant='h4'>About</Typography>
                </Box>
            </Paper>
        </Container>
    )
}
export default About;
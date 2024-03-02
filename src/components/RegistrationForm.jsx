import { Stack, Container, TextField, Typography, Button} from "@mui/material"

const RegistrationForm = ({ onClose }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("Registration form submitted");
      onClose();
    };
  
    return (
      <Container maxWidth="sm" style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom sx={{backgroundColor: '#718FD2', padding: 0, m: 0}}>
          Add New Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField required id="registration-id" label="Registration ID" fullWidth margin="normal" />
          <TextField required id="registration-council" label="Registration Council" fullWidth margin="normal" />
          <TextField required id="valid-from" label="Valid From" type="date" InputLabelProps={{ shrink: true }} fullWidth margin="normal" />
          <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">Add Registration</Button>
          </Stack>
        </form>
      </Container>
    );
  };

  export default RegistrationForm;
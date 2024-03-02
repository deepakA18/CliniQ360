import { Stack, Container, TextField, Typography, Button} from "@mui/material"


const AwardsForm = ({ onClose }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      onClose();
    };
  
    return (
      <Container maxWidth="sm" style={{ padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Add New Award
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField required id="add-new-award" label="Add New Award" fullWidth margin="normal" />
          <TextField required id="year-award-received" label="Year award received" fullWidth margin="normal" />
          <TextField required id="awarded-by" label="Awarded by"  fullWidth margin="normal" />
          <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>
            <Button variant="outlined" onClick={onClose}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">Add Award</Button>
          </Stack>
        </form>
      </Container>
    );
  };

  export default AwardsForm;
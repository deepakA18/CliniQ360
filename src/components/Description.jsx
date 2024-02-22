import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../components/Description.css'

const Description = () => {

  return (
  
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '60vw' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Short Description"
          multiline
          rows={8}
          
        />
      </div>
      </Box>
    
  )
}

export default Description
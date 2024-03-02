import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';




const Menu = () => {
  const [field, setField] = useState('');

  const handleChange = (event) => {
    setField(event.target.value);
  };


  return (
    <FormControl variant="standard" sx={{ m: 1, width: '77vw' }}>
        <InputLabel id="demo-simple-select-standard-label">Select your field</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={field}
          onChange={handleChange}
          sx={{backgroundColor: 'transparent'}}
        >
          
          <MenuItem value='Cardio'>Cardio</MenuItem>
          <MenuItem value='Neurology'>Neurology</MenuItem>
          <MenuItem value='Urology'>Urology</MenuItem>
        </Select>
      </FormControl>
  )
}

export default Menu
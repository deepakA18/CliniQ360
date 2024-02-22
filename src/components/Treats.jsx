import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Treats = ({open,onClose}) => {
 
  const [newInput, setNewInput] = useState('');
  const [tabs, setTabs] = useState([]);
  const [value, setValue] = useState(0);

  const handleInputChange = (event) => {
    setNewInput(event.target.value);
  };

  const handleSaveItem = () => {
    const trimmedInput = newInput.trim();
    if (trimmedInput && !tabs.includes(trimmedInput)) {
      setTabs([...tabs, trimmedInput]);
      setValue(tabs.length);
      setNewInput(''); // Clear the input field after saving
    }
  };

  // Handle Enter key press to save item
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSaveItem();
    }
  };

  const handleChange = (event, newValue) => {
    event.preventDefault();
    setValue(newValue);
  };

  return (
    <div>
      
      <Dialog open={open} onClose={onClose} >
        <DialogTitle sx={{backgroundColor: '#718FD2', color: 'white'}}>Your Practise Areas</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Start typing a disease/conditon"
            type="text"
            fullWidth
            value={newInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // Add event listener for Enter key
          />
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            {tabs.map((tab, index) => (
              <Tab key={index} label={tab} value={index} sx={{mt: 2,backgroundColor: '#F4F6FA', borderRadius: '5px'}}/>
            ))}
          </Tabs>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveItem}>Save</Button>
          <Button onClick={onClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Treats;
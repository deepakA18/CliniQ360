import {useState} from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

import styles from './App.module.css'
import Description from './components/Description'
import Menu from './components/Menu'
import Treats from './components/Treats';


const MyComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openTreats, setOpenTreats] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenTreats = () => {
      setOpenTreats(true);
  }

  const handleCloseTreats = () => {
    setOpenTreats(false);
  }
    
  
  return (
 
  <Box className='main' component="form" noValidate autoComplete='off' >
      <Box sx={{ml: 13, padding: '5vh'}} id='section1' >
        <Stack direction="row" spacing={2}>
          <Avatar alt="profile image" src="" sx={{ width: 80, height: 80 }} />
          <TextField id="standard-basic" label="Name" variant="standard" />
        </Stack>
      </Box>

      <Box  className={styles.section} id= 'section2'>
        <Box className={styles.sectionTitle}>
          <p>ABOUT THE DOCTOR</p>
        </Box>

        <Box className={styles.subSection}>
          <Box className={styles.subSectionText}>
            <span style={{fontWeight: 'bold'}}>Add about you</span>
            <p>A good about you should talk about your work experience, specialty, achievements, and more. It should be a minimum of 700 characters</p>
          </Box>

          <Box className='sub-section-button'>
            <Button className={styles.button} aria-describedby={id} variant= "outlined" onClick={handleClick}>
              <span style={{fontWeight: 'bold'}} >Add About You</span>
              <span>&rarr;</span>
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 100,
              }}
            >
              <Description />
            </Popover>
          </Box>
        </Box>
      </Box>

      <Box className={styles.section} id='section3'>
        <Box className={styles.sectionTitle}>
          <p>SPECIALISATION</p>
        
            <Menu />
          
        </Box>
      </Box>

      <Box className={styles.section} id='section4'>
        <Box className={styles.sectionTitle}>
          <p>COMMONLY TREATS</p>
        </Box>

        <Box className={styles.subSection}>
          <Box className={styles.subSectionText}>
            <span style={{fontWeight: 'bold'}}>Add commonly treats</span>
            <p>This helps you come up in relevant search results</p>
          </Box>

          <Box className='sub-section-button'>
            <Button className={styles.button} onClick={handleOpenTreats}>
              <span style={{fontWeight: 'bold'}}>Add Commonly Treats</span>
              <span >→</span>
            </Button>

            <Treats open={openTreats} onClose={handleCloseTreats}/>

          </Box>
        </Box>
      </Box>

      <Box className={styles.section} id='section5'>
        <Box className={styles.sectionTitle}>
          <p>REGISTRATIONS</p>
        </Box>

        <Box className={styles.subSection} >
          <Box className={styles.subSectionText}>
            <span style={{fontWeight: 'bold'}}>Add your registrations</span>
            <p>This helps build patient trust & maintain a correct profile</p>
          </Box>

          <Box className='sub-section-button'>
            <Button className={styles.button}>
              <span style={{fontWeight: 'bold'}}>Add Registrations</span>
              <span>→</span>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default MyComponent;

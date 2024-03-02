import { useState } from 'react';
import {Box,Stack,TextField,Avatar,Button, Popover} from '@mui/material';

import styles from './App.module.css';
import Description from './components/Description';
import Menu from './components/Menu';
import Treats from './components/Treats';
import RegistrationForm from './components/RegistrationForm';
import Address from './components/Address';
import AwardsForm from './components/Awards';



const MyComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openTreats, setOpenTreats] = useState(false);
  const [openRegistrationForm, setOpenRegistrationForm] = useState(false);
  const [openAwardForm, setOpenAwardForm] = useState(false);
  

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event) =>  setAnchorEl(event.currentTarget);
  const handleClose = () =>  setAnchorEl(null);
   
  const handleOpenTreats = () =>  setOpenTreats(true);
  const handleCloseTreats = () => setOpenTreats(false);

  const handleOpenRegistrationForm = () => setOpenRegistrationForm(true);
  const handleCloseRegistrationForm = () => setOpenRegistrationForm(false);

  const handleOpenAwardForm  = () => setOpenAwardForm(true);
  const handleCloseAwardForm = () => setOpenAwardForm(false);

  return (
    <Box className='main' component="form" noValidate autoComplete='off'>
      <Box sx={{ ml: 13, padding: '5vh' }} id='section1'>
        <Stack direction="row" spacing={2}>
          <Avatar alt="profile image" src="" sx={{ width: 80, height: 80 }} />
          <TextField id="standard-basic" label="Full Name" variant="standard" />
        </Stack>
      </Box>

      <Box className={styles.section} id='section2'>
        <Box className={styles.sectionTitle}>
          <p>ABOUT THE DOCTOR</p>
        </Box>
        <Box className={styles.subSection}>
          <Box className={styles.subSectionText}>
            <span style={{ fontWeight: 'bold' }}>Add about you</span>
            <p>A good about you should talk about your work experience, specialty, achievements, and more. It should be a minimum of 700 characters</p>
          </Box>
          <Box className='sub-section-button'>
            <Button className={styles.button} aria-describedby={id} variant="outlined" onClick={handleClick}>
              <span style={{ fontWeight: 'bold' }}>Add About You</span>
              <span>&rarr;</span>
            </Button>
            <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} transformOrigin={{
      vertical: 'center',
      horizontal: 'center',
    }}>
              <Description />
            </Popover>
          </Box>
        </Box>
      </Box>

      <Box className={styles.section} id='section3'>
        <Menu />
      </Box>

      <Box className={styles.section} id='section4'>
        <Box className={styles.sectionTitle}>
          <p>COMMONLY TREATS</p>
        </Box>
        <Box className={styles.subSection}>
          <Box className={styles.subSectionText}>
            <span style={{ fontWeight: 'bold' }}>Add commonly treats</span>
            <p>This helps you come up in relevant search results</p>
</Box>
<Box className='sub-section-button'>
<Button className={styles.button} onClick={handleOpenTreats}>
<span style={{ fontWeight: 'bold' }}>Add Commonly Treats</span>
<span>→</span>
</Button>
<Treats open={openTreats} onClose={handleCloseTreats} />
</Box>
</Box>
</Box>

<Box className={styles.section} id='section5'>
    <Box className={styles.sectionTitle}>
      <p>REGISTRATIONS</p>
    </Box>
    <Box className={styles.subSection}>
      <Box className={styles.subSectionText}>
        <span style={{ fontWeight: 'bold' }}>Add your registrations</span>
        <p>This helps build patient trust & maintain a correct profile</p>
      </Box>
      <Box className='sub-section-button'>
        <Button className={styles.button} onClick={handleOpenRegistrationForm}>
          <span style={{ fontWeight: 'bold' }}>Add Registrations</span>
          <span>→</span>
        </Button>
      </Box>
      <Popover
    open={openRegistrationForm}
    onClose={handleCloseRegistrationForm}
    anchorOrigin={{
      vertical: 'center',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'center',
      horizontal: 'center',
    }}
  >
    <RegistrationForm onClose={handleCloseRegistrationForm} />
  </Popover>
    </Box>
  </Box>

  
  <Box className={styles.section} id='section6'>
        <Box className={styles.sectionTitle}>
          <p>ADDRESS</p>
        </Box>
        <Box className={styles.subSection} id='subsection6'>
        <Address />
        </Box>      
</Box>

<Box className={styles.section} id='section7'>
        <Box className={styles.sectionTitle}>
          <p>AWARDS & PUBLICATIONS</p>
        </Box>
        <Box className={styles.subSection}>
          <Box className={styles.subSectionText}>
            <span style={{ fontWeight: 'bold' }}>Add awards & publications</span>
            <p>At all the awards you&apos;ve won and the work you&apos;ve published</p>
          </Box>
          <Box className='sub-section-button'>
            <Button className={styles.button} aria-describedby={id} variant="outlined" onClick={handleOpenAwardForm}>
              <span style={{ fontWeight: 'bold' }}>Add Awards & Publications</span>
              <span>&rarr;</span>
            </Button>
          </Box>
          <Popover
    open={openAwardForm}
    onClose={handleCloseAwardForm}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'center',
      horizontal: 'center',
    }}
  >
    <AwardsForm onClose={handleCloseAwardForm}/>
  </Popover>
        </Box>
      </Box>
</Box>
)}

export default MyComponent;

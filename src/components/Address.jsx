// Address.js
import { useState, useEffect } from 'react';
import { Box, Autocomplete, TextField,Stack } from '@mui/material';
import { Country, State, City } from 'country-state-city';

const Address = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (event, newValue) => {
    event.preventDefault();
    setSelectedCountry(newValue);
  };

  const handleStateChange = (event, newValue) => {
    event.preventDefault();
    setSelectedState(newValue);
  };

  const handleCityChange = (event, newValue) => {
    event.preventDefault();
    setSelectedCity(newValue);
  };

  const getCountryLabel = (option) => (option ? option.name : '');
  const getStateLabel = (option) => (option ? option.name : '');
  const getCityLabel = (option) => (option ? option.name : '');

  useEffect(() => {
    // Fetch the list of countries when the component mounts
    const countryList = Country.getAllCountries();
    setCountries(countryList);
  }, []);

  useEffect(() => {
    // Fetch the list of states when the selected country changes
    if (selectedCountry) {
      const stateList = State.getStatesOfCountry(selectedCountry.isoCode)
      setStates(stateList);
    }
  }, [selectedCountry]);

  useEffect(() => {
    // Fetch the list of cities when the selected state changes
    if (selectedState) {
      const cityList = City.getCitiesOfState(selectedCountry.isoCode, selectedState.isoCode);
      console.log('City List:', cityList);
      setCities(cityList);
    }
  }, [selectedCountry,selectedState]);
  

  return (
    <div>
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
          id="outlined-multiline-flexible"
          label="Clinic's Name"
          multiline
          maxRows={4}
        /> 

       <TextField
          id="outlined-multiline-flexible"
          label="Address Line 1"
          multiline
          maxRows={4}
        />

<TextField
          id="outlined-multiline-flexible"
          label="Street"
          multiline
          maxRows={4}
        />
    </Box>
      <Box sx={{ mt: 2}}>
        <Stack direction='row' spacing={10}>
        <Autocomplete
          options={countries}
          getOptionLabel={getCountryLabel}
          value={selectedCountry}
          onChange={handleCountryChange}
          renderInput={(params) => <TextField {...params} label="Country" />}
          sx={{width: '15vw'}}
        />

        <Autocomplete
          options={selectedCountry ? states : []}
          getOptionLabel={getStateLabel}
          value={selectedState}
          onChange={handleStateChange}
          renderInput={(params) => <TextField {...params} label="State" />}
          sx={{width: '15vw'}}
        />

        <Autocomplete
          options={selectedState ? cities : []}
          getOptionLabel={getCityLabel}
          value={selectedCity}
          onChange={handleCityChange}
          renderInput={(params) => <TextField {...params} label="City" />}
          sx={{width: '15vw'}}
          
        />
        </Stack>
      </Box>
    </div>
  );
};

export default Address;

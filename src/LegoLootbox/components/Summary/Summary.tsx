import React from 'react';
import { useLocation } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { MinifigInterface } from '../../../intefaces/Minifig.interface';
import OrdersList from './OrdersList/OrdersList';
import ContactForm from './ContactForm/ContactForm';

interface Location {
  state: {
    minifig: MinifigInterface
  }
}

const StyledContainer = styled(Paper)({
  width: '80%',
  margin: '0 auto',
  padding: 30,
  marginTop: 50,
  backgroundColor: '#0B0603',
  display: 'flex',
  justifyContent: 'space-around',
});

const Summary = () => {
  const location = useLocation();
  const { state: { minifig } } = location as Location;

  return (
    <StyledContainer>
      <ContactForm />
      <div>
        <Typography variant="h5">YOUR ORDER</Typography>
        <OrdersList minifig={minifig} />
      </div>
    </StyledContainer>
  );
};

export default Summary;

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { MinifigInterface } from '../../intefaces/Minifig.interface';
import OrdersList from './OrdersList/OrdersList';
import ContactForm from './ContactForm/ContactForm';

interface Location {
  state: {
    minifig: MinifigInterface
  }
}

const StyledContainer = styled(Paper)(({ theme }) => (
  {
    width: '80%',
    margin: '0 auto',
    padding: 30,
    marginTop: 50,
    backgroundColor: '#0B0603',
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('lg')]: {
      width: '100%',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }
));

const StyledSummaryContainer = styled('div')(({ theme }) => ({
  width: '40%',
  [theme.breakpoints.down('lg')]: {
    width: '100%',
    alignSelf: 'center',
  },
}));

const Summary = () => {
  const location = useLocation();
  const { state: { minifig } } = location as Location;

  return (
    <StyledContainer>
      <ContactForm />
      <StyledSummaryContainer>
        <Typography variant="h5">YOUR ORDER</Typography>
        <OrdersList minifig={minifig} />
      </StyledSummaryContainer>
    </StyledContainer>
  );
};

export default Summary;

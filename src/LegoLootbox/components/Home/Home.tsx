import React from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import mysteryBoxImg from '../../assets/img/mystery-box-png.png';

const StyledContainer = styled('div')(({ theme }) => (
  {
    textTransform: 'uppercase',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '60%',
    whiteSpace: 'nowrap',
    '& > a': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
  }
));

const StyledImg = styled('img')({
  width: 200,
  height: 'auto',
  alignSelf: 'center',
});

const Home = () => (
  <StyledContainer>
    <Typography variant="h4">Lego Minifigs Mystery Box</Typography>
    <StyledImg alt="mystery-box" src={mysteryBoxImg} />
    <Link to="/chooseMinifig">
      <Button fullWidth variant="contained">
        Get your mystery box!
      </Button>
    </Link>
  </StyledContainer>
);

export default Home;

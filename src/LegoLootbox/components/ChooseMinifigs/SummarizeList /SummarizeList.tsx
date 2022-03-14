import React from 'react';
import { styled } from '@mui/system';
import { Typography, Button, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { MinifigInterface } from '../../../intefaces/Minifig.interface';
import { MinifigPartsResult } from '../../../intefaces/MinifigParts.interface';

interface IProps {
  minifig: MinifigInterface | null;
  minifigsParts: MinifigPartsResult[] | null;
  setIsDrawerOpen: Function;
}

interface IRenderListDetail {
  label: string,
  value: string | number
}

const StyledContainer = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: '100%',
  padding: '0 50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
}));

const StyledListContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  height: 'auto',
  width: '400px',
});

const StyledPartComponent = styled('div')({
  textAlign: 'center',
  margin: '10px 0',
  alignSelf: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const StyledImg = styled('img')({
  width: 50,
  height: 50,
  marginRight: 20,
});

const StyledPartsListContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
});

const StyledButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
}));

const RenderListDetail = ({ label, value }: IRenderListDetail) => (
  <StyledListContainer>
    <Typography variant="h5">
      {label}
    </Typography>
    <Typography>{value}</Typography>
  </StyledListContainer>
);

const mapPartsListToComponent = (partsList: MinifigPartsResult[] | null) => {
  if (partsList === null) return null;

  return (
    <>
      {partsList.map((part) => (
        <StyledPartComponent key={part.element_id}>
          <StyledImg alt="parts" src={part.part.part_img_url} />
          <Typography>
            {part.quantity}
            x
            {part.part.part_num}
          </Typography>
        </StyledPartComponent>
      ))}
    </>
  );
};

const SummarizeList = ({ minifig, minifigsParts, setIsDrawerOpen }: IProps) => {
  if (!minifig) return null;
  return (
    <StyledContainer>
      <Hidden mdUp>
        <CloseIcon onClick={() => setIsDrawerOpen(false)} />
      </Hidden>
      <RenderListDetail label="Name" value={minifig?.name} />
      <RenderListDetail label="Minifig number" value={minifig?.set_num} />
      <RenderListDetail label="Parts" value={minifig?.num_parts} />
      <StyledPartsListContainer>
        {mapPartsListToComponent(minifigsParts)}
      </StyledPartsListContainer>
      <Link state={{ minifig }} to="/summary">
        <StyledButton color="secondary" variant="contained">Purchase</StyledButton>
      </Link>
    </StyledContainer>
  );
};

export default SummarizeList;

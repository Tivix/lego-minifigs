import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';
import { MinifigInterface } from '../../../intefaces/Minifig.interface';

interface IProps {
  minifig: MinifigInterface
}

const StyledContainer = styled('div')({
  display: 'flex',
  marginTop: 30,
});

const StyledImg = styled('img')({
  width: 100,
  height: 100,
  marginRight: 20,
});

const OrdersList = ({ minifig }: IProps) => (
  <StyledContainer>
    <StyledImg alt="minifig-preview" src={minifig.set_img_url} />
    <div>
      <Typography variant="h6">{minifig.name}</Typography>
      <Typography variant="subtitle1">
        Parts:
        {' '}
        {minifig.num_parts}
      </Typography>
    </div>
  </StyledContainer>
);

export default OrdersList;

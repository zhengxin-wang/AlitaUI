
import { Typography } from '@mui/material';

export const renderStatusComponent = ({ isLoading, isSuccess, isError, successContent }) => {
  if(isLoading) {
    return (
      <Typography variant={'body2'}>...</Typography>
    );
  }

  if(isError) {
    return (
      <Typography variant={'body2'}>Failed to load.</Typography>
    );
  }
  
  if(isSuccess) {
    return (
      <div>{successContent}</div>
    );
  }

  return null;
};

export default renderStatusComponent;



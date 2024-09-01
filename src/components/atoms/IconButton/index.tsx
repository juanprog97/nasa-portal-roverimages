import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';

const IconButton = () => {
  return (
    <LoadingButton
      loading
      loadingPosition='start'
      startIcon={<SaveIcon />}
      variant='outlined'
    >
      Save
    </LoadingButton>
  );
};

export default IconButton;

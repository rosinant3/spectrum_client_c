import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useFileChange } from './UploadButtonsHooks';
import { FileUploadProps } from '../interfaces';

const UploadButtons: React.FC<FileUploadProps> = ({ actions }) => {

  const { onFileChange } = useFileChange(actions.addFiles);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label" style={{ backgroundColor: 'var(--mainActiveColor)' }}>
        Upload Files 
        <input onChange={onFileChange} hidden accept="image/*" multiple type="file"  />
      </Button>
    </Stack>
  );
};

export default UploadButtons;
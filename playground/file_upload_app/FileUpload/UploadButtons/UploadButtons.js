import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useFileChange } from './UploadButtonsHooks';

export default function UploadButtons() {

  const { onFileChange } = useFileChange();

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button variant="contained" component="label" style={{ backgroundColor: 'red' }}>
        Upload
        <input onChange={onFileChange} hidden accept="image/*" multiple type="file" />
      </Button>
    </Stack>
  );
}
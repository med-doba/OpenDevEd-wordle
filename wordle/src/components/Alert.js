import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Alerts({target, status}) {
    return (
    <Stack sx={{ width: '100%' }} spacing={2}>
        {status === true && <Alert variant="filled" severity="success">
            You win!
        </Alert>}
        {status === false && <Alert variant="filled" severity="error">
            You lost the target is: {target}
        </Alert>}
    </Stack>
  );
}
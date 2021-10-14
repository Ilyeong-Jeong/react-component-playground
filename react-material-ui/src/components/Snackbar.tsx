import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AlertSnackbar(props: {
  open: boolean;
  severity: Color | undefined; // success, error, warning, info
  text: string;
  closeAlert: () => void;
}): JSX.Element {
  const classes = useStyles();

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    props.closeAlert();
  };

  return (
    <div className={classes.root}>
      <Snackbar open={props.open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={props.severity}>
          {props.text}
        </Alert>
      </Snackbar>
    </div>
  );
}

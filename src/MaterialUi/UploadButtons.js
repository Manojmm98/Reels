// this is the button which provides  upload buttons to the user
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:'8px',
    marginLeft:'5px', 
  },
  input: {
    display: 'none',   
  },
  hover: {
    '&:hover': {
      background: "black",
   }
  }
}));

export default function UploadButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="video/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button startIcon={<VideocamIcon/>} className={classes.hover} variant="outlined" color="secondary" component="span">
          Upload your vedios

        </Button>
      </label>
    </div>
  );
}




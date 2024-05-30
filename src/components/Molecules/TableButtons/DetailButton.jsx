import React from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from '@mui/icons-material/Visibility';

const DetailButton = ({ data }) => {
  const showData = () => {
    console.log(data)
  }

  return (
    <IconButton
      onClick={showData}
      sx={{
        width: 32,
        height: 32,
        borderRadius: 1,
        "&:hover": {
          backgroundColor: "#C3FA7B",
        },
      }}
    >
      <VisibilityIcon />
    </IconButton>
  );
};

export default DetailButton;

import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const DeleteButton = (props) => {
  const { currentTable, id, fetchData } = props;
  // const deleteTableRow = AuxDelete({ currentTable });

  return (
    <IconButton
      // onClick={() => deleteTableRow(id).then(() => fetchData())}
      sx={{
        width: 32,
        height: 32,
        borderRadius: 1,
        '&:hover': {
          backgroundColor: '#C3FA7B',
        },
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;

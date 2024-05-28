import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const EditButton = ({
  id,
  data,
  columnId,
  fetchData,
  toggleForm,
  setFormProps,
}) => {
  const [initialEditData, setInitialEditData] = useState(data.find((item) => item[columnId] === id));

  return (
    <IconButton
      onClick={() => {
        setFormProps({
          mode: "modify",
          fetchData: fetchData,
          initialData: initialEditData,
          setInitialData: setInitialEditData,
        });
        toggleForm();
      }}
      sx={{
        width: 32,
        height: 32,
        borderRadius: 1,
        '&:hover': {
          backgroundColor: '#C3FA7B',
        },
      }}
    >
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;

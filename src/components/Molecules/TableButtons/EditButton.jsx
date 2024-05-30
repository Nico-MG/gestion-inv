import React, { useState, useEffect } from "react";
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
  const [initData, setInitData] = useState(data.find((item) => item[columnId] === id));

  useEffect(() => {
    setInitData(data.find((item) => item[columnId] === id));
  }, [data, columnId, id]);

  const handleClick = () => {
    setFormProps({
      mode: "modify",
      fetchData: fetchData,
      initialData: initData,
    });
    toggleForm();
  };

  return (
    <IconButton
      onClick={handleClick}
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

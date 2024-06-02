import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { auxDelete } from "../../../functions/auxDelete";

const DeleteButton = ({ currentTable, id, fetchData }) => {
  const deleteTableRow = auxDelete({ currentTable });

  const handleDelete = async (id) => {
    try {
      await deleteTableRow(id);
      await fetchData();
      alert(`Eliminado producto con ID: ${id}`);
    }
    catch (error) {
      alert(`Error al eliminar producto: ${error}`)
    }
  }

  return (
    <IconButton
      onClick={() => handleDelete(id)}
      sx={{
        width: 32,
        height: 32,
        borderRadius: 1,
        "&:hover": {
          backgroundColor: "#C3FA7B",
        },
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;

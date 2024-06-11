import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const texts = ({ currentTable, action, id }) => {
  switch (currentTable) {
    case "products":
      if (action === "delete") {
        return {
          title: "Eliminar producto",
          text: `¿Está seguro que desea eliminar el producto con ID: ${id}?`,
          actionText: "Eliminar"
        };
      } else if (action === "modify") {
        return {
          title: "Modificar producto",
          text: `¿Está seguro que desea modificar el producto con ID: ${id}?`,
          actionText: "Modificar"
        };
      }
      break;

    case "orders":
      if (action === "delete") {
        return {
          title: "Eliminar pedido",
          text: `¿Está seguro que desea eliminar el pedido con ID: ${id}?`,
          actionText: "Eliminar"
        };
      } else if (action === "modify") {
        return {
          title: "Modificar pedido",
          text: `¿Está seguro que desea modificar el pedido con ID: ${id}?`,
          actionText: "Modificar"
        };
      }
      break;

    case "sales":
      if (action === "delete") {
        return {
          title: "Eliminar venta",
          text: `¿Está seguro que desea eliminar la venta con ID: ${id}?`,
          actionText: "Eliminar"
        };
      } else if (action === "modify") {
        return {
          title: "Modificar venta",
          text: `¿Está seguro que desea modificar la venta con ID: ${id}?`,
          actionText: "Modificar"
        };
      }
      break;

    default:
      return {
        title: "Acción no reconocida",
        text: "El tipo de tabla o acción no coincide con ninguno especificado.",
      };
  }
};

const StyledDialog = ({
  currentTable,
  loading,
  open,
  closeDialog,
  confirmAction,
  action,
  id,
}) => {
  const theme = useTheme();

  const { title, text, actionText } = texts({ currentTable, action, id })

  return (
    <Dialog open={open} onClose={closeDialog} maxWidth="sm">
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5px",
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        {title}
      </DialogTitle>
      <DialogContent
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <DialogContentText
          padding={1}
          sx={{ color: theme.palette.common.black }}
        >
          {text}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          onClick={closeDialog}
          variant="contained"
          size="small"
          sx={{
            bgcolor: theme.palette.grey[400],
            color: theme.palette.common.black,
            "&:hover": {
              bgcolor: theme.palette.action.hover,
              color: theme.palette.secondary.contrastText,
            },
          }}
        >
          Cancelar
        </Button>
        <LoadingButton
          onClick={confirmAction}
          variant="contained"
          size="small"
          loading={loading}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            "&:hover": {
              bgcolor: theme.palette.action.hover,
              color: theme.palette.secondary.contrastText,
            },
          }}
          autoFocus
        >
          <span>{actionText}</span>
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default StyledDialog;

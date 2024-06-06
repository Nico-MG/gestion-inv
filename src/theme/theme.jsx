import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#266763", // Green
      light: "#757de8", // Lighter shade of primary color
      dark: "#002984", // Darker shade of primary color
      contrastText: "#ffffff", // Text color contrast for primary color
    },
    secondary: {
      main: "#f50057", // Red
      light: "#ff4081", // Lighter shade of secondary color
      dark: "#c51162", // Darker shade of secondary color
      contrastText: "#ffffff", // Text color contrast for secondary color
    },
    error: {
      main: "#f44336", // Red
      light: "#e57373", // Lighter shade of error color
      dark: "#d32f2f", // Darker shade of error color
      contrastText: "#ffffff", // Text color contrast for error color
    },
    warning: {
      main: "#ffc107", // Yellow
      light: "#ffecb3", // Lighter shade of warning color
      dark: "#ff8f00", // Darker shade of warning color
      contrastText: "#000000", // Text color contrast for warning color
    },
    info: {
      main: "#2196f3", // Light blue
      light: "#64b5f6", // Lighter shade of info color
      dark: "#1976d2", // Darker shade of info color
      contrastText: "#ffffff", // Text color contrast for info color
    },
    success: {
      main: "#4caf50", // Light green
      light: "#81c784", // Lighter shade of success color
      dark: "#388e3c", // Darker shade of success color
      contrastText: "#000000", // Text color contrast for success color
    },
    text: {
      icon: '#000000',
      primary: "#000000", // Primary text color
      secondary: "#757575", // Secondary text color
    },
    background: {
      default: "#ffffff", // Default background color
      paper: "#f5f5f5", // Paper background color (for example, for containers)
    },
    action: {
      active: "#3f51b5", // Active action color (e.g., hover, selection, etc.)
      hover: "#c3fa7b", // Action color on hover
      selected: "#eeeeee", // Selected action color
      disabled: "#bdbdbd", // Disabled action color
    },
  },
  variants: {
    button: {
      contained: {
        color: '#ffffff',
        backgroundColor: '#266763', // Green
        '&:hover': {
          backgroundColor: '#757de8', // Lighter shade of primary color
        },
      },
      outlined: {
        color: '#266763', // Green
        borderColor: '#266763', // Green
        '&:hover': {
          backgroundColor: '#f5f5f5', // Light background on hover
        },
      },
    },
    // Define más variantes según tus necesidades
  }
});

// Dark theme
const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#3f51b5", // Azul
    },
    secondary: {
      main: "#f50057", // Rosa
    },
    error: {
      main: "#f44336", // Rojo
    },
    warning: {
      main: "#ffc107", // Amarillo
    },
    info: {
      main: "#2196f3", // Azul claro
    },
    success: {
      main: "#4caf50", // Verde
    },
    text: {
      primary: "#ffffff", // Texto principal
      secondary: "##c7c5c5", // Texto secundario
    },
    background: {
      default: "#000000", // Fondo predeterminado
      paper: "#1a1a1a", // Fondo del papel (por ejemplo, para contenedores)
    },
    action: {
      active: "#3f51b5", // Color de acción activa (como hover, selección, etc.)
      hover: "#eeeeee", // Color de acción al pasar el mouse
      selected: "#eeeeee", // Color de acción seleccionada
      disabled: "#bdbdbd", // Color de acción deshabilitada
    },
  },
});

export { lightTheme, darkTheme };

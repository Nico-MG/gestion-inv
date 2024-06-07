import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CatchingPokeonIcon from "@mui/icons-material/CatchingPokemon";
import logo from "../../images/logo_2.png"

const SideNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokeonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Menú
        </Typography>
      </Toolbar>
      <Stack >
        {logo}
      </Stack>
    </AppBar>
  );
};

export default SideNavbar;

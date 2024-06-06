import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CatchingPokeonIcon from "@mui/icons-material/CatchingPokemon";

const SideNavbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <CatchingPokeonIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POKEMONAPP
        </Typography>
      </Toolbar>
      <Stack>
        
      </Stack>
    </AppBar>
  );
};

export default SideNavbar;

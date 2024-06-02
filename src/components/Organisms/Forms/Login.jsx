import { useState } from "react";
import UserApi from "../../../services/Api/user.service";
import Sidebar from '../Sidebar';
import {
  Box,
  Button,
  Card,
  CardMedia,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
  marginBottom: "2vh",
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#9bc661",
  },
  "& .MuiInputLabel-outlined.Mui-focused": {
    color: "#9bc661",
  },
});

const T2 = ({handleChange, handleSubmit}) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#266763",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      >
        <CardMedia
          component="img"
          alt="StockBox"
          image="/src/images/logo_2.png"
          sx={{
            width: "auto",
            maxWidth: "55%",
          }}
        />
      </Box>

      <Box
        sx={{
          flex: 1,
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            width: "60%",
            borderRadius: "24px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box sx={{ padding: "50px", margin: 2 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              ¡BIENVENIDO!
            </Typography>
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              ACCEDE A TU CUENTA
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            <Box
              sx={{
                width: "65%",
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box>
                <StyledTextField label="RUT" name="rut" fullWidth onChange={handleChange} />
                <StyledTextField label="Contraseña" name="password" onChange={handleChange} fullWidth />
                <FormControlLabel
                  control={
                    <Checkbox
                      sx={{
                        color: "#348d87",
                        "&.Mui-checked": {
                          color: "#348d87",
                        },
                      }}
                    />
                  }
                  label="Recordar usuario"
                />
              </Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#266763",
                  color: "#ffffff",
                  fontSize: "1rem",
                  width: "200px",
                  borderRadius: "12px",
                  "&:hover": {
                    backgroundColor: "#c3fa7b",
                    color: "#7e7e7e",
                  },
                  margin: 5,
                }}
                type="submit"
              >
                INGRESAR
              </Button>
            </Box>
          </form>
        </Card>
      </Box>
    </Box>
  );}

const Login = () => {
  const [logged, setLogged] = useState("Login");
  
  const [credentials,setCredentials] = useState({
    rut: "",
    password: ""
  })     
  
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
      })

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        setLogged("Dashboard");
	const token = await UserApi.logUsers(credentials);
	console.log(token);
      //credentials -> {rut, password}

    } catch (error){
        console.error("Error al setear datos");
    }

  }


    return (
	<>
	    {logged === "Login" && <T2 handleChange = {handleChange} handleSubmit = {handleSubmit} />}
	    {logged === "Dashboard" && <Sidebar />}
	</>
	
  );
};

export default Login;

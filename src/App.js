import Box from "@mui/material/Box";
import { Outlet } from "react-router";
import Nav from "./components/Nav";

function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <Nav />
      <Outlet />
    </Box>
  );
}

export default App;

import Box from "@mui/material/Box";
import Nav from "./components/Nav";
import routes from "./routes";

function App() {
  return (
    <Box sx={{ width: "100%" }}>
      <Nav />
      {routes}
    </Box>
  );
}

export default App;

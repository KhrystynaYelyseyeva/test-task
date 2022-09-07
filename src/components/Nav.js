import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const pages = [
  {
    path: "/",
    name: "HOME",
  },
  {
    path: "/help",
    name: "HELP",
  },
];

const Nav = () => {
  const location = useLocation();

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={
          pages.map(({ path }) => path).includes(location.pathname)
            ? location.pathname
            : "/"
        }
      >
        {pages.map(({ path, name }) => (
          <Tab
            key={name}
            label={name}
            value={path}
            component={Link}
            to={path}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default memo(Nav);

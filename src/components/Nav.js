import { memo, useState } from "react";
import { Link } from "react-router-dom";
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
  const [pathname, setPathname] = useState(window.location.pathname);

  const handleChange = (event, newValue) => {
    setPathname(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Tabs
        value={
          pages.map(({ path }) => path).includes(pathname) ? pathname : "/"
        }
        onChange={handleChange}
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

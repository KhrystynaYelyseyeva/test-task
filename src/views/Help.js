import { memo, useState, useEffect } from "react";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const defaultSrc = "https://cdn2.thecatapi.com/images/bd0.jpg";

const Help = () => {
  const [src, setSrc] = useState(defaultSrc);

  useEffect(() => {
    const getNewImage = setInterval(async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search"
        );
        const result = await response.json();

        setSrc(result[0].url);
      } catch (error) {
        console.log(error);
        setSrc(defaultSrc);
      }
    }, 5000);

    return () => clearInterval(getNewImage);
  }, []);

  return (
    <Box sx={{ width: "100%" }} data-testid="help-page">
      <Typography
        variant="h4"
        align="center"
        sx={{ my: 3 }}
        data-testid="help-link"
      >
        You can take one{" "}
        <Link
          href="https://www.facebook.com/groups/3544553825618540/"
          target="_blank"
          rel="noreferrer"
          aria-label="To read more about homeless animals, visit the Facebook page which opens in a new window."
        >
          here
        </Link>{" "}
        or donate these lovely animals
      </Typography>
      <Box
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={src}
          alt="cat"
          width="100%"
          height="auto"
          style={{ maxWidth: "400px" }}
        />
      </Box>
    </Box>
  );
};

export default memo(Help);

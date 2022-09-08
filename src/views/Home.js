import { useEffect, useState, memo } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

const Home = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?limit=10"
        );
        const result = await response.json();

        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    getData();
  }, []);

  return (
    <Box sx={{ width: "100%" }} data-testid="home-page">
      {!!error ? (
        <Typography variant="h4" align="center" sx={{ my: 3 }}>
          No data
        </Typography>
      ) : (
        <>
          <Typography variant="h4" align="center" sx={{ my: 3 }}>
            Don't you have a cat yet?
          </Typography>
          <ImageList variant="masonry" cols={3} gap={8}>
            {data.length > 0 &&
              data.map(item => (
                <ImageListItem key={item.id}>
                  <img
                    src={`${item.url}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt="cat"
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
          </ImageList>
        </>
      )}
    </Box>
  );
};

export default memo(Home);

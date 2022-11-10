import { memo } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";

const getData = async () => {
  const response = await fetch(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  return await response.json();
};

const Home = () => {
  const { data = [], error, isLoading } = useQuery(["data"], getData);

  return (
    <Box sx={{ width: "100%" }} data-testid="home-page">
      {!!error || isLoading ? (
        <Typography variant="h4" align="center" sx={{ my: 3 }}>
          No data
        </Typography>
      ) : (
        <>
          <Typography variant="h4" align="center" sx={{ my: 3 }}>
            Don't you have a cat yet?
          </Typography>
          <ImageList variant="masonry" cols={3} gap={8}>
            {data.map(item => (
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

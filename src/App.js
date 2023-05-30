import "./App.css";
import { Container, Typography, Box, Stack, AppBar, Toolbar, IconButton } from "@mui/material";
import Appbar from "./components/appbar";
import { ThemeProvider } from "@mui/system";
import theme from "./styles/theme";
import Banner from "./components/banner";
import BannerE from "./components/banner2";
import Products from "./components/products";
import Products2 from "./components/products2";
import Exports from "./components/exports";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import AppDrawer from "./components/drawer";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import { useEffect } from "react";



function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <div sx={{ maxWidth: 1024 }}>
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Banner />
            <Promotions />
            <SearchBox />
            <Box id="cars" display="flex" justifyContent="center" sx={{ p: 4 }}>
              <AppBar position="static">
                <Typography variant="h3" color="inherit" align="center" component="div">
                  AUTOMOBILES
                  </Typography>
              </AppBar>            
            </Box>
            <Products />
            <Box id="fiber" display="flex" justifyContent="center" sx={{ p: 4 }}>
              <AppBar position="static">
                  <Typography variant="h3" color="inherit" align="center" component="div">
                  FIBER GLASS
                  </Typography>
              </AppBar>  
            </Box>
            <Products2 />
            <Box id="exports" display="flex" justifyContent="center" sx={{ p: 4 }}>
              <AppBar position="static">
                  <Typography variant="h3" color="inherit" align="center" component="div">
                  MASEL EXPORTS
                  </Typography>
              </AppBar>              
            </Box>
            <BannerE />
            <Exports />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
    </div>
  );
}

export default App;

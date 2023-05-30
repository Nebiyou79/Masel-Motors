import {
  Dialog,
  DialogTitle,
  Slide,
  Box,
  IconButton,
  DialogContent,
  Typography,
  Link,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import styled from "@emotion/styled";
import { Product, ProductImage } from "../../styles/product";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(8),
  gap: 100,
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanant"
      open={open}
      fullScreen
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"space-between"}
        >
          {product.name}
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
      <ProductDetailWrapper display={"flex"} flexDirection={matches ? "column" : "row"}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle">MASAL MOTORS</Typography>
            <Typography variant="subtitle">{product.availability}</Typography>
            <Typography sx={{ lineHeight: 2 }} variant="h4">
              {product.name}
            </Typography>
            <Typography variant="body">
              {product.description}
            </Typography>
            <Typography variant="body">
              {product.desc1}
            </Typography>
            <Typography variant="body">
              {product.desc2}
            </Typography>
            <Typography variant="body">
              {product.desc3}
            </Typography>
            <Typography variant="body">
              {product.desc4}
            </Typography>
            <Typography variant="body">
              {product.desc5}
            </Typography>
            <Typography variant="body">
              {product.desc5}
            </Typography>
            <Typography variant="body">
              {product.desc6}
            </Typography>
            <Typography variant="body">
              {product.desc7}
            </Typography>
            <Typography variant="body">
              {product.desc8}
            </Typography>
            <Typography variant="body">
              {product.desc9}
            </Typography>
            <Typography variant="body">
              {product.desc10}
            </Typography>
            <Typography variant="body">
              {product.desc11}
            </Typography>
            <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
           <Link href="https://www.facebook.com/" target="_blank"><FacebookIcon sx={{ mr: 1 }} /></Link> 
           <Link href="https://www.twitter.com/" target="_blank"><TwitterIcon sx={{ mr: 1 }} /></Link> 
           <Link href="https://www.instagram.com/" target="_blank"><InstagramIcon /></Link> 
            
          </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}

import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Link,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { SubscribeTf, FooterTitle } from "../../styles/footer";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.secondary,
        color: Colors.black,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={10} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Stack spacing={1}>
            <Button
              startIcon={<LocationOnIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              <Link sx={{ color: Colors.white }} href="https://goo.gl/maps/jd9tc8bM2SnwHt7VA" target="_blank">LOCATION</Link> 
            </Button>
            <Button
              startIcon={<EmailIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              <Link sx={{ color: Colors.white }} href="mailto:nebawale1111@gmail.com" target="_blank">masalmotors@gmail.com</Link> 
            </Button>
          </Stack>
          <Box
            sx={{
              mt: 4,
              color: Colors.black,
            }}
          >
           <Link href="https://www.facebook.com/" target="_blank"><FacebookIcon sx={{ color: Colors.white, mr: 1 }} /></Link> 
           <Link href="https://www.twitter.com/" target="_blank"><TwitterIcon sx={{color: Colors.black, mr: 1 }} /></Link> 
           <Link href="https://www.instagram.com/" target="_blank"><InstagramIcon sx={{color: Colors.white, mr: 1 }} /></Link> 
            
          </Box>
        </Grid>
        <Grid item md={6} lg={3}>
          <FooterTitle id="aboutus" variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Now
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        {/* <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>

            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List> */}
        {/* </Grid> */}
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

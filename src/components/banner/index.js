import { Link, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner";
import { Colors } from "../../styles/theme";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent sx={{ color: Colors.white }}>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">
          MASAL TRADING
        </BannerTitle>

        <BannerDescription variant="subtitle">
        We at Masel Motors are are a reputable business that offers high-quality services. Our business profile description includes our experience and expertise in the industry, as well as our commitment to meeting and exceeding customer expectations. Our goal is to provide sustainable and ethical exports and imports, while also ensuring timely delivery and competitive pricing.
        </BannerDescription>
        <BannerShopButton color="primary"><Link underline="none" sx={{ color: Colors.white }} href="https://goo.gl/maps/jd9tc8bM2SnwHt7VA" target="_blank">GET YOUR CAR NOW</Link> </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}

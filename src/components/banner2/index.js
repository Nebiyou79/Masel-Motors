import { Link, useMediaQuery } from "@mui/material";
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

export default function BannerE() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src="/images/banner/images.jpg" />
      <BannerContent sx={{ color: Colors.white }}>
        <BannerTitle variant="h4">
          MASAL TRADING EXPORTS
        </BannerTitle>
        <BannerDescription variant="subtitle">
          Our Agribusiness product export buisiness specializes in exporing top-quality, sustainablity sourced agricultural products to international markets. We work directly with local farmers and suppliers to ensure that our products are of the highest quality and grown using enviormentally freindly and sustainable farming practices 
        </BannerDescription>
        <BannerShopButton color="primary"><Link underline="none" sx={{ color: Colors.white }} href="https://goo.gl/maps/jd9tc8bM2SnwHt7VA" target="_blank">ORDER YOUR EXPORTS RIGHT NOW</Link> </BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}

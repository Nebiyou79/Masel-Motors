import {
  Link,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/appbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";
import { useUIContext } from "../../context/ui";

export default function AppbarDesktop({ matches }) {
  
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4"><img src="/images/banner/logo192.png" alt="" /></AppbarHeader>
      <MyList type="row">
        <ListItemText><Link href="/" underline="none">Home</Link></ListItemText>
        <ListItemText><Link href="#cars" underline="none">Automobiles</Link></ListItemText>
        <ListItemText><Link href="#fiber" underline="none">Fiber</Link></ListItemText>
        <ListItemText><Link href="#exports"underline="none">Masel Exports</Link></ListItemText>
        <ListItemText><Link href="#aboutus" underline="none">About-Us</Link></ListItemText>
        <ListItemButton onClick={() => setShowSearchBox(true)}>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton>
          </MyList>
    </AppbarContainer>
  );
}

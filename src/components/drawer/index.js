import {
  Divider,
  Drawer,
  Link,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import { useUIContext } from "../../context/ui";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/appbar";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;


export default function AppDrawer() {
  const { drawerOpen, setDrawerOpen } = useUIContext();

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemText><Link href="#cars" >Automobiles</Link></ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemText><Link href="#fiber" >FiberOptics</Link></ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemText><Link href="#exports" >Exports</Link></ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton onClick={() => setDrawerOpen(false)}>
            <ListItemText><Link href="#aboutus" >About Us</Link></ListItemText>
          </ListItemButton>
          <MiddleDivider  />
        </List>
      </Drawer>
    </>
  );
}

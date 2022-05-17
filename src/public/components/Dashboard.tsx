import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import logo from "../assets/logo.svg";
import smlogo from "../assets/favicon-32x32.png";
import LayersIcon from "@mui/icons-material/Layers";
import { makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LogoutIcon from "@mui/icons-material/Logout";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import SmallFirstRow from "./SmFirstRow";
import SmallSecondRow from "./SmSecondRow";
import SmallThirdRow from "./SmThirdRow";
import { Hamburger } from "./Hamburger";

const drawerWidth = 240;

interface DashboardProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const useStyles = makeStyles((theme) => ({
  button: {
    "&:hover": {
      color: "#D3D3D3",
      cursor: "pointer",
    },
  },
  divider: {
    color: "#FFFFF",
  },
  icon: {
    fontSize: "0.2rem",
    marginLeft: "-10px",
  },
}));

export default function Dashboard(props: DashboardProps) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#213d7a", height: "100vh" }}>
      <img
        src={logo}
        alt="Kubeflow logo"
        style={{ marginTop: "14px", marginLeft: "15px", position: "absolute" }}
      />
      <Toolbar />

      <List>
        {["Home"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{ marginBottom: "2px solid white" }}>
              <ListItemIcon style={{ color: "white" }}>
                {index % 2 === 0 ? <HomeIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} style={{ color: "white" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography
        style={{
          borderBottom: "1px solid white",
          width: "90%",
          marginLeft: "11px",
        }}
      ></Typography>
      <List>
        {["GitHub", "Documentation"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} style={{ color: "#B0C4DE" }} />
              <ListItemIcon
                style={{ color: "white", fontSize: 2, marginLeft: "-30px" }}
                className={classes.icon}
              >
                {index % 2 === 0 ? <OpenInNewIcon /> : <OpenInNewIcon />}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Typography
        style={{
          color: "#B0C4DE",
          fontSize: "0.9rem",
          marginTop: "320px",
          marginLeft: "20px",
        }}
      >
        Privacy • Usage Reporting
      </Typography>
      <Typography
        style={{ color: "#E6E6FA", fontSize: "0.8rem", marginLeft: "20px" }}
      >
        <i>build version dev_local</i>
      </Typography>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  
  
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        style={{ backgroundColor: "white" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography
            sx={{
              marginLeft: "-34px",
              zIndex: "1",
              position: "absolute",
              display: { sm: "none" },
            }}
          >
            <Hamburger />
          </Typography>
          <Typography
            sx={{ mr: 2, position: "absolute", display: { sm: "none" } }}
          >
            <img
              src={smlogo}
              alt="Kubeflow logo"
              style={{
                marginTop: "-13px",
                marginLeft: "35px",
                width: "8%",
                position: "fixed",
              }}
            />
            <Typography
              style={{
                color: "#213d7a",
                fontWeight: 600,
                marginLeft: "70px",
                position: "absolute",
                marginTop: "-10px",
              }}
            >
              Kubeflow
            </Typography>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            style={{
              color: "gray",
              marginRight: "5px",
              marginLeft: "10px",
              position: "absolute",
              cursor: "pointer",
            }}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <LayersIcon />
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{
              fontSize: "0.9rem",
              color: "black",
              cursor: "pointer",
              marginLeft: "44px",
            }}
          >
            No Namespaces
          </Typography>
          <Typography
            style={{ marginLeft: "80px" }}
            sx={{ display: { sm: "none" } }}
          >
            <Typography
              style={{
                color: "gray",
                marginRight: "3px",
                marginTop: "-2px",
                marginLeft: "10px",
                position: "absolute",
                cursor: "pointer",
              }}
            >
              <LayersIcon />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{
                fontSize: "0.8rem",
                color: "black",
                cursor: "pointer",
                marginLeft: "38px",
              }}
            >
              No Namespaces
            </Typography>
          </Typography>
          <Typography
            style={{
              color: "gray",
              marginLeft: "-1px",
              marginTop: "3px",
              cursor: "pointer",
            }}
          >
            <ArrowDropDownIcon />
          </Typography>
          <Typography
            style={{ color: "black", marginLeft: "850px", cursor: "pointer" }}
          >
            <LogoutIcon />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{ position: "absolute" }}
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: { xs: "none", sm: "block" },
        }}
        style={{
          backgroundColor: "#F5F5F5",
          height: "89vh",
          width: "100%",
          position: "fixed",
          marginLeft: "190px",
        }}
      >
        <Toolbar />
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: { sm: "none" },
          overflowY: { xs: "scroll" },
          overflowX: { xs: "hidden" },
        }}
        style={{
          backgroundColor: "#F5F5F5",
          height: "89vh",
          width: "100%",
          position: "fixed",
          marginLeft: "-8px",
        }}
      >
        <Toolbar />
        <SmallFirstRow />
        <SmallSecondRow />
        <SmallThirdRow />
      </Box>
    </Box>
  );
}

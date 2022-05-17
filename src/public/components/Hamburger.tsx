import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuList from "@mui/material/MenuList";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Stack from "@mui/material/Stack";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import { Typography } from "@material-ui/core";


export const Hamburger = () => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{
            color: "#213d7a",
            textTransform: "capitalize",
            fontSize: "15.4px",
            fontWeight: 800,
            marginRight: 1,
            marginLeft: 12,
          }}
        >
          <MenuIcon style={{ fontSize: "2rem" }} />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper
                style={{
                  width: "210%",
                  marginTop: "3px",
                  marginLeft: "-10px",
                  backgroundColor: "#213d7a",
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{ color: "white" }}
                  >
                    <div
                      style={{ backgroundColor: "#213d7a", height: "100vh" }}
                    >
                      <List>
                        {["Home"].map((text, index) => (
                          <ListItem key={text} disablePadding>
                            <ListItemButton
                              style={{ marginBottom: "2px solid white" }}
                            >
                              <ListItemIcon
                                style={{ color: "white", marginLeft: "4px" }}
                              >
                                {index % 2 === 0 ? <HomeIcon /> : <MailIcon />}
                              </ListItemIcon>
                              <ListItemText
                                primary={text}
                                style={{ color: "white", marginLeft: "-12px" }}
                              />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                      <Typography
                        style={{
                          borderBottom: "1px solid white",
                          width: "47%",
                          marginLeft: "22px",
                        }}
                      ></Typography>
                      <List>
                        {["GitHub", "Documentation"].map((text, index) => (
                          <ListItem key={text} disablePadding>
                            <ListItemButton>
                              <ListItemText
                                primary={text}
                                style={{
                                  color: "#B0C4DE",
                                  marginLeft: "6px",
                                  position: "absolute",
                                }}
                              />
                              <ListItemIcon
                                style={{
                                  color: "white",
                                  fontSize: 1,
                                  marginLeft: "145px",
                                }}
                              >
                                {index % 2 === 0 ? (
                                  <OpenInNewIcon />
                                ) : (
                                  <OpenInNewIcon />
                                )}
                              </ListItemIcon>
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                      <Typography
                        style={{ display: "flex", marginLeft: "22px" }}
                      >
                        <Typography style={{ color: "#B0C4DE" }}>
                          Logout
                        </Typography>
                        <Typography style={{ marginLeft: "90px" }}>
                          <LogoutIcon />
                        </Typography>
                      </Typography>
                      <Typography
                        style={{
                          color: "#B0C4DE",
                          fontSize: "0.9rem",
                          marginTop: "355px",
                          marginLeft: "23px",
                        }}
                      >
                        Privacy • Usage Reporting
                      </Typography>
                      <Typography
                        style={{
                          color: "#E6E6FA",
                          fontSize: "0.8rem",
                          marginLeft: "23px",
                        }}
                      >
                        <i>build version dev_local</i>
                      </Typography>
                    </div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
};

import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography, makeStyles } from "@material-ui/core";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles((theme) => ({
  custom: {
    "&:hover": {
      color: "white",
      cursor: "pointer",
    },
  },
  note: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-100px",
      width: "115%",
    },
  },
  notetext: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "-100px",
      width: "104%",
      height: "78vh",
    },
  },
  ten: {
    [theme.breakpoints.down("sm")]: {
      width: "78%",
      marginTop: "20px",
      marginLeft: "20px",
    },
  },
  tentext: {
    [theme.breakpoints.down("sm")]: {
      width: "71%",
      marginLeft: "20px",
    },
  },
  training: {
    [theme.breakpoints.down("sm")]: {
      width: "60%",
      paddingLeft: "13px",
      textAlign: "center",
      position: "relative",
    },
  },
  provide: {
    [theme.breakpoints.down("sm")]: {
      paddingTop: "-15px",
      position: "relative",
    },
  },
  del: {
    [theme.breakpoints.down("sm")]: {
      width: "20%",
      position: "relative",
    },
  },
  sor: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginLeft: "0px",
      marginTop: "20px",
    },
  },
  ser: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "-70px",
      position: "relative",
    },
  },
  tom: {
    [theme.breakpoints.down("sm")]: {
      width: "5%",
      position: "relative",
      textAlign: "center",
    },
  },
}));

export default function FirstRow() {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 2, sm: 8, md: 11 }}
      style={{ marginTop: "-40px", marginLeft: "-58px" }}
    >
      <Grid item xs={2} sm={4} md={3} style={{ marginLeft: "120px" }}>
        <Item
          style={{
            backgroundColor: "white",
            borderRadius: "4px",
            height: "5vh",
            width: "102%",
            padding: "23px",
            marginLeft: "-50px",
          }}
          className={classes.notetext}
        >
          <Typography
            style={{
              color: "#645B61",
              fontWeight: "600",
              fontSize: "15px",
              width: "80%",
              marginTop: "-4px",
              marginLeft: "-60px",
            }}
          >
            Quick shortcuts
          </Typography>
          <Typography
            style={{
              borderBottom: "1px solid #D3D3D3",
              width: "116%",
              marginLeft: "-23px",
              marginTop: "18px",
            }}
          ></Typography>
        </Item>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Item
          style={{
            backgroundColor: "white",
            borderRadius: "4px",
            height: "10vh",
            width: "102%",
            padding: "23px",
            marginLeft: "-16px",
          }}
          className={classes.tentext}
        >
          <Typography
            style={{
              color: "#645B61",
              fontWeight: "600",
              fontSize: "15px",
              width: "80%",
              marginTop: "-4px",
              marginLeft: "-50px",
            }}
            className={classes.training}
          >
            Recent Notebooks
          </Typography>
          <Typography
            style={{
              borderBottom: "1px solid #D3D3D3",
              width: "116%",
              marginLeft: "-23px",
              marginTop: "18px",
            }}
          ></Typography>
          <Typography style={{ color: "#999999", width: "100%", fontSize: "0.9rem", marginTop: "5px", marginLeft: "-15px" }}>
            <i>Choose a namespace to see Notebooks</i>
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Item
          style={{
            backgroundColor: "white",
            borderRadius: "4px",
            height: "5vh",
            width: "102%",
            padding: "23px",
            marginLeft: "16px",
          }}
          className={classes.del}
        >
          <Typography
            style={{
              color: "#645B61",
              fontWeight: "600",
              fontSize: "15px",
              width: "80%",
              marginTop: "-4px",
              marginLeft: "-60px",
            }}
            className={classes.ser}
          >
            Documentation
          </Typography>
          <Typography
            style={{
              borderBottom: "1px solid #D3D3D3",
              width: "116%",
              marginLeft: "-23px",
              marginTop: "18px",
            }}
          ></Typography>
        </Item>
      </Grid>
    </Grid>
  );
}

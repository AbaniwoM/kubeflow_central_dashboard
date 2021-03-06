import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Typography } from "@material-ui/core";
import { Contents } from "./Contents";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function SmFirstRow() {
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
            height: "25vh",
            width: "107%",
            padding: "23px",
            marginTop: "20px",
            marginLeft: "-74px",
          }}
        >
          <Typography
            style={{
              color: "#645B61",
              fontWeight: "600",
              fontSize: "15px",
              width: "80%",
              marginTop: "-4px",
              marginLeft: "-62px",
            }}
          >
            Quick shortcuts
          </Typography>
          <Typography
            style={{
              borderBottom: "1px solid #D3D3D3",
              width: "117%",
              marginLeft: "-23px",
              marginTop: "18px",
            }}
          ></Typography>
          <Typography
            style={{
              width: "110%",
              fontSize: "0.9rem",
              marginLeft: "-13px",
              marginTop: "8px",
              height: "55px",
            }}
          >
            <Contents />
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Item
          style={{
            backgroundColor: "white",
            borderRadius: "4px",
            height: "27vh",
            width: "73%",
            padding: "23px",
            marginLeft: "45px",
          }}
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
          >
            Recent Notebooks
          </Typography>
          <Typography
            style={{
              borderBottom: "1px solid #D3D3D3",
              width: "117%",
              marginLeft: "-23px",
              marginTop: "18px",
            }}
          ></Typography>
          <Typography
            style={{
              color: "#999999",
              width: "100%",
              fontSize: "0.7rem",
              marginTop: "5px",
              marginLeft: "-45px",
            }}
          >
            <i>Choose a namespace to see Notebooks</i>
          </Typography>
          <Typography
            style={{
              width: "110%",
              fontSize: "0.9rem",
              marginLeft: "-13px",
              marginTop: "8px",
              height: "55px",
            }}
          >
            <Contents />
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={2} sm={4} md={3}>
        <Item
          style={{
            backgroundColor: "white",
            borderRadius: "4px",
            height: "25vh",
            width: "73%",
            padding: "23px",
            marginLeft: "45px",
          }}
        >
          <Typography
            style={{
              color: "#645B61",
              fontWeight: "600",
              fontSize: "15px",
              width: "81%",
              marginTop: "-4px",
              marginLeft: "-61px",
            }}
          >
            Documentation
          </Typography>
          <Typography
            style={{
              borderBottom: "1px solid #D3D3D3",
              width: "117%",
              marginLeft: "-23px",
              marginTop: "18px",
            }}
          ></Typography>
          <Typography
            style={{
              width: "110%",
              fontSize: "0.9rem",
              marginLeft: "-13px",
              marginTop: "8px",
              height: "55px",
            }}
          >
            <Contents />
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
}

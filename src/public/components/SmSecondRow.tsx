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


export default function SmSecondRow() {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 4 }}
      columns={{ xs: 2, sm: 8, md: 11 }}
      style={{
        marginTop: "-18px",
        marginLeft: "-13px",
      }}
    >
      <Grid item xs={2} sm={4} md={3} style={{ marginLeft: "120px" }}>
        <Item
          style={{
            backgroundColor: "white",
            borderRadius: "4px",
            height: "25vh",
            width: "108%",
            padding: "23px",
            marginLeft: "-120px",
            marginTop: "18px",
          }}
        >
          <Typography
            style={{
              color: "#645B61",
              fontWeight: "600",
              fontSize: "15px",
              width: "80%",
              marginTop: "-4px",
              marginLeft: "-55px",
            }}
          >
            Recent Pipelines
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

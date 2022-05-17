import * as React from 'react';
import Dashboard  from './public/components/Dashboard';
import Typography from "@mui/material/Typography";

export interface IAppProps {
}

export function App (props: IAppProps) {
  return (
    <div>
      <Typography sx={{ overflowX: { xs: "hidden" } }}>
        <Dashboard />
      </Typography>
    </div>
  );
}

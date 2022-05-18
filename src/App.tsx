import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard  from './public/components/Dashboard';

export interface IAppProps {
}

export function App (props: IAppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

import * as React from 'react';
import Dashboard  from './public/components/Dashboard';

export interface IAppProps {
}

export function App (props: IAppProps) {
  return (
    <div>
      <Dashboard />
    </div>
  );
}

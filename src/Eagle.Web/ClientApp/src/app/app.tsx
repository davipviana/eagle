import React from 'react';
import { AppLayout } from 'shared/layout';
import modules from 'modules';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <AppLayout modules={modules} />
    </div>
  );
}

export default App;
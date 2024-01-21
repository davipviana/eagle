import { Route, Routes } from 'react-router-dom';
import { AppLayout } from 'shared/layout';
import modules from 'modules';
import { Module } from 'shared/types';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <AppLayout modules={modules}>
        <Routes>
          {modules.map(({name, path, component: Component}: Module) => (
          <Route key={name} path={path} element={<Component />}/>))}
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
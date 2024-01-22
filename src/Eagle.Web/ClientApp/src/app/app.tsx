import { Route, Routes } from "react-router-dom";
import { AppLayout } from "shared/layout";
import modules from "modules";
import { Module } from "shared/types";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = (): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AppLayout modules={modules}>
        <Routes>
          <Route path="/" element={<div></div>} />
          {modules.map(({ name, path, component: Component }: Module) => (
            <Route key={name} path={path} element={<Component />} />
          ))}
        </Routes>
      </AppLayout>
    </LocalizationProvider>
  );
};

export default App;

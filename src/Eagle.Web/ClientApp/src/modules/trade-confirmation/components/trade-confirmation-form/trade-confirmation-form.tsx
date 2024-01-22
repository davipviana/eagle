import {
  Divider,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import React from "react";
import Button from "shared/components/button";

const TradeConfirmationForm = () => {
  const [operationType, setOperationType] = React.useState("");

  const handleChangeOperationType = (event: SelectChangeEvent) => {
    setOperationType(event.target.value as string);
  };
  return (
    <>
      <Typography variant="h2" component="h3">
        New Trading confirmation
      </Typography>
      <Divider />
      <TextField
        required
        variant="standard"
        id="number"
        label="Number"
        type="number"
      />
      <DatePicker />
      <Divider />
      <Typography variant="h3" component="h4">
        Assets
      </Typography>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={operationType}
        label="C/V"
        onChange={handleChangeOperationType}
      >
        <MenuItem value={"C"}>C</MenuItem>
        <MenuItem value={"V"}>V</MenuItem>
      </Select>
      <TextField
        required
        variant="standard"
        id="asset-code"
        label="Asset Code"
      />
      <TextField
        required
        variant="standard"
        id="amount"
        label="Amount"
        type="number"
      />
      <Button>My Button</Button>
    </>
  );
};

export default TradeConfirmationForm;

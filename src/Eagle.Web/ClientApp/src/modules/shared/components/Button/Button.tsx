import * as React from "react";
import MuiButton from "@mui/material/Button";

interface Props {
    children?: React.ReactNode;
}

export default function Button(props: Props) {
  return <MuiButton variant="contained">{props.children}</MuiButton>;
}

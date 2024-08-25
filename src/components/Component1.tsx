import { FunctionComponent } from "react";
import { Button } from "@mui/material";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <Button
      className={`self-stretch h-[53px] ${className}`}
      disableElevation
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#373737",
        fontSize: "20",
        background: "#89eaef",
        borderRadius: "20px",
        "&:hover": { background: "#89eaef" },
        height: 53,
      }}
    >
      Book
    </Button>
  );
};

export default Component1;

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

export default function ColorSlider() {
  return (
    <Box
      sx={{
        width: 300,
        marginTop: "10px",
        paddingLeft: "5px",
        paddingRight: "5px",
      }}
    >
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        sx={{ color: "white" }}
      />
    </Box>
  );
}

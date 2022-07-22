import React from "react";
import { Box } from "@mui/material";

function EmojiBullet(props) {
  const { emoji, text } = props;

  return (
    <Box className="box-emoji-li" component={"li"}>
      <Box className="box-emoji-span" component={"span"}>
        {emoji}
      </Box>{" "}
      {text}
    </Box>
  );
}

export default EmojiBullet;

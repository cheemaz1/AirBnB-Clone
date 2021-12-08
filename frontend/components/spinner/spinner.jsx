import React from "react";
import LoopIcon from "@mui/icons-material/Loop";
const Spinner = () => (
    <div className="spinner-container">
        <LoopIcon
            className="spinner"
            sx={{ fontSize: 300 }}
        />
    </div>
);

export default Spinner;

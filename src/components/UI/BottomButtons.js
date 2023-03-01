import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavigateBefore } from "@mui/icons-material";
import { useEffect, useState } from "react";

const BottomButtons = () => {
  const [showRightButtonIcon, setShowRightButtonIcon] = useState(true);
  const rightButtonDisabled = false;
  const rightButtonTitle = "Continue";
  const showLeftButton = false;

  useEffect(() => {
    if (rightButtonTitle !== "Continue") {
      setShowRightButtonIcon(false);
      return;
    }
    setShowRightButtonIcon(true);
  }, [rightButtonTitle]);

  return (
    <div
      className="bottom-buttons"
      style={
        showLeftButton
          ? { alignItems: "center" }
          : { flexDirection: "column", alignItems: "flex-end" }
      }
    >
      {showLeftButton && (
        <Button variant="contained">
          <NavigateBefore />
          Back
        </Button>
      )}
      <Button disabled={rightButtonDisabled} variant="contained">
        {rightButtonTitle} {showRightButtonIcon && <NavigateNextIcon />}
      </Button>
    </div>
  );
};

export default BottomButtons;

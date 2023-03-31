import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavigateBefore } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { usePageController } from "../../custom-hooks/usePageController";

const BottomButtons = () => {
  const rightButtonDisabled = useSelector(
    (state) => state.bottomButtons.rightButtonDisabled
  );
  const rightButtonTitle = useSelector(
    (state) => state.bottomButtons.rightButtonTitle
  );
  const showLeftButton = useSelector(
    (state) => state.bottomButtons.showLeftButton
  );
  const showRightButton = useSelector(
    (state) => state.bottomButtons.showRightButton
  );
  const showRightButtonIcon = useSelector(
    (state) => state.bottomButtons.showRightButtonIcon
  );
  const { nextPage, prevPage } = usePageController();

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
        <Button onClick={prevPage} variant="contained">
          <NavigateBefore />
          Back
        </Button>
      )}
      {showRightButton && (
        <Button
          onClick={nextPage}
          disabled={rightButtonDisabled}
          variant="contained"
        >
          {rightButtonTitle} {showRightButtonIcon && <NavigateNextIcon />}
        </Button>
      )}
    </div>
  );
};

export default BottomButtons;

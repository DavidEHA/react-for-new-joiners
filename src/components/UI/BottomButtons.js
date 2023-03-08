import { Button } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { NavigateBefore } from "@mui/icons-material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { bottomButtonsActions } from "../../store/bottom-buttons-slice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

  useEffect(() => {
    if (rightButtonTitle !== "Continue") {
      dispatch(bottomButtonsActions.toggleShowRightButtonIcon(false));
      return;
    }
    dispatch(bottomButtonsActions.toggleShowRightButtonIcon(true));
  }, [rightButtonTitle, dispatch]);

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
      {showRightButton && (
        <Button disabled={rightButtonDisabled} variant="contained">
          {rightButtonTitle} {showRightButtonIcon && <NavigateNextIcon />}
        </Button>
      )}
    </div>
  );
};

export default BottomButtons;

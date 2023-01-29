import React, { ReactNode, useCallback, useEffect } from "react";

import { StyledPopUp, StyledPopUpContent } from "./PopUp-styles";

type PropsTypes = {
  children: ReactNode;
  setActive: (value: boolean) => void;
};

const PopUp = ({ children, setActive }: PropsTypes): JSX.Element => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const handleOnClick = useCallback(() => {
    document.body.style.overflow = "auto";
    setActive(false);
  }, [setActive]);

  return (
    <StyledPopUp onClick={handleOnClick}>
      <StyledPopUpContent onClick={(e) => e.stopPropagation()}>
        {children}
      </StyledPopUpContent>
    </StyledPopUp>
  );
};

export default PopUp;

import React from "react";
import { Zoom } from "./styled";

const ZoomImage = ({ isOpen, onClose, children }: any) => {
  const rootClassNames = isOpen ? "zoom open" : "zoom";

  return (
    <Zoom className={rootClassNames} onClick={onClose}>
      <div className="zoom-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </Zoom>
  );
};

export default ZoomImage;

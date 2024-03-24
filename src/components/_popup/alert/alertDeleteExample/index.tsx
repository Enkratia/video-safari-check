import React from "react";

import { AlertBoilerplatePopup } from "../../../../components";

type AlertPopupProps = {
  onAlertClick: () => void;
};

export const AlertDeleteExamplePopup: React.FC<AlertPopupProps> = ({ onAlertClick }) => {
  const title = "Failed to delete post!";

  return <AlertBoilerplatePopup onAlertClick={onAlertClick} title={title} />;
};

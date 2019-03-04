// import React from "react";
import { toaster } from "evergreen-ui";

export default ({ status, message }) => {
  if (status) {
    toaster.success(message);
  } else {
    toaster.warning(message);
  }
};
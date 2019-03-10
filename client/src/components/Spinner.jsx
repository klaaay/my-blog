import React from "react";

import "styles/spinner.scss";

const Spinner = props => {
  return (
    <div class="lds-facebook">
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;

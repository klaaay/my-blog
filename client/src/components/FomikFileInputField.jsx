import React from "react";
import { FilePicker, Pane, Label, Icon } from "evergreen-ui";

const FomikFileInputField = ({
  name,
  label,
  errors,
  touched,
  placeholder,
  setFieldValue
}) => (
  <div>
    <Pane>
      <Label htmlFor={name} marginBottom={4} display="block">
        {label}
      </Label>
      <React.Fragment>
        <FilePicker
          id={name}
          name={name}
          width={"100%"}
          marginBottom={15}
          placeholder={placeholder}
          onChange={files => {
            setFieldValue(name, files[0]);
          }}
        />
        {touched[name] && errors[name] && (
          <p className="error-message">
            <Icon className="error-icon" icon="error" color="danger" />
            {errors[name]}
          </p>
        )}
      </React.Fragment>
    </Pane>
  </div>
);

export default FomikFileInputField;

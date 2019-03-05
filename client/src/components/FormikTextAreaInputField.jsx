import React from "react";
import { Field } from "formik";
import { Pane, Label, Textarea, Icon } from "evergreen-ui";

const FormikTextAreaInputField = ({
  name,
  label,
  touched,
  errors,
  placeholder
}) => (
  <div>
    <Field name={name}>
      {({ field, form }) => {
        return (
          <Pane>
            <Label htmlFor={name} marginBottom={4} display="block">
              {label}
            </Label>
            <React.Fragment>
              <Textarea
                {...field}
                className="bio-area"
                name={name}
                id={name}
                isInvalid={touched[name] && errors[name] !== undefined}
                placeholder={placeholder}
              />
              {touched[name] && errors[name] && (
                <p className="error-message">
                  <Icon className="error-icon" icon="error" color="danger" />
                  {errors[name]}
                </p>
              )}
            </React.Fragment>
          </Pane>
        );
      }}
    </Field>
  </div>
);

export default FormikTextAreaInputField;

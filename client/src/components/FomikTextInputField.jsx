import React from "react";
import { Field } from "formik";
import { TextInputField } from "evergreen-ui";

const FomikTextInputField = ({
  type,
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
          <TextInputField
            {...field}
            type={type}
            label={label}
            isInvalid={touched[name] && errors[name] !== undefined}
            validationMessage={touched[name] && errors[name]}
            placeholder={placeholder}
          />
        );
      }}
    </Field>
  </div>
);

export default FomikTextInputField;

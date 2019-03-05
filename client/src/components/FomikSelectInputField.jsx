import React from "react";
import { Field } from "formik";
import { SelectField } from "evergreen-ui";

const FomikSelectInputField = ({
  name,
  label,
  touched,
  errors,
  placeholder,
  optionArray
}) => (
  <div>
    <Field name={name}>
      {({ field, form }) => {
        return (
          <SelectField
            {...field}
            width="100%"
            label={label}
            isInvalid={touched.gender && errors.gender !== undefined}
            validationMessage={touched.gender && errors.gender}
            placeholder={placeholder}
          >
            {optionArray.map(({ value, text }) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </SelectField>
        );
      }}
    </Field>
  </div>
);

export default FomikSelectInputField;

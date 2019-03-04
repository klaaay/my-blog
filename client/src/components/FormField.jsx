import React from "react";
import { Field } from "formik";
import {
  FilePicker,
  TextInputField,
  Pane,
  Label,
  Textarea,
  SelectField,
  Icon
} from "evergreen-ui";

const FormField = ({
  classify,
  type,
  name,
  label,
  touched,
  errors,
  placeholder,
  optionArray,
  setFieldValue
}) => {
  switch (classify) {
    case "textInput":
      return (
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
    case "selectInput":
      return (
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
    case "fileInput":
      return (
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
    case "textareaInput":
      return (
        <div>
          <Pane>
            <Label htmlFor={name} marginBottom={4} display="block">
              {label}
            </Label>
            <React.Fragment>
              <Textarea
                className="bio-area"
                name={name}
                id={name}
                isInvalid={touched[name] && errors[name] !== undefined}
                placeholder={placeholder}
                onChange={e => {
                  setFieldValue(name, e.target.value);
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
    default:
      break;
  }
};

export default FormField;

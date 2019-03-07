import React from "react";
import { Formik } from "formik";
import { Button, toaster } from "evergreen-ui";
import * as yup from "yup";
import axios from "axios";
import apis from "message/apis.js";
import formTips from "message/formTips.js";
import getFormData from "utils/getFormData.js";
import asyncToast from "utils/asyncToast.js";

import FomikTextInputField from "components/FomikTextInputField.jsx";
import FomikFileInputField from "components/FomikFileInputField.jsx";
import FomikSelectInputField from "components/FomikSelectInputField.jsx";
import FormikTextAreaInputField from "components/FormikTextAreaInputField.jsx";

import "styles/signup.scss";

const { SIGNUP } = apis;
const {
  UNSAME_PASSWORD,
  REQUIRED_FIELD,
  PASSWORD_LENGTH_LIMITED,
  UNSUPPORTED_TYPE,
  BIO_LENGTH_LIMITED,
  NAME_LEGTH_LIMITED
} = formTips;

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

const Signup = () => {
  return (
    <div id="main_signup">
      <div id="signup-form">
        <Formik
          initialValues={{
            name: "",
            password: "",
            repassword: "",
            gender: "m",
            avatar: null,
            bio: ""
          }}
          onSubmit={async (values, { resetForm, setErrors, setSubmitting }) => {
            console.log(values);
            if (values.password !== values.repassword) {
              toaster.warning(UNSAME_PASSWORD);
              return;
            }
            let SignupInfo = getFormData(values);
            try {
              const res = await axios.post(SIGNUP, SignupInfo);
              console.log(res.data);
              asyncToast(res.data);
              resetForm();
              setSubmitting(false);
            } catch (error) {
              console.log(error);
            }
          }}
          validationSchema={yup.object().shape({
            name: yup
              .string()
              .max(9, NAME_LEGTH_LIMITED)
              .required(REQUIRED_FIELD),
            password: yup
              .string()
              .min(9, PASSWORD_LENGTH_LIMITED)
              .required(REQUIRED_FIELD),
            repassword: yup.string().required(REQUIRED_FIELD),
            gender: yup.string().required(REQUIRED_FIELD),
            avatar: yup
              .mixed()
              .required(REQUIRED_FIELD)
              .test(
                "fileType",
                UNSUPPORTED_TYPE,
                value => value && SUPPORTED_FORMATS.includes(value.type)
              ),
            bio: yup.string().max(50, BIO_LENGTH_LIMITED)
          })}
          render={({
            values,
            errors,
            touched,
            handleSubmit,
            setFieldValue,
            isSubmitting
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <FomikTextInputField
                  type="text"
                  name="name"
                  label="用户名"
                  touched={touched}
                  errors={errors}
                  placeholder="请输入用户名"
                />
                <FomikTextInputField
                  type="password"
                  name="password"
                  label="密码"
                  touched={touched}
                  errors={errors}
                  placeholder="请输入密码"
                />
                <FomikTextInputField
                  type="password"
                  name="repassword"
                  label="确认密码"
                  touched={touched}
                  errors={errors}
                  placeholder="请验证输入密码"
                />
                <FomikSelectInputField
                  name="gender"
                  label="性别"
                  touched={touched}
                  errors={errors}
                  placeholder="请选择性别"
                  optionArray={[
                    { value: "m", text: "男" },
                    { value: "f", text: "女" },
                    { value: "x", text: "不明" }
                  ]}
                />
                <FomikFileInputField
                  name="avatar"
                  label="头像"
                  errors={errors}
                  touched={touched}
                  placeholder="请选择上传的头像"
                  setFieldValue={setFieldValue}
                />
                <FormikTextAreaInputField
                  name="bio"
                  label="个人简介"
                  touched={touched}
                  errors={errors}
                  placeholder="请输入个人简介"
                />
                <Button
                  className="submit-btn"
                  type="submit"
                  appearance="primary"
                  intent="success"
                  disabled={isSubmitting}
                >
                  注册
                </Button>
              </form>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Signup;
import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import { Button } from "evergreen-ui";
import * as yup from "yup";
import axios from "axios";
import apis from "message/apis.js";
import formTips from "message/formTips.js";
import asyncToast from "utils/asyncToast.js";

import MyContext from "context/context";

import "styles/signin.scss";

import FomikTextInputField from "components/FomikTextInputField.jsx";

const { SIGNIN } = apis;
const { REQUIRED_FIELD } = formTips;

const Signin = props => {
  const context = useContext(MyContext);

  useEffect(() => {
    console.log(context);
  });

  const vistorBtnHandler = () => {
    props.history.push("/home");
  };

  const submitBtnHandler = async (
    values,
    { resetForm, setErrors, setSubmitting }
  ) => {
    console.log(values);
    try {
      const res = await axios.post(SIGNIN, values);
      // console.log(res.data);
      asyncToast(res.data);
      context.authAction.login({
        token: res.data.token,
        name: res.data.name,
        avatar: res.data.avatar,
        bio: res.data.bio,
        gender: res.data.gender
      });
      localStorage.setItem("token", res.data.token);
      resetForm();
      setSubmitting(false);
      props.history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const initialVlaue = {
    name: "",
    password: ""
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required(REQUIRED_FIELD),
    password: yup.string().required(REQUIRED_FIELD)
  });

  return (
    <div id="main_signin">
      <div id="signin-form">
        <Formik
          initialValues={initialVlaue}
          onSubmit={submitBtnHandler}
          validationSchema={validationSchema}
          render={({ values, errors, touched, handleSubmit, isSubmitting }) => {
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
                <div className="vistor-btn" onClick={vistorBtnHandler}>
                  游客登录
                </div>

                <Button
                  className="submit-btn"
                  type="submit"
                  appearance="primary"
                  intent="success"
                  disabled={isSubmitting}
                >
                  登录
                </Button>
              </form>
            );
          }}
        />
      </div>
    </div>
  );
};

export default withRouter(Signin);

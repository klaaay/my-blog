export default values => {
  let SignupInfo = new FormData();
  Object.keys(values).forEach(item => {
    SignupInfo.append(item, values[item]);
  });
  return SignupInfo;
};
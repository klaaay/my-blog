export default values => {
  let formInfo = new FormData();
  Object.keys(values).forEach(item => {
    formInfo.append(item, values[item]);
  });
  return formInfo;
};
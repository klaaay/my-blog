export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const login = ({ name, token, avatar, bio, gender }, state) => {
  console.log("Loging in", name, token, avatar, bio, gender);
  // console.log(state);
  let auth = {
    name: name,
    token: token,
    avatar: avatar,
    bio: bio,
    gender: gender
  };
  return {
    ...state,
    auth: auth
    // name: name,
    // token: token,
    // avatar: avatar,
    // bio: bio,
    // gender: gender
  };
};

const logout = state => {
  console.log("Loging out");
  return {
    ...state,
    auth: {}
    // name: "",
    // token: "",
    // avatar: "",
    // bio: "",
    // gender: ""
  };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return login(action.payload, state);
    case LOGOUT:
      return logout(action.payload, state);
    default:
      return state;
  }
};

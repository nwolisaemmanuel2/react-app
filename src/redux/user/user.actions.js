export const UserTypes = {
  SIGN_UP_REQUEST: "SIGN_UP_REQUEST",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_FAIL: "SIGN_UP_FAIL",
  SIGN_IN_REQUEST: "SIGN_IN_REQUEST",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_FAIL: "SIGN_IN_FAIL",
  SIGN_OUT_REQUEST: "SIGN_OUT_REQUEST"
};

export const signUpRequest = (name, email, password) => ({
  type: UserTypes.SIGN_UP_REQUEST,
  payload: { email, name, password }
});

export const signUpSuccess = token => ({
  type: UserTypes.SIGN_UP_SUCCESS,
  payload: token
});

export const signUpFail = error => ({
  type: UserTypes.SIGN_UP_FAIL,
  payload: error
});

export const signInRequest = (email, password) => ({
  type: UserTypes.SIGN_IN_REQUEST,
  payload: { email, password }
});

export const signInSuccess = token => ({
  type: UserTypes.SIGN_IN_SUCCESS,
  payload: token
});

export const signInFail = error => ({
  type: UserTypes.SIGN_IN_FAIL,
  payload: error
});

export const signOutRequest = () => ({
  type: UserTypes.SIGN_OUT_REQUEST
});

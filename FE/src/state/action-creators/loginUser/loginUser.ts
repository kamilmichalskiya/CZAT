export const loginUser = (credentials: any) => {
  return async (dispatch: Dispatch<LoginAction>) => {
    dispatch({
      type: ActionType.LOGIN_USER,
    });

    const requestOptions = {
      method: 'POST',
      body: credentials,
    };
    const response = await fetch('api/login', requestOptions);
    if (response.status === 403 || response.status !== 301) {
      dispatch({
        type: ActionType.LOGIN_USER_ERROR,
        payload: 'Wystąpił problem z żądaniem! Spróbuj ponownie.',
      });
      return;
    }
    dispatch({
      type: ActionType.LOGIN_USER_SUCCESS,
      payload: { login: credentials.login, password: credentials.password, loggedIn: true },
    });
  };
};

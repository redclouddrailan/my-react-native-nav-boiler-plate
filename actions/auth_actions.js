import { AsyncStorage } from 'react-native';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL
} from '.types';
import { Facebook } from 'expo';

//How to use Async Storage:
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const facebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem('fb_token');
  if (token) {
    // Dispatch an action saying FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  }else {
    //Start up FB Login process
    doFacebookLogin(dispatch);
  }
};

const doFacebookLogin = async (dispatch) => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync('1977783379168790',
  {
      permissions: ['public_profile']
  });

  if (type === 'cancel'){
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem('fb_token', token);
  dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: token});
};

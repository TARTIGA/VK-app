import { START, SUCCESS, FAIL } from '../constants/index';
//TODO: Why Login here?
import { LOGIN } from '../constants/actionTypes/user';

import {  KBM_API } from '../constants/api';
import { Dispatch } from 'redux';
import bridge from '@vkontakte/vk-bridge';


export const checkApi = () =>  async(dispatch: Dispatch, store: any) => {
  try {
    dispatch({
      type: `${LOGIN}${START}`,
    });
    const userInfoData = await bridge.send('VKWebAppGetUserInfo');
    dispatch({
      type: `${LOGIN}${SUCCESS}`,
      payload: userInfoData,
    });
  } catch (error) {
    console.error(['getUserInfo ', error]);
    dispatch({
      type: `${LOGIN}${FAIL}`,
    });
  }
};



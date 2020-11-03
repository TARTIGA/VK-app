import { START, SUCCESS, FAIL } from './../constants/index';
import { LOGIN, CHANGE_PROFILE } from './../constants/actionTypes/user';
import { VK_API, KBM_API } from '../constants/api';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import bridge from '@vkontakte/vk-bridge';
import {TAction} from '../reducers/user/index'
import { CHECK_FORM_DATA } from '../constants/actionTypes/user';


// const thunkAction: ActionCreator<ThunkAction<Action, IState, void>> = (
//   text: string
// ) => {
//   return (dispatch: Dispatch<IState>): Action => {
//     return dispatch({
//       type: SET_TEXT,
//       text
//     });
//   };
// };

export const changeProfile = (payload:any) => ( dispatch: Dispatch)=> {
  console.log(['changeProfile payload',payload ]);
  dispatch({
    type: CHANGE_PROFILE,
    payload
  });
}

export const getUserInfo = () =>  async(dispatch: Dispatch, store: any) => {
  console.log(['getUserInfo', ]);
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

export const checkFormData = (payload:any) =>  async(dispatch: Dispatch, store: any) => {
  console.log(['action checkFormData',payload ]);
  try {
    dispatch({
      type: `${CHECK_FORM_DATA}${START}`,
    });
    const checkInfo = await fetch(`${KBM_API}check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        payload
      })
    });
    console.log(['checkInfo',checkInfo ]);
    
    dispatch({
      type: `${CHECK_FORM_DATA}${SUCCESS}`,
      payload: checkInfo,
    });
  } catch (error) {
    console.error(['ERROR CHECK_FORM_DATA ', error]);
    dispatch({
      type: `${CHECK_FORM_DATA}${FAIL}`,
    });
  }
};

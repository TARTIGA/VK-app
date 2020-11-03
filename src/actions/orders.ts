import { Dispatch } from 'redux';
import { START, SUCCESS, FAIL } from './../constants/index';
import { SET_ORDERS } from './../constants/actionTypes/orders';

export const getOrders = () => {
  return function (dispatch: Dispatch) {
    dispatch({
      type: `${SET_ORDERS}${START}`,
    });

    //eslint-disable-next-line no-undef
    // VK.Auth.login((r) => {
    //   if (r.session) {
    //     let username = r.session.user.first_name;

    //     dispatch({
    //       type: `${SET_ORDERS}${SUCCESS}`,
    //       payload: username,
    //     });
    //   } else {
    //     dispatch({
    //       type: `${SET_ORDERS}${FAIL}`,
    //       error: true,
    //       payload: new Error('Ошибка авторизации'),
    //     });
    //   }
    // }, 4); // запрос прав на доступ к photo
  };
};

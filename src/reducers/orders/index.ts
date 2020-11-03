import { START, SUCCESS, FAIL } from '../../constants/index';
import { SET_ORDERS } from '../../constants/actionTypes/orders';
const initialState = {
  items: [],
  error: '',
  isFetching: false,
};

export interface OrderState {
  orders: any;
}

interface SetOrdersStart {
  type: typeof SET_ORDERS;
  payload: any;
}

interface SetOrdersSuccess {
  type: typeof SET_ORDERS;
  payload: any;
}

interface SetOrdersFail {
  type: typeof SET_ORDERS;
  payload: any;
}

type TAction = SetOrdersStart | SetOrdersSuccess | SetOrdersFail;

export const orders = (state = initialState, action: TAction) => {
  switch (action.type) {
    case `${SET_ORDERS}${START}`:
      return { ...state, isFetching: true };

    case `${SET_ORDERS}${SUCCESS}`:
      return { ...state, isFetching: false, items: [...action.payload] };

    case `${SET_ORDERS}${FAIL}`:
      return { ...state, isFetching: false, error: action.payload.message };

    default:
      return state;
  }
};

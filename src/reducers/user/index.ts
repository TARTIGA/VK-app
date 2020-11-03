import { START, SUCCESS, FAIL } from '../../constants/index';
import { LOGIN, CHANGE_PROFILE} from '../../constants/actionTypes/user';
const initialState = {
    id: null,
    first_name: null,
    last_name:null,
    middle_name:null,
    dob: null,
    serial:null,
    sex: null,
    city: null,
    photo_100: null,
    acceptRules:false,
    timezone: null,
    error: '',
    isFetching: false,
};

interface LoginStart {
  type: typeof LOGIN;
  payload: any;
}

interface LoginSuccess {
  type: typeof LOGIN;
  payload: any;
}

interface LoginFail {
  type: typeof LOGIN;
  payload: any;
}

interface ChangeProfile {
  type: typeof CHANGE_PROFILE;
  payload: any;
}

export type TAction = LoginStart | LoginSuccess | LoginFail | ChangeProfile;

export const user = (state = initialState, action: TAction) => {
  switch (action.type) {
    case `${LOGIN}${START}`:
      console.log([`${LOGIN}${START}`]);
      return { ...state, isFetching: true };

    case `${LOGIN}${SUCCESS}`:
      console.log([`${LOGIN}${SUCCESS}`, action.payload]);
      return { ...state, isFetching: false,  ...action.payload };

    case `${LOGIN}${FAIL}`:
      console.log([`${LOGIN}${FAIL}`]);
      return { ...state, isFetching: false, error: action.payload.error_data };

    case `${CHANGE_PROFILE}`: 
    console.log(['CHANGE_PROFILE',action.payload ]);
      return { ...state, ...action.payload};

    default:
      return state;
  }
};

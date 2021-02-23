import {User} from '../models/user.interface';
import { UsersActions} from '../actions/users/users.actions';


export interface UsersState {
  users: User[];
}

const initialState: UsersState = {
  users: []
};

export function usersReducer(state = initialState, action: UsersActions): UsersState {

  switch (action.type) {
    case '[Users] Load users': {
      return {...state};
    }

    case '[Users] Load users success': {
      return {
        users: [...action.payload]
      };
    }

    default: {
      return state;
    }
  }
}

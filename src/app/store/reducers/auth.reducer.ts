

export interface State {
  userName?: string;
  friendlyName?: string;
}

export const initialState: State = {
  userName: null,
  friendlyName: null
};


export const getUserName = (state: State) => 'state.userName';
export const getFriendlyName = (state: State) => 'state.friendlyName';

const CHANGE = 'Main/CHANGE';

export const changeMain = (contents: string) => ({ type: CHANGE, payload: contents });

interface ininialStateType {
  contents: String;
}

const ininialState: ininialStateType = {
  contents: '안녕하세요~',
};

const MainReducer = (state: ininialStateType = ininialState, action: any) => {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        contents: action.payload,
      };

    default:
      return state;
  }
};

export default MainReducer;

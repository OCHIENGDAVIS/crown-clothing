import { sections } from '../../data/sections';

const INITIAL_STATE = {
  directory: sections,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default directoryReducer;

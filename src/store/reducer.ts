import * as actionTypes from "./actionTypes";

const initialState: NotesState = {
  notes: [],
};

const reducer = (state: NotesState = initialState, action: any): NotesState => {
  switch (action.type) {
    case actionTypes.UPDATE_NOTES:
      const updateNotes: NoteType[] = action.updatedNotes;
      return {
        notes: updateNotes,
      };
  }
  return state;
};

export default reducer;

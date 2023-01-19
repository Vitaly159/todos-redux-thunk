import * as actionTypes from "./actionTypes";

export function setNotes(updatedNotes: NoteType[]) {
  const action: UpdatedNotesType = {
    type: actionTypes.UPDATE_NOTES,
    updatedNotes,
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: any) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

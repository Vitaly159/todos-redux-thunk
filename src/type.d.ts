type NoteType = {
  id: string | number;
  text: string;
  completed: boolean;
};

type NotesState = {
  notes: NoteType[]
}

type UpdatedNotesType = {
  type: string;
  updatedNotes: NoteType[];
};

type DispatchType = (args: any) => any;

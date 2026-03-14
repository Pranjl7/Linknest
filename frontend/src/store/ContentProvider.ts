import { create } from "zustand";

type contenttype = {
  question: string | null;
  setQuestion: (data: string) => void;
  model: string | null;
  setModel: (data: string) => void;
  timetaken: string | null;
  setTimetaken: (data: string) => void;
  content: string | null;
  setContent: (data: string) => void;
};

const useContentProvider = create<contenttype>((set) => ({
  question: null,
  setQuestion: (data: string) => set({ question: data }),
  model: null,
  setModel: (data: string) => set({ model: data }),
  timetaken: null,
  setTimetaken: (data: string) => set({ timetaken: data }),
  content: null,
  setContent: (data: string) => set({ content: data }),
}));

export default useContentProvider;

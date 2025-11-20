import { create } from "zustand";

const alarmStore = create((set) => ({
  keywords: ["공모전", "대외활동"],
  rememberCycles: [
    { cycle: "D-1", selected: false },
    { cycle: "D-2", selected: false },
    { cycle: "D-3", selected: false },
    { cycle: "D-4", selected: false },
    { cycle: "D-5", selected: false },
    { cycle: "D-7", selected: false },
    { cycle: "D-14", selected: false },
    { cycle: "D-21", selected: false },
    { cycle: "D-30", selected: false },
  ],
  setKeywords: (keywords) => set({ keywords }),
  addKeyword: (keyword) =>
    set((state) => ({
      keywords: [...state.keywords, keyword],
    })),
  removeKeyword: (keyword) =>
    set((state) => ({
      keywords: state.keywords.filter((k) => k !== keyword),
    })),
  setRememberCycles: (rememberCycles) => set({ rememberCycles }),
}));

export default alarmStore;

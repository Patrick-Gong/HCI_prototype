import { create } from "zustand";

const isNewTopicStore = create((set) => ({
  isNewTopic: false,
  setIsNewTopic: (isNewTopic) => set({ isNewTopic }),
}));

export default isNewTopicStore;

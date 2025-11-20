import { create } from "zustand";
import OLD_DUMMY from "../data/OLD_DUMMY.json";

const recommendedPostStore = create((set) => ({
  recommendedPosts: OLD_DUMMY,
  setRecommendedPosts: (posts) => {
    set({ recommendedPosts: posts });
  },
  toggleSaved: (postId) => {
    set((state) => ({
      recommendedPosts: state.recommendedPosts.map((post) =>
        post.id === postId ? { ...post, saved: !post.saved } : post
      ),
    }));
  },
}));
export default recommendedPostStore;

import empty_saved from "../../assets/empty_saved.svg";
import filled_saved from "../../assets/filled_saved.svg";
import { Link } from "react-router";
import { useMemo } from "react";
import recommendedPostStore from "../../store/recommendedPostStore";

function PostContainer({ post }) {
  const toggleSaved = recommendedPostStore((state) => state.toggleSaved);
  const recommendedPosts = recommendedPostStore(
    (state) => state.recommendedPosts
  );

  // 스토어에서 최신 post 데이터 가져오기
  const currentPost = useMemo(
    () => recommendedPosts.find((p) => p.id === post.id) || post,
    [recommendedPosts, post]
  );

  const handleSavedClick = (e) => {
    e.preventDefault(); // Link 클릭 방지
    e.stopPropagation(); // 이벤트 전파 방지
    toggleSaved(post.id);
    console.log("Post ID:", post.id);
    console.log("업데이트 전:", post.saved);
    console.log("업데이트 후 (예상):", !post.saved);
  };

  return (
    <div
      key={currentPost.id}
      className="w-72 h-72 p-7 bg-linear-to-bl from-stone-50 via-sky-100 to-stone-50 rounded-[10px] relative group flex flex-col justify-end items-start"
    >
      <Link to={`/post/${currentPost.id}`}>
        <div className="w-full h-full p-7 opacity-0 rounded-[10px] transition-all duration-300 hover:bg-black/5 absolute top-0 left-0 group-hover:opacity-40"></div>
      </Link>
      <img
        src={currentPost.saved ? filled_saved : empty_saved}
        alt={currentPost.saved ? "filled_saved.svg" : "empty_saved.svg"}
        className="w-10 h-12 transition-all duration-300 hover:cursor-pointer opacity-0 group-hover:opacity-100 z-30 absolute top-3 right-3"
        onClick={handleSavedClick}
      />
      <Link to={`/post/${currentPost.id}`}>
        <p className="text-2xl text-start font-bold text-black w-[80%] overflow-hidden text-ellipsis line-clamp-2 word-break-keep-all ">
          {currentPost.title}
        </p>
      </Link>
    </div>
  );
}
export default PostContainer;

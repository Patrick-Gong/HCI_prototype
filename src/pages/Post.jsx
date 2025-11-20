import PageLayout from "../components/common/PageLayout";
import arrowLeft from "../assets/post/arrow_left.svg";
import TitleText from "../components/common/TitleText";
import empty_saved from "../assets/empty_saved.svg";
import filled_saved from "../assets/filled_saved.svg";
import recommendedPostStore from "../store/recommendedPostStore";
import { useLocation, useNavigate } from "react-router";
import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Post() {
  const location = useLocation();
  const navigate = useNavigate();
  const recommendedPosts = recommendedPostStore(
    (state) => state.recommendedPosts
  );
  const toggleSaved = recommendedPostStore((state) => state.toggleSaved);

  // 현재 게시물 ID 가져오기
  const postId = parseInt(location.pathname.split("/")[2]);

  // 현재 게시물 찾기
  const currentPost = useMemo(
    () => recommendedPosts.find((post) => post.id === postId),
    [recommendedPosts, postId]
  );

  // 게시물이 없으면 에러 처리
  if (!currentPost) {
    return (
      <PageLayout>
        <div className="h-20" />
        <p className="text-xl">게시물을 찾을 수 없습니다.</p>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="h-20" />
      <div
        className="bg-stone-100 items-center flex gap-3 py-2 px-3 rounded-[20px] cursor-pointer self-start"
        onClick={() => navigate("/")}
      >
        <img src={arrowLeft} alt="arrow_left.svg" className="w-2 h-3" />
        <p className="opacity-50 text-blacktext-sm font-medium">
          목록으로 돌아가기
        </p>
      </div>
      <div className="w-full py-12 mt-3 px-15 flex flex-col bg-linear-to-l from-stone-50 via-white to-neutral-50 rounded-[20px]">
        <div className="flex justify-between items-center">
          <TitleText title={currentPost.title} />
          <img
            src={currentPost.saved ? filled_saved : empty_saved}
            alt="saved.svg"
            className="w-12 h-12 hover:cursor-pointer"
            onClick={() => toggleSaved(postId)}
          />
        </div>
        <div className="whitespace-pre-wrap break-keep py-10 text-start chat-message-container">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {currentPost.content}
          </ReactMarkdown>
        </div>
      </div>
    </PageLayout>
  );
}

export default Post;

import PostContainer from "../../common/PostContainer";
import TitleText from "../../common/TitleText";
import { useEffect } from "react";
import NEW_DUMMY from "../../../data/NEW_DUMMY.json";
import recommendedPostStore from "../../../store/recommendedPostStore";
import isNewTopicStore from "../../../store/isNewTopic";

function RecommendedPosts() {
  const isNewTopic = isNewTopicStore((state) => state.isNewTopic);
  const setRecommendedPosts = recommendedPostStore(
    (state) => state.setRecommendedPosts
  );
  const recommendedPosts = recommendedPostStore(
    (state) => state.recommendedPosts
  );

  // isNewTopic이 true일 때 NEW_DUMMY로 변경
  useEffect(() => {
    if (isNewTopic) {
      setRecommendedPosts(NEW_DUMMY);
    }
  }, [isNewTopic, setRecommendedPosts]);

  return (
    <>
      <TitleText
        title={
          isNewTopic
            ? "최근 관심 있게 본 **장학금** 관련 게시물"
            : "나와 같은 사람들이 자주 본 게시물"
        }
      />
      <div className="grid grid-cols-4 gap-7 pt-9">
        {recommendedPosts.map((post) => (
          <PostContainer key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}

export default RecommendedPosts;

import isNewTopicStore from "../../../store/isNewTopic";
function ChatHeader({ setRecommendedInput }) {
  const recommendedKeywords = [
    "교내 장학금",
    "성적 우수자 장학금",
    "교외 장학금",
    "국가 장학금 신청 기간",
    "학적 변동 사항",
  ];

  const isNewTopic = isNewTopicStore((state) => state.isNewTopic);

  return (
    <div className="flex flex-col justify-between items-center">
      <video autoPlay muted className="w-96 h-50 object-contain">
        <source
          src={isNewTopic ? "/video_3.mp4" : "/video_1.mp4"}
          type="video/mp4"
        />
      </video>
      <p className="text-3xl font-bold text-black">
        {isNewTopic ? "장학금 추천해줄까?" : "무엇이든 물어봐!"}
      </p>
      {isNewTopic ? (
        <div className="flex justify-between gap-3 items-center my-4">
          {recommendedKeywords.map((keyword) => (
            <span
              className="bg-blue-100 px-4 py-2 rounded-[20px] text-lg font-semibold text-blue-400 hover:cursor-pointer"
              key={keyword}
              onClick={() => setRecommendedInput(keyword)}
            >
              {keyword}
            </span>
          ))}
        </div>
      ) : (
        <div className="h-10" />
      )}
    </div>
  );
}
export default ChatHeader;

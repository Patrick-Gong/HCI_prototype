function TitleText({ title }) {
  // **로 감싸진 텍스트를 파싱하여 스타일 적용
  const renderTitle = () => {
    const parts = title.split("**");

    return parts.map((part, index) => {
      // 홀수 인덱스는 **로 감싸진 부분
      if (index % 2 === 1) {
        return (
          <span key={index} className="text-sky-500">
            {part}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <p className="text-3xl font-bold text-black text-left w-full">
      {renderTitle()}
    </p>
  );
}
export default TitleText;

import PageLayout from "../components/common/PageLayout";
import TitleText from "../components/common/TitleText";
import { Link } from "react-router";
import { useState } from "react";
import plus from "../assets/alarm_setting/plus.svg";
import alarmStore from "../store/alarm";

function AlarmSettings() {
  const [keywordInput, setKeywordInput] = useState("");
  const keywords = alarmStore((state) => state.keywords);
  const addKeyword = alarmStore((state) => state.addKeyword);
  const rememberCycles = alarmStore((state) => state.rememberCycles);
  const setRememberCycles = alarmStore((state) => state.setRememberCycles);

  const handleAddKeyword = () => {
    const trimmedKeyword = keywordInput.trim();
    if (trimmedKeyword && !keywords.includes(trimmedKeyword)) {
      addKeyword(trimmedKeyword);
      setKeywordInput(""); // 입력 필드 초기화
    } else if (keywords.includes(trimmedKeyword)) {
      alert("이미 등록된 키워드입니다.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddKeyword();
    }
  };

  const toggleRememberCycle = (cycle) => {
    setRememberCycles(
      rememberCycles.map((c) =>
        c.cycle === cycle.cycle ? { ...c, selected: !c.selected } : c
      )
    );
  };
  return (
    <PageLayout>
      <div className="mt-10" />
      <div className="flex justify-between items-center w-full">
        <TitleText title="알림 설정" />
        <Link
          to="/alarms"
          className="py-2 px-4 w-[6%] bg-sky-500 rounded-[15px] text-white text-base font-semibold"
          onClick={() => alert("저장되었습니다.")}
        >
          저장
        </Link>
      </div>
      <p className="mt-6 opacity-50 self-end text-gray-500 text-base font-medium">
        2025.11.18에 저장되었습니다.
      </p>
      <div className="flex mt-5 gap-2 items-center w-full self-start pl-2">
        <p className="text-black text-[20px] font-bold mr-4">
          알림 받을 키워드
        </p>
        <input
          type="text"
          placeholder="키워드를 입력해주세요"
          value={keywordInput}
          onChange={(e) => setKeywordInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-50 border border-gray-300 rounded-[10px] p-2"
        />
        <img
          src={plus}
          alt="plus.svg"
          className="w-6 h-6 hover:cursor-pointer"
          onClick={handleAddKeyword}
        />
      </div>
      <div className="flex w-full min-h-20 bg-gray-50 rounded-[15px] px-4 py-6 gap-2 mt-4 flex-wrap">
        {keywords.map((keyword) => (
          <div
            key={keyword}
            className="px-3.5 py-1 flex gap-2 bg-[#ecf7ff] rounded-[20px] outline-[0.80px] outline-offset-[-0.80px] outline-[#25a1d2] justify-center items-center text-[#25a1d2]"
          >
            <span>{keyword}</span>
          </div>
        ))}
      </div>
      <p className="mt-5 text-black text-[20px] font-bold self-start pl-2">
        리마인드 알림 주기
      </p>
      <div className="flex w-full h-20 bg-gray-50 rounded-[15px] px-4 py-6 gap-2">
        {rememberCycles.map((cycle) => (
          <p
            key={cycle.cycle}
            onClick={() => toggleRememberCycle(cycle)}
            className={`px-3.5 py-2 flex ${
              cycle.selected
                ? "bg-[#ecf7ff] outline-[0.80px] outline-offset-[-0.80px] outline-[#25a1d2] text-[#25a1d2]"
                : "bg-gray-50 outline-[0.80px] outline-offset-[-0.80px] outline-gray-500 text-gray-500"
            } rounded-[20px] justify-center items-center`}
          >
            {cycle.cycle}
          </p>
        ))}
      </div>
    </PageLayout>
  );
}

export default AlarmSettings;

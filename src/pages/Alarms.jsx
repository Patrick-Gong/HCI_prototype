import PageLayout from "../components/common/PageLayout";
import TitleText from "../components/common/TitleText";
import { Link } from "react-router";

const DUMMY_ALARMS = [
  {
    id: 1,
    postTitle:
      "[중요] 2025-2학기 졸업논문/작품확인서 1차 제출 안내(11/24~11/5까지)",
    alarmText: "저장하신 게시물의 신청 기한이 얼마 남지 않았습니다",
    category: "학사",
    createdAt: "2025-11-01",
    rememberCycle: "D-3",
  },
  {
    id: 2,
    postTitle:
      "[겨울 단기] 프랑스 Université Bordeaux Montaigne International Winter Schoo..",
    alarmText: "작년에 많이 조회한 프로그램 신청이 시작되었어요!",
    category: "국제교류",
    createdAt: "2025-11-10",
    rememberCycle: "",
  },
  {
    id: 3,
    postTitle: "글로벌미디어학부 복수/부전공필수 교과목 변경 관련 안내",
    alarmText: "글로벌미디어학부 학생들에게 지금 핫한 게시물!",
    category: "학사",
    createdAt: "2025-11-03",
    rememberCycle: "",
  },
];

function Alarms() {
  return (
    <PageLayout>
      <div className="mt-10" />
      <div className="flex justify-between items-center w-full">
        <TitleText title="알림" />
        <Link
          to="/alarm-settings"
          className="py-2 px-4 w-[9%] bg-sky-500 rounded-[15px] text-white text-base font-semibold"
        >
          알림 설정
        </Link>
      </div>
      <div className="mt-10 w-full gap-4 flex flex-col">
        {DUMMY_ALARMS.map((alarm) => (
          <div
            key={alarm.id}
            className="flex justify-between items-center bg-sky-50 rounded-[30px] px-6 hover:cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1 mt-3 mb-4">
                <p className="opacity-50 text-start text-black text-xs font-normal">
                  {alarm.postTitle}
                </p>
                <p className="text-start text-black text-base font-semibold">
                  {alarm.alarmText}
                </p>
              </div>
              {alarm.rememberCycle && (
                <div className="px-[10.75px] py-[2.69px] bg-[#ffe8e5] rounded-[13.44px] outline-[0.67px] outline-offset-[-0.67px] outline-[#ffbbb1]">
                  <div className="text-[#ff5736] text-sm font-medium">
                    {alarm.rememberCycle}
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-5 items-center">
              <p className="text-sky-500 text-sm font-medium py-2 px-3.5 bg-sky-200 rounded-[40px]">
                {alarm.category}
              </p>
              <p className="opacity-50 text-black text-base font-normal">
                {alarm.createdAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export default Alarms;

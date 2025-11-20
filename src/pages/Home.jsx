import ChatOnboardingHeader from "../components/feature-specific/home/ChatOnboardingHeader";
import ChatInput from "../components/feature-specific/home/ChatInput";
import RecommendedPosts from "../components/feature-specific/home/RecommendedPosts";
import { useState } from "react";

function Home() {
  const [recommendedInput, setRecommendedInput] = useState("");

  return (
    <main className="mt-14 flex flex-col items-center w-[1260px] px-8">
      <ChatOnboardingHeader setRecommendedInput={setRecommendedInput} />
      <ChatInput recommendedInput={recommendedInput} />
      <div className="mt-40" />
      <RecommendedPosts />
    </main>
  );
}

export default Home;

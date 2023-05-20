import { useEffect, useState } from "react";
import mapImage from "../../assets/vancouver2.png";

function Home() {
  const [text, setText] = useState<string>("");
  console.log(text);
  return (
    <div className="min-h-screen w-full">
      <div className="mt-2">
        <input
          type="text"
          className="h-10 w-full flex-1 rounded-xl border border-gray-400 bg-stone-800 px-5 text-gray-400 shadow focus:border-gray-500 focus:ring-gray-500"
          value={text}
          autoComplete="false"
          placeholder="Ask a question"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="mt-2 w-full">
        <div className="p-10">
          <img src={mapImage} className="flex items-center" />
        </div>
      </div>
    </div>
  );
}

export default Home;

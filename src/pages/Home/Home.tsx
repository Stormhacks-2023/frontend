import { useState } from "react";

function Home() {
  const [text, setText] = useState<string>("");
  console.log(text);
  return (
    <div className="absolute top-20 flex w-full justify-center">
      <div className="mt-2 w-[80%]">
        <input
          type="text"
          className="h-10 w-full flex-1 rounded-xl border border-gray-400 bg-white px-5 text-gray-700 opacity-30 shadow outline-none ring-0 hover:opacity-100 focus:border-0 focus:opacity-100 focus:ring-0"
          value={text}
          autoComplete="false"
          placeholder="Ask a question"
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Home;

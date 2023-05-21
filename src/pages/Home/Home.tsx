import { useState } from "react";
import { useKeyPress } from "../../hooks";
import MountainModal from "./MountainModal";
import Typewriter from "typewriter-effect";
import { useGetMountainByName } from "../../queries";

function Home() {
  const [text, setText] = useState<string>("");
  const isEnterPressed = useKeyPress("Enter");

  const [isMountainModalOpen, setIsMountainModalOpen] = useState(false);

  const { data: mountainListName, isLoading: isMountainListName } =
    useGetMountainByName(text);

  console.log(mountainListName, isMountainListName);

  if (isEnterPressed) {
    console.log(text);
  }

  const openModal = () => {
    setIsMountainModalOpen(true);
  };

  console.log("length", [mountainListName].length);

  return (
    <div className="absolute top-20 flex w-full flex-col items-center">
      <div className="mt-2 w-[80%]">
        <input
          type="text"
          className="h-10 w-full flex-1 rounded-xl border border-gray-400 bg-white px-5 text-gray-700 opacity-70 shadow outline-none ring-0 hover:opacity-100 focus:border-0 focus:opacity-100 focus:ring-0"
          value={text}
          autoComplete="false"
          placeholder="Ask a question"
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="mt-4 grid max-h-[590px] grid-cols-4 gap-2 overflow-y-scroll px-4">
        <div className="bg-white" onClick={openModal}>
          <img src={mountainListName} className="cursor-pointer" />
        </div>
      </div>

      <MountainModal
        isOpen={isMountainModalOpen}
        setIsOpen={setIsMountainModalOpen}
        data={{
          url: { mountainListName },
          text: text,
        }}
      />
    </div>
  );
}

export default Home;

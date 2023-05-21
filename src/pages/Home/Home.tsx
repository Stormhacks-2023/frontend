import { useState } from "react";
import { useKeyPress } from "../../hooks";
import MountainModal from "./MountainModal";
import {
  useGetIFrameList,
  useGetIFrameListByName,
  useGetIFrameListByTopography,
} from "../../queries";

function Home() {
  const [text, setText] = useState<string>("");
  const isEnterPressed = useKeyPress("Enter");

  const [isMountainModalOpen, setIsMountainModalOpen] = useState(false);

  // const { data: iFrameListByName, isLoading: isIFrameListByNameLoading } =
  //   useGetIFrameListByName(text);

  // console.log(iFrameListByName, isIFrameListByNameLoading);

  const { data: iFrameList, isLoading: isIFrameListLoading } = useGetIFrameList();

  console.log(iFrameList);

  // const {
  //   data: iFrameListByTopography,
  //   isLoading: isIFrameListByTopographyLoading,
  // } = useGetIFrameListByTopography(text);

  // console.log(iFrameListByTopography, isIFrameListByTopographyLoading);

  if (isEnterPressed) {
    console.log(text);
  }

  const openModal = () => {
    setIsMountainModalOpen(true);
  };

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
      <div className="mt-4 grid h-[590px] grid-cols-4 gap-2 overflow-y-scroll px-4">
        <div className="bg-white" onClick={openModal}>
          <img
            src="https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-white" onClick={openModal}>
          <img
            src="https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-white" onClick={openModal}>
          <img
            src="https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-white" onClick={openModal}>
          <img
            src="https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-white" onClick={openModal}>
          <img
            src="https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-white" onClick={openModal}>
          <img
            src="https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-white" onClick={openModal}>
          <img
            src="https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-white" onClick={openModal}>
          <img
            src="https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-white" onClick={openModal}>
          <img
            src="https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png"
            className="cursor-pointer"
          />
        </div>
      </div>
      <MountainModal
        isOpen={isMountainModalOpen}
        setIsOpen={setIsMountainModalOpen}
        data={{
          url: "https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/burnaby_mountain.png",
          
        }}
      />
    </div>
  );
}

export default Home;

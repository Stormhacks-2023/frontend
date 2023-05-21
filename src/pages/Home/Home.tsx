import { useState } from "react";
import { useKeyPress } from "../../hooks";
import MountainModal from "./MountainModal";
import { useGetMountainByName } from "../../queries";
import defaultImage from "../../assets/defaultImage.png";
import racoonImage from "../../assets/racoon.jpeg";
import ratingImage from "../../assets/rating.png";
import mountainImage from "../../assets/moutain.png";
import cameraImage from "../../assets/camera.png";
import toast from "react-hot-toast";
import AnimalModal from "./AnimalModal";
import TopologyModal from "./TopologyModal";
import RatingModal from "./RatingModal";

function Home() {
  const [text, setText] = useState<string>("");

  const isEnterPressed = useKeyPress("Enter");

  const [isMountainModalOpen, setIsMountainModalOpen] = useState(false);
  const [isAnimalModalOpen, setIsAnimalModalOpen] = useState(false);
  const [isTopologyModalOpen, setIsTopologyModalOpen] = useState(false);
  const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);

  const { data: mountainName } = useGetMountainByName(text);

  console.log(mountainListName, isMountainListName);

  if (isEnterPressed) {
    console.log(text);
  }

  const warningClick = () => {
    toast.error("Type something in the searchbar");
  };

  const openMountainModal = () => {
    toast.success("Opened modal");
    setIsMountainModalOpen(true);
  };

  const openAnimalModal = () => {
    toast.success("Opened modal");
    setIsAnimalModalOpen(true);
  };

  const openTopologyModal = () => {
    toast.success("Opened modal");
    setIsTopologyModalOpen(true);
  };

  const openRatingModal = () => {
    toast.success("Opened modal");
    setIsRatingModalOpen(true);
  };

  return (
    <div className="absolute top-20 flex w-full flex-col items-center">
      <div className="mt-2 w-[80%]">
        <input
          type="text"
          className="h-10 w-full flex-1 rounded-xl border border-gray-400 bg-white px-5 text-gray-700 opacity-70 shadow outline-none ring-0 hover:opacity-100 focus:border-0 focus:opacity-100 focus:ring-0"
          value={text}
          autoComplete="false"
          placeholder="Type here ..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="mt-6">
        {mountainName ? (
          <div className="grid grid-cols-2 gap-5">
            <div onClick={openMountainModal} className="cursor-pointer ">
              <img
                src={cameraImage}
                className="h-[300px] w-[400px] rounded-xl shadow-xl"
              />
            </div>
            <div
              onClick={openTopologyModal}
              className="cursor-pointer rounded-xl shadow-xl"
            >
              <img
                src={mountainImage}
                className="h-[300px] w-[400px] rounded-xl shadow-xl"
              />
            </div>
            <div
              onClick={openAnimalModal}
              className="cursor-pointer rounded-xl shadow-xl"
            >
              <img
                src={racoonImage}
                className="h-[300px] w-[400px] rounded-xl shadow-xl"
              />
            </div>
            <div
              onClick={openRatingModal}
              className="cursor-pointer rounded-xl shadow-xl"
            >
              <img
                src={ratingImage}
                className="h-[300px] w-[400px] rounded-xl shadow-xl"
              />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5">
            <div onClick={warningClick} className="cursor-pointer ">
              <img
                src={defaultImage}
                className="h-[300px] w-[400px] rounded-xl shadow-xl"
              />
            </div>
            <div
              onClick={warningClick}
              className="cursor-pointer rounded-xl shadow-xl"
            >
              <img
                src={defaultImage}
                className="h-[300px] w-[400px] rounded-xl shadow-xl"
              />
            </div>
            <div
              onClick={warningClick}
              className="cursor-pointer rounded-xl shadow-xl"
            >
              <img
                src={defaultImage}
                className="h-[300px] w-[400px] rounded-xl shadow-xl"
              />
            </div>
            <div
              onClick={warningClick}
              className="cursor-pointer rounded-xl shadow-xl"
            >
              <img
                src={defaultImage}
                className="h-[300px] w-[400px] rounded-xl shadow-xl"
              />
            </div>
          </div>
        )}
      </div>

      <MountainModal
        isOpen={isMountainModalOpen}
        setIsOpen={setIsMountainModalOpen}
        data={{
          text: text,
        }}
      />
      <AnimalModal
        isOpen={isAnimalModalOpen}
        setIsOpen={setIsAnimalModalOpen}
        data={{ text: text }}
      />
      <TopologyModal
        isOpen={isTopologyModalOpen}
        setIsOpen={setIsTopologyModalOpen}
        data={{
          url: `https://stormhacks-2023-t5ql44yo2q-uw.a.run.app/images/${text}.png`,
          text: text,
        }}
      />
      <RatingModal
        isOpen={isRatingModalOpen}
        setIsOpen={setIsRatingModalOpen}
        data={{ text: text }}
      />
    </div>
  );
}

export default Home;

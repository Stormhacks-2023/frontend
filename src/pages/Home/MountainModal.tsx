import { Dialog, Transition } from "@headlessui/react";
import { CSSProperties, Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useGetIFrameList } from "../../queries";
import { useGetAnimalListByMoutain } from "../../queries/AnimalsQueries";

interface IMountainDataProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: any;
}

function MountainModal({ isOpen, setIsOpen, data }: IMountainDataProps) {
  const closeModal = () => {
    setIsOpen(false);
  };

  const { data: iFrameList = [], isLoading: isIFrameListLoading } =
    useGetIFrameList();

  const { data: animalListByMountain, isLoading: isAnimalListByMountain } =
    useGetAnimalListByMoutain("surrey_mountain");

  console.log(animalListByMountain, isAnimalListByMountain);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-10 text-center sm:items-center sm:p-3">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative flex w-[70%] transform flex-col space-x-3 overflow-hidden bg-white px-4 pb-4 pt-5 shadow-xl transition-all sm:flex-row">
                <div className="flex w-full flex-col sm:mt-0 sm:text-left">
                  <div>
                    <Dialog.Title
                      as="h3"
                      className="flex w-full flex-row items-center justify-between text-lg font-medium leading-6 text-gray-900"
                    >
                      <p className="bold">Mountain Details</p>
                      <XMarkIcon
                        className="h-7 w-7 transition-all delay-150 hover:rotate-90"
                        onClick={closeModal}
                      />
                    </Dialog.Title>

                    <div className="grid grid-cols-2 justify-center">
                      <img src={data.url}></img>
                      <div className="hidden max-h-[400px] overflow-y-scroll md:block">
                        {Object.keys(iFrameList).map((item) => (
                          <div key={`${iFrameList[item]?.id}`} className="mb-2 h-[60%]">
                            <iframe className="w-[90%] h-[100%]"
                              src={
                                `https://api.echo3d.com/webar?secKey=Izkby9ofQngS4y0HofpxZOAJ&key=wandering-tooth-7184&entry=` +
                                `${iFrameList[item]?.id}`
                              }
                            ></iframe>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default MountainModal;

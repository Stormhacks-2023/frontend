import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useGetAnimalListByMoutain, useGetIFrameList } from "../../queries";
import { getAnimalsByMountain } from "../../services";

interface IAnimalDataProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: any;
}

function AnimalModal({ isOpen, setIsOpen, data }: IAnimalDataProps) {
  const closeModal = () => {
    setIsOpen(false);
  };

  const { data: iFrameList = [] } = useGetIFrameList();

  const { data: animalListByMountain } = useGetAnimalListByMoutain(data.text);



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
                      <p className="bold">Animal Details</p>
                      <XMarkIcon
                        className="h-7 w-7 transition-all delay-150 hover:rotate-90"
                        onClick={closeModal}
                      />
                    </Dialog.Title>

                    <div className="grid grid-cols-2 justify-center">
                      <div className="overflow-y-scroll">
                        {animalListByMountain?.map((animal, index) => (
                        <div key={index}>
                          <b>{animal.name}</b>
                          <p>{animal.info}</p>
                        </div>
                        ))}
                      </div>
                      <div className="hidden max-h-[400px] overflow-y-scroll md:block">
                        {Object.keys(iFrameList)?.map((item) => (
                          <div key={`${iFrameList[item]?.id}`}>
                            <iframe className=" mb-5"
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

export default AnimalModal;

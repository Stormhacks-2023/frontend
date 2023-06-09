import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import {
  useGetMountainImageByName,
  useGetMountainInfoByName,
} from "../../queries";

interface IMountainDataProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: any;
}

function MountainModal({ isOpen, setIsOpen, data }: IMountainDataProps) {
  const { data: mountainInfo } = useGetMountainInfoByName(data.text);
  console.log(
    "🚀 ~ file: MountainModal.tsx:17 ~ MountainModal ~ mountainInfo:",
    mountainInfo
  );
  const { data: mountainImage } = useGetMountainImageByName(data.text);
  console.log(
    "🚀 ~ file: MountainModal.tsx:19 ~ MountainModal ~ mountainImage:",
    mountainImage
  );

  const closeModal = () => {
    setIsOpen(false);
  };

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
              <Dialog.Panel className="relative flex w-[70%] transform flex-col space-x-3 overflow-hidden rounded-xl bg-white px-4 pb-4 pt-5 shadow-xl transition-all sm:flex-row">
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
                  </div>
                  <div>
                    <img src={mountainImage?.data} className="w-50 h-50" />
                    <p className="text-black">{mountainInfo?.data}</p>
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

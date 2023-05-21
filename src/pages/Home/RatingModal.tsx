import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useGetRatingOfMountain } from "../../queries/RatingQueries";
import { Formik } from "formik";

interface IRatingDataProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  data: any;
}

function convertString(str: string): string {
  const lowerCaseStr = str.toLowerCase();
  const replacedStr = lowerCaseStr.replace(/\s+/g, "_");
  return replacedStr;
}

function RatingModal({ isOpen, setIsOpen, data }: IRatingDataProps) {
  const { data: ratingList } = useGetRatingOfMountain(convertString(data.text));

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{ name: "", text: "", score: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        resetForm,
        setFieldValue,
        /* and other goodies */
      }) => (
        <Transition.Root show={isOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50"
            onClose={() => {
              setIsOpen(false);
              resetForm();
            }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <form
              className="fixed inset-0 z-10 overflow-y-auto"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
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
                          <p className="bold">Rating Details</p>
                          <XMarkIcon
                            className="h-7 w-7 transition-all delay-150 hover:rotate-90"
                            onClick={closeModal}
                          />
                        </Dialog.Title>
                      </div>

                      <div className="flex max-h-[400px] flex-col">
                        <p>Rating</p>
                        <div className="mt-1 overflow-y-scroll">
                          {ratingList?.map((rating) => {
                            return (
                              <div
                                id={`${rating?.name} + ${rating?.score}`}
                                className="block bg-white shadow"
                              >
                                <p className="text-black">{rating?.name}</p>
                                <p className="text-black">{rating?.score}</p>
                                <p className="text-black">{rating?.text}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </form>
          </Dialog>
        </Transition.Root>
      )}
    </Formik>
  );
}

export default RatingModal;

import { ModalCrossIcon, WarningIcon } from "../SVG";

interface ModalProps {
  showModal: boolean;
  modalText: string;
  closeModal: () => void;
  handleYes: () => void;
}
const Modal: React.FC<ModalProps> = ({
  showModal,
  modalText,
  closeModal,
  handleYes,
}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50   p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full flex justify-center items-center bg-[#a49f9f79] ${
          showModal ? "block" : "hidden"
        }`}
      >
        <div className="relative w-full max-w-md max-h-full ">
          <div className="relative rounded-lg shadow bg-gray-700">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
              data-modal-hide="popup-modal"
            >
              <ModalCrossIcon />
            </button>
            <div className="p-6 text-center">
              <WarningIcon />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {modalText}
              </h3>
              <button
                onClick={handleYes}
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Yes, I'm sure
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="focus:ring-4 focus:outline-none  rounded-lg border  text-sm font-medium px-5 py-2.5  focus:z-10 bg-gray-700 text-gray-300 border-gray-500 hover:text-white hover:bg-gray-600 focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

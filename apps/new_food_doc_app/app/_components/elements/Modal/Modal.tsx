interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const Modal = (props: ModalProps) => {
  if (!props.isOpen) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative z-50 bg-black p-6 rounded-lg flex flex-col items-center justify-center">
        <p className="mb-4">{props.message}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={props.onClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Modal;

import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';

const Model = () => {
  const { isModelOpen, closeModal } = useGlobalContext();
  return (
    <div className={isModelOpen ? 'model-overlay show-modal' : 'model-overlay'}>
      <div className="model-container">
        <h3>model content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Model;

import React from 'react';

interface TeamRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TeamRegistrationModal: React.FC<TeamRegistrationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal">
      {/* Add your modal content here */}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TeamRegistrationModal;

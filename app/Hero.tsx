import React, { useState } from "react";
//import TeamRegistrationModal from "./components/TeamRegistrationModal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* ...existing hero content... */}
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded font-bold hover:bg-blue-700"
        onClick={handleOpenModal}
      >
        Register Now
      </button>
      <TeamRegistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Hero;

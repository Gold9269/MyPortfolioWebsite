import { useEffect } from "react";

const ResumeModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("cursor-disabled");

    return () => {
      document.body.classList.remove("cursor-disabled");
    };
  }, []);

  return (
    <div className="resume-modal">
      <div className="resume-content">
        <button className="resume-close" onClick={onClose}>✖</button>
        <embed src="/assets/Nishant.cv.pdf" type="application/pdf" className="resume-pdf" />
      </div>
    </div>
  );
};

export default ResumeModal;


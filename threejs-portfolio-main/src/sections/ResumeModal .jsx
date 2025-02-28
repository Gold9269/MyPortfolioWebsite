import { useEffect } from "react";

const ResumeModal = ({ onClose }) => {
  useEffect(() => {
    // Store original overflow setting
    const originalStyle = window.getComputedStyle(document.body).overflow;
    
    // Disable scrolling on the main body
    document.body.style.overflow = 'hidden';
    
    // Add cursor-disabled class to body when modal opens
    document.body.classList.add("cursor-disabled");
    
    // Force any custom cursor components to update
    const event = new Event('mousemove');
    document.dispatchEvent(event);
    
    return () => {
      // Restore original overflow setting
      document.body.style.overflow = originalStyle;
      
      // Remove cursor-disabled class when modal closes
      document.body.classList.remove("cursor-disabled");
      
      // Force custom cursor to reappear
      setTimeout(() => {
        const event = new Event('mousemove');
        document.dispatchEvent(event);
      }, 50);
    };
  }, []);

  // Prevent wheel events from propagating to parent
  const handleWheel = (e) => {
    // Check if we're at the top or bottom of the PDF viewer
    const element = e.currentTarget;
    const isAtTop = element.scrollTop === 0;
    const isAtBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
    
    // Only prevent default when at the boundaries to avoid interfering with PDF scrolling
    if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
  };

  return (
    <div 
      className="resume-modal" 
      onClick={(e) => {
        // Close modal when clicking outside the content area
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="resume-content" 
        onWheel={handleWheel}
      >
        <button className="resume-close" onClick={onClose}>✖</button>
        <embed 
          src="/assets/Nishant.cv.pdf" 
          type="application/pdf" 
          className="resume-pdf" 
        />
      </div>
    </div>
  );
};

export default ResumeModal;
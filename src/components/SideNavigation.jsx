
import { useEffect, useRef, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "writing", label: "Writing" },
];

const ITEM_HEIGHT = 48;
const POPUP_HEIGHT = 192;
const PADDING = (POPUP_HEIGHT - ITEM_HEIGHT) / 2;

export default function SideNavigation({ activeSection = "home" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const pickerRef = useRef(null);
  const timerRef = useRef(null);
  const dragRef = useRef({
    active: false,
    startY: 0,
    startScrollTop: 0,
  });

  const currentIndex = Math.max(
    0,
    sections.findIndex((section) => section.id === activeSection)
  );

  useEffect(() => {
    if (!isOpen || !pickerRef.current) return;

    const picker = pickerRef.current;

    requestAnimationFrame(() => {
      picker.scrollTop = currentIndex * ITEM_HEIGHT;
      setSelectedIndex(currentIndex);
    });
  }, [isOpen, currentIndex]);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const navigateToSection = (index) => {
    const section = sections[index];
    if (!section) return;

    setSelectedIndex(index);

    document.getElementById(section.id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${section.id}`);
  };

  const handleScroll = () => {
    if (dragRef.current.active) return;

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (!pickerRef.current) return;

      const index = Math.max(
        0,
        Math.min(
          sections.length - 1,
          Math.round(pickerRef.current.scrollTop / ITEM_HEIGHT)
        )
      );

      pickerRef.current.scrollTo({
        top: index * ITEM_HEIGHT,
        behavior: "smooth",
      });

      navigateToSection(index);
    }, 180);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragRef.current = {
      active: true,
      startY: event.clientY,
      startScrollTop: pickerRef.current.scrollTop,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
    clearTimeout(timerRef.current);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current.active || !pickerRef.current) return;

    const distance = event.clientY - dragRef.current.startY;

    pickerRef.current.scrollTop =
      dragRef.current.startScrollTop - distance;
  };

  const handlePointerUp = () => {
    if (!dragRef.current.active) return;

    dragRef.current.active = false;
    handleScroll();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".section-nav-picker")) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="section-nav-picker">
      <button
        type="button"
        className="section-picker-trigger"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-expanded={isOpen}
      >
        <span>{String(currentIndex + 1).padStart(2, "0")}</span>
        <span className="section-picker-arrow">
          {isOpen ? "⌃" : "⌄"}
        </span>
      </button>

      {isOpen && (
        <div className="section-picker-popup">
          <div className="section-picker-wheel">
            <div className="picker-spacer" />

            <div
              ref={pickerRef}
              className="picker-wheel-list"
              onScroll={handleScroll}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
            >
              <div className="picker-spacer" />

              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`picker-wheel-item ${
                    selectedIndex === index ? "selected" : ""
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              ))}

              <div className="picker-spacer" />
            </div>

            <div className="picker-selection-indicator" />
          </div>
        </div>
      )}
    </div>
  );
}

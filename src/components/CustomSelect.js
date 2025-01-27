import { useState, useEffect, useRef } from "react";
import CustomPanel from "./CustomPanel";

const CustomSelect = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handler = (e) => {
      if (!divEl.current) return;
      if (!divEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.addEventListener("click", handler);
    };
  }, []);

  const handelOnClick = (value) => {
    setIsOpen(false);
    onChange(value);
  };

  const renderOptions = options.map((option) => {
    return (
      <div
        onClick={() => handelOnClick(option)}
        key={option.value}
        className="select-list"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="position-relative" ref={divEl}>
      <div onClick={handelClick}>
        <CustomPanel className={""}>
          {value?.label || "Matrimony profile for"}
        </CustomPanel>
        {isOpen && (
          <CustomPanel
            className={"w-100 position-absolute mt-1 custom-select-wrapper"}
          >
            {renderOptions}
          </CustomPanel>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;

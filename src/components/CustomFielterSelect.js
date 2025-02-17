import { useState, useEffect, useRef } from "react";
import CustomFilterPanel from "./CustomFilterPanel";

const CustomFilterSelect = ({ options, value, onChange }) => {
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
        className="select-filter-list"
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="position-relative" ref={divEl}>
      <div onClick={handelClick}>
        <CustomFilterPanel className={""}>
          {value?.label || "Matrimony profile for"}
        </CustomFilterPanel>
        {isOpen && (
          <CustomFilterPanel
            className={
              "w-100 position-absolute mt-1 custom-filter-select-wrapper"
            }
          >
            {renderOptions}
          </CustomFilterPanel>
        )}
      </div>
    </div>
  );
};

export default CustomFilterSelect;

import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActiveSort } from "../redux/slices/filterSlice.js";

const Sort = ({ activeSort }: { activeSort: number }) => {
  const dispatch = useDispatch();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const sortList = ["популярности", "↑ цене", "↓ цене", "алфавиту"];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsOpenPopup(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d={
              isOpenPopup
                ? "M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                : "M0 0C0.16927 0.061849 0.31576 0.000000 0.43945 0.000000C0.56315 0.000000 0.625 0.000000 0.625 0H9.375C9.625 0 9.56315 0.000000 9.43945 0.000000C9.31576 0.000000 9.16927 0.061849 9.00000 0.000000L5.00000 4.56055C4.68424 4.63073 4.53073 4.56055 4.36055 4.56055L0.36055 0.36055C0.28424 0.28424 0.23073 0.26055 0.16055 0.26055C0.09055 0.26055 0.00000 0.28424 0.00000 0.36055Z"
            }
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setIsOpenPopup(!isOpenPopup)}>
          {sortList[activeSort]}
        </span>
      </div>
      <div className={`sort__popup ${isOpenPopup ? "open" : ""}`}>
        <ul>
          {sortList.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                dispatch(setActiveSort(index));
                setIsOpenPopup(false);
              }}
              className={activeSort === index ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;

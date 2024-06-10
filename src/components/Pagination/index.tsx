import React from "react";
import styles from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  onChangePage: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={8}
      pageCount={2}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

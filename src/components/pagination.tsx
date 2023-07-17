import React from "react";
import styles from "./pagination.module.scss";
import cx from "classnames";

interface PaginationProps {
  count: number;
  page: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ count = 80, page, setPage }: PaginationProps) => {
  const pagesCount = Math.floor(count / 10);
  const pages = [...Array(pagesCount)];

  const isActive = (index: number) => page === index + 1;

  const handleDecrease = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleIncrease = () => {
    if (page < pagesCount) {
      setPage(page + 1);
    }
  };

  const handleClick = (index: number) => {
    setPage(index + 1);
  };

  return (
    pagesCount > 0 && (
      <div className={styles.pagination}>
        <button
          disabled={page === 1}
          onClick={handleDecrease}
          className={styles.pagination__button}
        >
          &laquo;
        </button>
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={cx(styles.pagination__button, {
              [styles["pagination__button--active"]]: isActive(index),
            })}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={page === pagesCount}
          onClick={handleIncrease}
          className={styles.pagination__button}
        >
          &raquo;
        </button>
      </div>
    )
  );
};

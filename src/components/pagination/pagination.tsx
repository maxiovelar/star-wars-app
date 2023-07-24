import React, { useEffect } from "react";
import styles from "./pagination.module.scss";
import cx from "classnames";
import Link from "next/link";
import { useStore } from "../../hooks/useStore";
import { type PaginationProps } from "../../../types";

export const Pagination = ({ count = 80, collection }: PaginationProps) => {
  const { currentPage, setCurrentPage } = useStore();
  const pagesCount = Math.floor(count / 10);
  const pages = [...Array(pagesCount)];

  const isActive = (index: number) => currentPage === index + 1;

  useEffect(() => {
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collection]);

  const handleDecrease = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleIncrease = () => {
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleClick = (index: number) => {
    setCurrentPage(index + 1);
  };

  return (
    pagesCount > 0 && (
      <div className={styles.pagination}>
        <Link
          data-testid="pagination-button-decrease"
          href={{
            pathname: `${collection}`,
            query: { page: currentPage - 1 },
          }}
          onClick={handleDecrease}
          className={cx(styles.pagination__link, {
            [styles["pagination__link--disabled"]]: currentPage === 1,
          })}
        >
          &laquo;
        </Link>
        {pages.map((_, index) => (
          <Link
            key={index}
            data-testid="pagination-button"
            href={{
              pathname: `${collection}`,
              query: { page: index + 1 },
            }}
            onClick={() => handleClick(index)}
            className={cx(styles.pagination__link, {
              [styles["pagination__link--active"]]: isActive(index),
            })}
          >
            {index + 1}
          </Link>
        ))}
        <Link
          data-testid="pagination-button-increase"
          href={{
            pathname: `${collection}`,
            query: { page: currentPage + 1 },
          }}
          onClick={handleIncrease}
          className={cx(styles.pagination__link, {
            [styles["pagination__link--disabled"]]: currentPage === pagesCount,
          })}
        >
          &raquo;
        </Link>
      </div>
    )
  );
};

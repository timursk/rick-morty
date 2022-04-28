import React, { MouseEvent, useCallback, useContext, useEffect, useState } from 'react';
import { createPages } from '../../utils/utils';
import AppContext from '../../store/store';
import { actionTypes } from '../../types/store/actionTypes';
import './Pagination.css';

const Pagination = () => {
  const { state, dispatch } = useContext(AppContext);
  const { currentPage, totalPagesCount, totalApiPagesCount, searchValue } = state.mainPage;

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);

  useEffect(() => {
    setPageNumbers(createPages(totalPagesCount || totalApiPagesCount, currentPage));
  }, [totalApiPagesCount, totalPagesCount, currentPage, searchValue]);

  const handleBack = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      const number = currentPage - 1 || 1;
      dispatch({ type: actionTypes.CHANGE_PAGE, payload: number });
    },
    [currentPage, dispatch]
  );

  const handleNext = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      const number =
        currentPage === (totalPagesCount || totalApiPagesCount) ? currentPage : currentPage + 1;
      dispatch({ type: actionTypes.CHANGE_PAGE, payload: number });
    },
    [currentPage, dispatch, totalApiPagesCount, totalPagesCount]
  );

  const handleLinkClick = useCallback(
    (e: MouseEvent, number: number) => {
      e.preventDefault();
      dispatch({ type: actionTypes.CHANGE_PAGE, payload: number });
    },
    [dispatch]
  );

  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <a href="" className="page-link" onClick={handleBack}>
            {'<'}
          </a>
        </li>
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                href=""
                className={`page-link ${number === currentPage ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, number)}
              >
                {number}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a href="" className="page-link" onClick={handleNext}>
            {'>'}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

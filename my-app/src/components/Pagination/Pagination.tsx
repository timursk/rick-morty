import React, { Dispatch, MouseEvent, SetStateAction } from 'react';
import paginationInfo from '../../types/paginationInfo';
import { ApiMaxCards } from '../../utils/constants';
import { reducePages } from '../../utils/utils';
import './Pagination.css';

type Props = {
  paginationInfo: paginationInfo;
  cardsPerPage: number;
  currentPage: number;
  paginate: (number: number) => void;
  apiPage: number;
  setApiPage: Dispatch<SetStateAction<number>>;
  currentLink: string;
  setCurrentLink: Dispatch<SetStateAction<string>>;
};

export type pageNumbers = {
  number: number;
  linkApiPage: number;
};

const Pagination = (props: Props) => {
  const {
    paginationInfo,
    cardsPerPage,
    paginate,
    currentPage,
    apiPage,
    setApiPage,
    currentLink,
    setCurrentLink,
  } = props;
  const pageNumbers: pageNumbers[] = [];
  const divider = ApiMaxCards / cardsPerPage;
  let linkApiPage = 0;

  if (!paginationInfo) {
    return null;
  }

  for (let i = 1; i <= paginationInfo.pages; i++) {
    if ((i - 1) % divider === 0) {
      linkApiPage++;
    }
    pageNumbers.push({ number: i, linkApiPage });
  }

  const checkLinkApi = (number: number) => {
    const { linkApiPage } = pageNumbers[number - 1];
    if (linkApiPage !== apiPage) {
      setApiPage(linkApiPage);
    }
  };

  const handleBack = (e: MouseEvent) => {
    e.preventDefault();
    const page = currentPage > 1 ? currentPage - 1 : currentPage;
    const link = paginationInfo.prev ? paginationInfo.prev : currentLink;

    checkLinkApi(page);
    setCurrentLink(link);
    paginate(page);
  };

  const handleNext = (e: MouseEvent) => {
    e.preventDefault();
    const page = currentPage < paginationInfo.pages ? currentPage + 1 : currentPage;
    const link = paginationInfo.next ? paginationInfo.next : currentLink;

    checkLinkApi(page);
    setCurrentLink(link);
    paginate(page);
  };

  const handleLinkClick = (e: MouseEvent, number: number) => {
    e.preventDefault();
    const link = currentLink.replace(/page=[0-9]{1,}/, `page=${number}`);

    checkLinkApi(number);
    setCurrentLink(link);
    paginate(number);
  };

  const shortPageNumbers = reducePages(pageNumbers, currentPage);

  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <a
            href=""
            className="page-link"
            onClick={(e) => {
              handleBack(e);
            }}
          >
            {'<'}
          </a>
        </li>
        {shortPageNumbers.map((item) => {
          const { number } = item;
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
          <a
            href=""
            className="page-link"
            onClick={(e) => {
              handleNext(e);
            }}
          >
            {'>'}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;

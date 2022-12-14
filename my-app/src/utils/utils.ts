import { Character } from '../types/apiTypes/character';
import sortTypes from '../types/store/sortTypes';
import { pageNumbers } from '../types/switch/pageNumbers';

export const random = (min: number, max: number) => {
  return min + Math.floor(Math.random() * (max - min + 1));
};

export const isAdult = (date: string) => {
  const now = new Date().valueOf();
  const picked = new Date(date).valueOf();
  const years = Math.floor((now - picked) / 1000 / 60 / 60 / 24 / 365);
  const isAdult = years >= 18 && years <= 100;
  return isAdult;
};

export const sortByType = (sort: sortTypes, data: Character[]) => {
  switch (sort) {
    case sortTypes.DEFAULT: {
      return data;
    }
    case sortTypes.NAME: {
      const arr = data.slice();
      arr.sort((a, b) => a.name.localeCompare(b.name));
      return arr;
    }
    case sortTypes.PLACE: {
      const arr = data.slice();
      arr.sort((a, b) => a.location.name.localeCompare(b.location.name));
      return arr;
    }
    case sortTypes.GENDER: {
      const arr = data.slice();
      arr.sort((a, b) => a.gender.localeCompare(b.gender));
      return arr;
    }
  }
};

export const reducePages = (arr: pageNumbers[], currentPage: number) => {
  const currentId = currentPage - 1;
  const length = arr.length;

  if (currentPage === 1) {
    return arr.slice(0, 3);
  }
  if (currentPage === arr[length - 1].number) {
    return arr.slice(length - 3, length);
  }
  return arr.slice(currentId - 1, currentId + 2);
};

export const createPages = (pagesCount: number, currentPage: number) => {
  const pages = [];
  if (pagesCount > 10) {
    if (currentPage > 5) {
      for (let i = currentPage - 4; i <= currentPage + 5; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    } else {
      for (let i = 1; i <= 10; i++) {
        pages.push(i);
        if (i == pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
  return pages;
};

import { MainData } from '../routes/Main';

export const Utils = {
  random(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min + 1));
  },

  getRandomItems(arr: MainData[], amount: number) {
    const result = [];
    for (let i = 0; i < amount; i++) {
      const rnd = this.random(0, arr.length);
      result.push(arr[rnd]);
    }
    return result;
  },

  isAdult(date: string) {
    const now = new Date().valueOf();
    const picked = new Date(date).valueOf();
    const years = Math.floor((now - picked) / 1000 / 60 / 60 / 24 / 365);
    const isAdult = years >= 18 && years <= 100;
    return isAdult;
  },
};

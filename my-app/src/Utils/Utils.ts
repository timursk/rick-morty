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
};

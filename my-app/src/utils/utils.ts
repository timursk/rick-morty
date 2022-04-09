export const Utils = {
  random(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min + 1));
  },

  isAdult(date: string) {
    const now = new Date().valueOf();
    const picked = new Date(date).valueOf();
    const years = Math.floor((now - picked) / 1000 / 60 / 60 / 24 / 365);
    const isAdult = years >= 18 && years <= 100;
    return isAdult;
  },
};

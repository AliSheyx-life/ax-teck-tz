export const throttle = (fn: Function, delay: number) => {
  let last = 0;
  return (...args: any[]) => {
    const now = Date.now();
    if (now - last < delay) return;
    last = now;
    fn(...args);
  };
};

export const debounce = (fn: Function, delay: number) => {
  let timer: any = null;
  return (...args: any[]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

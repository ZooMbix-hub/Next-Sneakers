// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends any[]>
(cb: (...args: T) => void, delay: number = 1000) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function(...args: T) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => cb(...args), delay);
  };
}
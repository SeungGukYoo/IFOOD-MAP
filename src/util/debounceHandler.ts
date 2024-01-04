import { ChangeEvent } from "react";

let debounceTimer: ReturnType<typeof setTimeout>;
const debounceHandler = (callback: (value: string) => void, e: ChangeEvent<HTMLInputElement>) => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    callback.call(this, e.target.value);
  }, 300);
  return () => clearTimeout(debounceTimer);
};

export default debounceHandler;

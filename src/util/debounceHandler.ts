let debounceTimer: ReturnType<typeof setTimeout>;
const debounceHandler = (callback: (value: string) => void, target: string) => {
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    callback.call(this, target);
  }, 300);
  return () => clearTimeout(debounceTimer);
};

export default debounceHandler;

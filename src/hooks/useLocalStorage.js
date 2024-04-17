import { useState } from 'preact/hooks';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    }
    catch (error) {
      console.error('Error retrieving state from localStorage:', error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // Allow value to be a function to support updating state based on previous value
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    }
    catch (error) {
      console.error('Error setting state in localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;

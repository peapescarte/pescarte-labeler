import { useState } from 'react';

export function useLocalStorage<ValueType>(
  key: string,
  initialValue: ValueType,
): [value: ValueType, setValue: (value: ValueType) => void] {
  // verifica se ja existe algum valor registrado, se não houver utiliza o initialValue
  const [storedValue, setStoredValue] = useState<ValueType>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // salva na sessão o valor
  const setValue = (value: ValueType) => {
    try {
      // Permite que o valor seja uma função
      const valueToStore = value instanceof Function ? value(storedValue) : value;

      setStoredValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

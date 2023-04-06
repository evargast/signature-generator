import { useEffect, useRef, useState } from "react";

/**
 * Object used access to the local storage keys. To be used within useLocalStorage()
 * Synopsis example: useLocalStorage(localStorageKeys['keyIWantToUse']);
 */
export const localStorageKeys = {
    myKey: "my-local-storage-key",
};

/**
 *
 * @param key The key used to reference a value in local storage.
 * @param defaultValue Default value in case non is give.
 * @param options Object containing two functions, one to serialize and one to deserialize.
 * @returns Returns the value and the function to set a value.
 */
function useLocalStorageState(
    key: string,
    defaultValue: any = "",
    { serialize = JSON.stringify, deserialize = JSON.parse } = {},
): [any, React.Dispatch<any>] {
    const [state, setState] = useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key);
        if (valueInLocalStorage) {
            return deserialize(valueInLocalStorage);
        }
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    });

    const prevKeyRef = useRef(key);

    useEffect(() => {
        const prevKey = prevKeyRef.current;
        if (prevKey !== key) {
            window.localStorage.removeItem(prevKey);
        }
        prevKeyRef.current = key;
        window.localStorage.setItem(key, serialize(state));
    }, [key, state, serialize]);

    return [state, setState];
}

export { useLocalStorageState };

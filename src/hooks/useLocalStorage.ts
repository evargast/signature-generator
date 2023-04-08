import { useEffect, useState } from "react";

/**
 * Object used access to the local storage keys. To be used within useLocalStorage()
 * Synopsis example: useLocalStorage(localStorageKeys['keyIWantToUse']);
 */
export const localStorageKeys = {
    isDarkMode: "signature-generator-dark-mode",
};

/**
 *
 * @param key The key used to reference a value in local storage.
 * @param defaultValue Default value in case non is give.
 * @param options Object containing two functions, one to serialize and one to deserialize.
 * @returns Returns the value and the function to set a value.
 */
function useLocalStorageState(key: string, defaultValue: any = ""): [any, React.Dispatch<any>] {
    const [state, setState] = useState(() => {
        const valueInLocalStorage = window.localStorage.getItem(key);
        if (valueInLocalStorage) {
            return JSON.parse(valueInLocalStorage);
        }
        return typeof defaultValue === "function" ? defaultValue() : defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export { useLocalStorageState };

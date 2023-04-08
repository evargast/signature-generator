import { localStorageKeys, useLocalStorageState } from "hooks/useLocalStorage";
import React, { createContext, FC, useContext, useState } from "react";

interface InputElementOptions {
    textValue: string;
    isBold: Boolean;
    isItalics: Boolean;
}

const createSignatureProviderState = () => {
    const [imgUrl, setImgUrl] = useState<string>();
    const [name, setName] = useState<InputElementOptions>({ textValue: "", isBold: false, isItalics: false });
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(localStorageKeys.isDarkMode, false);

    /**
     * Partial<> makes the types inside optional,
     * meaning that updates can have any of the elements within the InputElementOptions interface but does NOT require them all
     * @example updateName({isBold: true}) // this will only update the isBold key of the state object
     */
    const updateName = (updates: Partial<InputElementOptions>) => {
        // spread (...) operator, copies (spreads) the object into a new one let a = { Hello: "world"}, let b = { ...a } will spread a into the new object that the curlies { } are creating
        // if we spread multiple things, the second one will be spread on top of the first one
        // ...name spreads the original state into the new object, ...updates spreads the contents on top of that one thus overriding (updating) the values
        const copyOfName = { ...name, ...updates };

        // after we have created the new object we call the state setter to update the state
        setName(copyOfName);
    };

    return {
        imgUrl,
        setImgUrl,
        updateName,
        isDarkMode,
        setIsDarkMode,
    };
};

type SignatureContextProps = ReturnType<typeof createSignatureProviderState>;

const SignatureContext = createContext<SignatureContextProps>({} as SignatureContextProps);
const SignatureProvider: FC = ({ children }) => {
    return <SignatureContext.Provider value={createSignatureProviderState()}>{children}</SignatureContext.Provider>;
};

const useSignatureContext = () => {
    return useContext(SignatureContext);
};

export { SignatureContext, SignatureProvider, useSignatureContext };

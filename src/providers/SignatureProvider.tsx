import { localStorageKeys, useLocalStorageState } from "hooks/useLocalStorage";
import React, { createContext, CSSProperties, FC, useContext, useState } from "react";

interface InputElementOptions {
    type: "name" | "email" | "title" | "phone" | "linkedin" | "company";
    textValue: string;
    isBold: boolean;
    isItalics: boolean;
    style: CSSProperties;
}

const getDefaultInputElementOptions = (type: InputElementOptions["type"]): InputElementOptions => ({
    type: type,
    textValue: "",
    isBold: false,
    isItalics: false,
    style: { fontWeight: "normal", fontStyle: "normal" },
});

const createSignatureProviderState = () => {
    const [imgUrl, setImgUrl] = useState<string>();
    const [name, setName] = useState<InputElementOptions>(getDefaultInputElementOptions("name"));
    const [email, setEmail] = useState<InputElementOptions>(getDefaultInputElementOptions("email"));
    const [company, setCompany] = useState<InputElementOptions>(getDefaultInputElementOptions("company"));
    const [title, setTitle] = useState<InputElementOptions>(getDefaultInputElementOptions("title"));
    const [linkedin, setLinkedin] = useState<InputElementOptions>(getDefaultInputElementOptions("linkedin"));
    const [phone, setPhone] = useState<InputElementOptions>(getDefaultInputElementOptions("phone"));
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(localStorageKeys.isDarkMode, false);

    const updateState = (updates: Partial<InputElementOptions>) => {
        const updateInput = (
            input: React.Dispatch<React.SetStateAction<InputElementOptions>>, //smartGPT uses React method SetStateAction, for more complex uses useReducer is required
            updates: Partial<InputElementOptions>,
        ) => {
            input(inputOptions => {
                const newOptions = { ...inputOptions, ...updates };
                newOptions.style = {
                    fontWeight: newOptions.isBold ? "bold" : "normal",
                    fontStyle: newOptions.isItalics ? "italic" : "normal",
                };
                return newOptions;
            });
        };

        switch (updates.type) {
            case "name":
                updateInput(setName, updates);
                break;
            case "email":
                updateInput(setEmail, updates);
                break;
            case "company":
                updateInput(setCompany, updates);
                break;
            case "title":
                updateInput(setTitle, updates);
                break;
            case "linkedin":
                updateInput(setLinkedin, updates);
                break;
            case "phone":
                updateInput(setPhone, updates);
                break;
            default:
                break;
        }
    };

    return {
        imgUrl,
        name,
        email,
        company,
        title,
        linkedin,
        phone,
        setImgUrl,
        updateState,
        isDarkMode,
        setIsDarkMode,
    };
};

export type SignatureContextProps = ReturnType<typeof createSignatureProviderState>;

const SignatureContext = createContext<SignatureContextProps>({} as SignatureContextProps);

const SignatureProvider: FC = ({ children }) => {
    return <SignatureContext.Provider value={createSignatureProviderState()}>{children}</SignatureContext.Provider>;
};

const useSignatureContext = () => {
    return useContext(SignatureContext);
};

export { SignatureContext, SignatureProvider, useSignatureContext, type InputElementOptions };

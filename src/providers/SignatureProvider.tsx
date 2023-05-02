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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f709ff0 (feat: optimized code)
    const [name, setName] = useState<InputElementOptions>(getDefaultInputElementOptions("name"));
    const [email, setEmail] = useState<InputElementOptions>(getDefaultInputElementOptions("email"));
    const [company, setCompany] = useState<InputElementOptions>(getDefaultInputElementOptions("company"));
    const [title, setTitle] = useState<InputElementOptions>(getDefaultInputElementOptions("title"));
    const [linkedin, setLinkedin] = useState<InputElementOptions>(getDefaultInputElementOptions("linkedin"));
    const [phone, setPhone] = useState<InputElementOptions>(getDefaultInputElementOptions("phone"));
<<<<<<< HEAD
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
=======

    const [name, setName] = useState<InputElementOptions>({
        type: "name",
        textValue: "",
        isBold: false,
        isItalics: false,
        style: { fontWeight: "normal", fontStyle: "normal" },
    });

    const [email, setEmail] = useState<InputElementOptions>({
        type: "email",
        textValue: "",
        isBold: false,
        isItalics: false,
        style: { fontWeight: "normal", fontStyle: "normal" },
    });

    const [company, setCompany] = useState<InputElementOptions>({
        type: "company",
        textValue: "",
        isBold: false,
        isItalics: false,
        style: { fontWeight: "normal", fontStyle: "normal" },
    });

    const [title, setTitle] = useState<InputElementOptions>({
        type: "title",
        textValue: "",
        isBold: false,
        isItalics: false,
        style: { fontWeight: "normal", fontStyle: "normal" },
    });
    const [linkedin, setLinkedin] = useState<InputElementOptions>({
        type: "linkedin",
        textValue: "",
        isBold: false,
        isItalics: false,
        style: { fontWeight: "normal", fontStyle: "normal" },
    });
    const [phone, setPhone] = useState<InputElementOptions>({
        type: "phone",
        textValue: "",
        isBold: false,
        isItalics: false,
        style: { fontWeight: "normal", fontStyle: "normal" },
    });

=======
>>>>>>> f709ff0 (feat: optimized code)
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

<<<<<<< HEAD
        if (updates.type === "email") {
            const copyOfEmail = { ...email, ...updates };
            copyOfEmail.style = {
                fontWeight: copyOfEmail.isBold ? "bold" : "normal",
                fontStyle: copyOfEmail.isItalics ? "italic" : "normal",
            };
            setEmail(copyOfEmail);
        }
        if (updates.type === "company") {
            const copyOfCompany = { ...company, ...updates };
            copyOfCompany.style = {
                fontWeight: copyOfCompany.isBold ? "bold" : "normal",
                fontStyle: copyOfCompany.isItalics ? "italic" : "normal",
            };
            setCompany(copyOfCompany);
        }
        if (updates.type === "title") {
            const copyOfTitle = { ...title, ...updates };
            copyOfTitle.style = {
                fontWeight: copyOfTitle.isBold ? "bold" : "normal",
                fontStyle: copyOfTitle.isItalics ? "italic" : "normal",
            };
            setTitle(copyOfTitle);
        }
        if (updates.type === "linkedin") {
            const copyOfLinkedin = { ...linkedin, ...updates };
            copyOfLinkedin.style = {
                fontWeight: copyOfLinkedin.isBold ? "bold" : "normal",
                fontStyle: copyOfLinkedin.isItalics ? "italic" : "normal",
            };
            setLinkedin(copyOfLinkedin);
        }
        if (updates.type === "phone") {
            const copyOfPhone = { ...phone, ...updates };
            copyOfPhone.style = {
                fontWeight: copyOfPhone.isBold ? "bold" : "normal",
                fontStyle: copyOfPhone.isItalics ? "italic" : "normal",
            };
            setPhone(copyOfPhone);
>>>>>>> bc7dc1f (feat: implement all user input fields)
=======
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
>>>>>>> f709ff0 (feat: optimized code)
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

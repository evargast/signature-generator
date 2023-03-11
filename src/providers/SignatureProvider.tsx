import React, { createContext, FC, useContext, useState } from "react";

interface SignatureContextProps {
    imgUrl?: string;
    setImgUrl: (inputString: string) => void;
}

const SignatureContext = createContext<SignatureContextProps>({} as SignatureContextProps);

const SignatureProvider: FC = ({ children }) => {
    const [imgUrl, setImgUrl] = useState<string>();

    const singatureState = {
        imgUrl,
        setImgUrl,
    };

    return <SignatureContext.Provider value={singatureState}>{children}</SignatureContext.Provider>;
};

const useSignatureContext = () => {
    return useContext(SignatureContext);
};

export { SignatureContext, SignatureProvider, useSignatureContext };

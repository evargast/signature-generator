import React, { createContext, FC, useContext, useState } from "react";

// =========== INIT FUNCTION =========== Will initialize the provider state for us - this lets us ifer the type of the return and ensure type safety
const createAuthenticationProviderState = () => {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);

    return { user, setUser, profile, setProfile };
};

export type AuthenticationContextProps = ReturnType<typeof createAuthenticationProviderState>;

// =========== CONTEXT =========== create the context
const AuthenticationContext = createContext<AuthenticationContextProps>({} as AuthenticationContextProps);

// =========== PROVIDER ===========  provides all the data thats's in the context to it's child components
const AuthenticationProvider: FC = ({ children }) => {
    return (
        <AuthenticationContext.Provider value={createAuthenticationProviderState()}>
            {children}
        </AuthenticationContext.Provider>
    );
};

// =========== HOOK =========== lets us access the context data
const useAuthenticationContext = () => {
    return useContext(AuthenticationContext);
};

export { AuthenticationContext, AuthenticationProvider, useAuthenticationContext };

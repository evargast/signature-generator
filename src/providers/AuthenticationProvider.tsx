/* eslint-disable no-console */
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { createContext, FC, useContext, useEffect, useState } from "react";

interface GoogleUser {
    access_token: string;
    authuser: string;
    expires_at: number;
    prompt: string;
    scope: string;
    token_type: string;
}
interface GoogleProfile {
    email: string;
    family_name: string;
    given_name: string;
    id: string;
    locale: string;
    name: string;
    picture: string;
    verified_email: boolean;
}

// =========== INIT FUNCTION =========== Will initialize the provider state for us - this lets us infer the type of the return and ensure type safety
const createAuthenticationProviderState = () => {
    const [user, setUser] = useState<GoogleUser>();
    const [profile, setProfile] = useState<GoogleProfile>();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const handleSuccess = (credentialResponse: any) => {
        setUser(credentialResponse);
    };

    const handleLogin = useGoogleLogin({
        onSuccess: handleSuccess,
        onError: error => console.log("Login Failed:", error),
    });

    const handleLogout = () => {
        googleLogout();
        setProfile(undefined);
        setIsLoggedIn(false);
    };

    useEffect(() => {
        if (user) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${user.access_token}`,
                        Accept: "application/json",
                    },
                })
                .then(response => {
                    setProfile(response.data);
                    setIsLoggedIn(true);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [user]);

    return {
        profile,
        isLoggedIn,
        handleLogin,
        handleLogout,
    };
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

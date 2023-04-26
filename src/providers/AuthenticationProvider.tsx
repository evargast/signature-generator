/* eslint-disable no-console */
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import React, { createContext, FC, useContext, useEffect, useState } from "react";

// =========== INIT FUNCTION =========== Will initialize the provider state for us - this lets us infer the type of the return and ensure type safety
const createAuthenticationProviderState = () => {
    const [user, setUser] = useState<any>();
    const [profile, setProfile] = useState<any>({});

    // const login = useGoogleLogin({
    //     onSuccess: (codeClientConfig: CodeClientConfig) => setUser(codeClientConfig),
    //     // eslint-disable-next-line no-console
    //     // onError: (error: string) => console.log("Login Failed:", error),
    // });

    const handleSuccess = (credentialResponse: any) => {
        setUser(credentialResponse);
    };

    const handleLogin = useGoogleLogin({
        onSuccess: handleSuccess,
        // eslint-disable-next-line no-console
        onError: error => console.log("Login Failed:", error),
    });

    const handleLogout = () => {
        googleLogout();
        setProfile(null);
        console.log("logging out");
    };

    const handleErrorMessage = (error = "error") => {
        console.log(error);
    };

    useEffect(() => {
        console.log("in here!");
        (async () => {
            console.log("not in here");
            if (user) {
                try {
                    const response = await axios.get(
                        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                        {
                            headers: {
                                Authorization: `Bearer ${user.access_token}`,
                                Accept: "application/json",
                            },
                        },
                    );

                    console.log("inside axios!", response.data); //working
                    setProfile(response.data);
                    //console.log("profile set.", profile); //profile remains undefined.
                    //console.log("user data:", user);
                } catch (error) {
                    console.log(error);
                }
            }
        })();
        console.log("out here");
    }, [user]);

    return { user, setUser, profile, setProfile, handleLogin, handleLogout, handleErrorMessage, handleSuccess };
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

/* eslint-disable no-console */
import { Flex } from "@adobe/react-spectrum";
import { ToggleButton } from "@adobe/react-spectrum";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import { useAuthenticationContext } from "providers/AuthenticationProvider";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC } from "react";

interface Props {
    isToggled?: boolean;
}

const Header: FC<Props> = ({}) => {
    // const [selected, setSelected] = useState(isToggled);
    const { isDarkMode, setIsDarkMode } = useSignatureContext();
    const { handleLogin, handleLogout } = useAuthenticationContext();

    return (
        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
            <h1>Signature Generator</h1>
            <Flex direction="row" alignItems="center" gap="size-100">
                <ToggleButton isQuiet onChange={setIsDarkMode} isSelected={isDarkMode}>
                    {isDarkMode ? <Moon /> : <Light />}
                </ToggleButton>
                {/* <GoogleLogin onSuccess={handleSuccess} onError={handleErrorMessage} /> */}
                <button onClick={() => handleLogin()}>Sign in with Google 🚀 </button>
                <button onClick={() => handleLogout()}>Sign out with Google 🚀 </button>
            </Flex>
        </Flex>
    );
};

export { Header };

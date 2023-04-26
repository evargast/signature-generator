/* eslint-disable no-console */
import { Button, Flex } from "@adobe/react-spectrum";
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
    const { handleLogin, handleLogout, isLoggedIn } = useAuthenticationContext();

    return (
        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
            <h1>Signature Generator</h1>
            <Flex direction="row" alignItems="center" gap="size-100">
                <ToggleButton isQuiet onChange={setIsDarkMode} isSelected={isDarkMode}>
                    {isDarkMode ? <Moon /> : <Light />}
                </ToggleButton>
                {/* <GoogleLogin onSuccess={handleSuccess} onError={handleErrorMessage} /> */}
                <Button variant="cta" style="outline" onPress={() => (isLoggedIn ? handleLogout() : handleLogin())}>
                    {isLoggedIn ? "Sign out" : "Sign in with Google 🚀"}
                </Button>
            </Flex>
        </Flex>
    );
};

export { Header };

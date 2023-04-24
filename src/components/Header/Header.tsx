/* eslint-disable no-console */
import { Flex } from "@adobe/react-spectrum";
import { ToggleButton } from "@adobe/react-spectrum";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import Light from "@spectrum-icons/workflow/Light";
import Moon from "@spectrum-icons/workflow/Moon";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC } from "react";

interface Props {
    isToggled?: boolean;
}

const responseMessage = (credentialResponse: CredentialResponse) => {
    console.log(credentialResponse);
};
const errorMessage = (error = "error") => {
    console.log(error);
};

const Header: FC<Props> = ({}) => {
    // const [selected, setSelected] = useState(isToggled);
    const { isDarkMode, setIsDarkMode } = useSignatureContext();

    return (
        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
            <h1>Signature Generator</h1>
            <Flex direction="row" alignItems="center" gap="size-100">
                <ToggleButton isQuiet onChange={setIsDarkMode} isSelected={isDarkMode}>
                    {isDarkMode ? <Moon /> : <Light />}
                </ToggleButton>
                <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
            </Flex>
        </Flex>
    );
};

export { Header };

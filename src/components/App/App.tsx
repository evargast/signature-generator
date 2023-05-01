/* eslint-disable no-console */
import { darkTheme, Flex, lightTheme, Provider as ProviderV3 } from "@adobe/react-spectrum";
import { ToastContainer } from "@react-spectrum/toast";
import ImgInput from "components/ImgInput";
import { Layout } from "components/Layout";
import TablePreview from "components/TablePreview";
import { UsernameInput } from "components/UsernameInput";
import { useAuthenticationContext } from "providers/AuthenticationProvider";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC } from "react";

import "./App.css";

const App: FC = () => {
    const { isDarkMode, updateState, name, email, company, title, linkedin, phone } = useSignatureContext();
    const { profile } = useAuthenticationContext();

    return (
        <AuthenticationProvider>
            <ProviderV3 theme={isDarkMode ? darkTheme : lightTheme} colorScheme={"light"} height="100%">
                <ToastContainer />
                <Layout>
                    <Flex
                        marginX="size-300"
                        alignItems="start"
                        direction="column"
                        justifyContent="center"
                        gap={"size-200"}
                    >
                        <UsernameInput
                            type="name"
                            label={"Name"}
                            text={name.textValue}
                            isBold={name.isBold}
                            isItalics={name.isItalics}
                            onInputChange={updateState}
                        />
                        <UsernameInput
                            type="title"
                            label={"Title"}
                            text={title.textValue}
                            isBold={title.isBold}
                            isItalics={title.isItalics}
                            onInputChange={updateState}
                        />

                        <UsernameInput
                            type="company"
                            label={"Company"}
                            text={company.textValue}
                            isBold={company.isBold}
                            isItalics={company.isItalics}
                            onInputChange={updateState}
                        />
                        <UsernameInput
                            type="email"
                            label={"Email"}
                            text={email.textValue}
                            isBold={email.isBold}
                            isItalics={email.isItalics}
                            onInputChange={updateState}
                        />
                        <UsernameInput
                            type="phone"
                            label={"Phone"}
                            text={phone.textValue}
                            isBold={phone.isBold}
                            isItalics={phone.isItalics}
                            onInputChange={updateState}
                        />
                        <UsernameInput
                            type="linkedin"
                            label={"Linkedin"}
                            text={linkedin.textValue}
                            isBold={linkedin.isBold}
                            isItalics={linkedin.isItalics}
                            onInputChange={updateState}
                        />
                        <ImgInput />
                        <TablePreview />
                    </Flex>
                </Layout>
            </ProviderV3>
        </AuthenticationProvider>
    );
};

export default App;

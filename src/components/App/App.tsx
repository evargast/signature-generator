import { darkTheme, Flex, lightTheme, Provider as ProviderV3 } from "@adobe/react-spectrum";
import { ToastContainer } from "@react-spectrum/toast";
import ImgInput from "components/ImgInput";
import { Layout } from "components/Layout";
import TablePreview from "components/TablePreview";
import { UsernameInput } from "components/UsernameInput";
import { AuthenticationProvider } from "providers/AuthenticationProvider";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC } from "react";

import "./App.css";

const App: FC = () => {
    const { isDarkMode, updateName, name } = useSignatureContext();

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
                            label={"Name"}
                            text={name.textValue}
                            isBold={name.isBold}
                            isItalics={name.isItalics}
                            onInputChange={updateName}
                        />
                        {/* <UsernameInput label={"Title"} />
                    <UsernameInput label={"Company"} />
                    <UsernameInput label={"Email"} />
                    <UsernameInput label={"Phone number"} />
                    <UsernameInput label={"LinkedIn"} /> */}
                        <ImgInput />
                        <TablePreview />
                    </Flex>
                </Layout>
            </ProviderV3>
        </AuthenticationProvider>
    );
};

export default App;

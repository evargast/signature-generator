import { darkTheme, Flex, lightTheme, Provider as ProviderV3 } from "@adobe/react-spectrum";
import { ColorPicker } from "components/ColorPicker";
import { Layout } from "components/Layout";
import TablePreview from "components/TablePreview";
import { UsernameInput } from "components/UsernameInput";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC } from "react";

import "./App.css";

const App: FC = () => {
    const { isDarkMode } = useSignatureContext();
    return (
        <ProviderV3 theme={isDarkMode ? darkTheme : lightTheme} colorScheme={"light"} height="100%">
            <Layout>
                <Flex marginX="size-300" alignItems="start" direction="column" justifyContent="center" gap={"size-200"}>
                    <UsernameInput label={"Name"} />
                    <UsernameInput label={"Title"} />
                    <UsernameInput label={"Company"} />
                    <UsernameInput label={"Email"} />
                    <UsernameInput label={"Phone number"} />
                    <UsernameInput label={"LinkedIn"} />
                    {/* eslint-disable-next-line no-console */}
                    <ColorPicker handleColorChange={color => console.log(color.toString("hex"))} />
                    <TablePreview />
                </Flex>
            </Layout>
        </ProviderV3>
    );
};

export default App;

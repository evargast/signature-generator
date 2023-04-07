import { Flex, lightTheme, Provider as ProviderV3 } from "@adobe/react-spectrum";
import { ColorPicker } from "components/ColorPicker";
import { Layout } from "components/Layout";
import TablePreview from "components/TablePreview";
import { UsernameInput } from "components/UsernameInput";
import { SignatureProvider } from "providers/SignatureProvider";
import React, { FC } from "react";

import "./App.css";

const App: FC = () => {
    return (
        <ProviderV3 theme={lightTheme} colorScheme={"light"}>
            <SignatureProvider>
                <Layout>
                    <Flex
                        marginX="size-300"
                        alignItems="start"
                        direction="column"
                        justifyContent="center"
                        gap={"size-200"}
                    >
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
            </SignatureProvider>
        </ProviderV3>
    );
};

export default App;

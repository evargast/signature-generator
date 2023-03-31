import { Flex, Grid, lightTheme, Provider as ProviderV3, repeat, View } from "@adobe/react-spectrum";
import { BackgroundColor } from "@react-types/shared";
import { ColorPicker } from "components/ColorPicker";
import { SignatureProvider } from "providers/SignatureProvider";
import React, { FC } from "react";

import "./App.css";

const App: FC = () => {
    const baseColors = [
        "celery",
        "chartreuse",
        "yellow",
        "magenta",
        "fuchsia",
        "purple",
        "indigo",
        "seafoam",
        "red",
        "orange",
        "green",
        "blue",
    ];

    const colors: BackgroundColor["5"][] = [];
    for (const color of baseColors) {
        for (let i = 4; i <= 7; i++) {
            colors.push(`${color}-${i}00` as BackgroundColor["5"]);
        }
    }

    return (
        <ProviderV3 theme={lightTheme} colorScheme={"light"}>
            <SignatureProvider>
                <View paddingTop="size-400">
                    <h1 className="App">Welcome to Signature Generator!</h1>
                </View>

                <Grid
                    columns={repeat("auto-fit", "size-800")}
                    autoRows="size-800"
                    justifyContent="center"
                    gap="size-100"
                    marginX="size-200"
                    marginTop="size-300"
                    marginBottom="size-400"
                >
                    {colors.map(color => (
                        <View colorVersion={5} key={color?.toString()} backgroundColor={color} />
                    ))}
                </Grid>
                <Flex marginX="size-300" justifyContent="center">
                    {/* eslint-disable-next-line no-console */}
                    <ColorPicker handleColorChange={color => console.log(color.toString("hex"))} />
                </Flex>
            </SignatureProvider>
        </ProviderV3>
    );
};

export default App;

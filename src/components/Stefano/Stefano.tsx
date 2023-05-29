import { Grid } from "@adobe/react-spectrum";
import { View } from "@adobe/react-spectrum";
import React, { FC } from "react";

const Stefano: FC = () => {
    return (
        <div>
            <h1>This is the Stefano page</h1>
            <Grid columns={["repeat(4, 1fr)"]} rows={["repeat(3, 1fr)"]} height="size-6000" gap="size-200">
                <View backgroundColor="static-blue-200" gridArea="1/1/4/2" />
                <View backgroundColor="static-blue-200" gridArea="1/2/2/4" />
                <View backgroundColor="static-blue-200" />
                <View backgroundColor="static-blue-200" />
                <View backgroundColor="static-blue-200" />
                <View backgroundColor="static-blue-200" gridArea="2/4/4/5" />
                <View backgroundColor="static-blue-200" />
                <View backgroundColor="static-blue-200" />
            </Grid>
        </div>
    );
};

export { Stefano };

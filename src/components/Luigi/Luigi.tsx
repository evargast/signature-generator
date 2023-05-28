import { Grid, View } from "@adobe/react-spectrum";
import React, { FC } from "react";

const Luigi: FC = () => {
    return (
        <div style={{ height: "90vh", width: "98vw" }}>
            <Grid
                areas={["sidebar header header rheader", "sidebar info11 info12 rbar", "sidebar info21 info22 rbar"]}
                rows={["1fr", "1fr", "1fr"]}
                columns={["1fr", "1fr", "1fr", "1fr"]}
                height="100%"
                gap="size-200"
            >
                <View backgroundColor="static-blue-200" gridArea="header" />
                <View backgroundColor="static-blue-200" gridArea="sidebar" />
                <View backgroundColor="static-blue-200" gridArea="rheader" />
                <View backgroundColor="static-blue-200" gridArea="info11" />
                <View backgroundColor="static-blue-200" gridArea="info12" />
                <View backgroundColor="static-blue-200" gridArea="info21" />
                <View backgroundColor="static-blue-200" gridArea="info22" />
                <View backgroundColor="static-blue-200" gridArea="rbar" />
            </Grid>
        </div>
    );
};

export { Luigi };

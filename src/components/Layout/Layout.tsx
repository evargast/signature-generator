import { Flex } from "@adobe/react-spectrum";
import React, { FC } from "react";
import { Outlet } from "react-router";

import { Header } from "../Header";

const Layout: FC = () => {
    return (
        <Flex direction="column" marginX="size-200">
            <Header />
            <Outlet />
        </Flex>
    );
};

export { Layout };

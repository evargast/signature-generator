import { Flex } from "@adobe/react-spectrum";
import React, { FC } from "react";

import { Header } from "../Header";

const Layout: FC = ({ children }) => {
    return (
        <Flex direction="column" marginX="size-200">
            <Header />
            {children}
        </Flex>
    );
};

export { Layout };

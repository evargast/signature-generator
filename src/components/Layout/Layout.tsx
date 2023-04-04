import { Flex } from "@adobe/react-spectrum";
import React, { FC } from "react";

import { Header } from "../Header";

interface Props {}

const Layout: FC<Props> = ({ children }) => {
    return (
        <Flex direction="column">
            <Header />
            {children}
        </Flex>
    );
};

export { Layout };

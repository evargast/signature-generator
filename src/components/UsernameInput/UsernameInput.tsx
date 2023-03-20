import { TextField } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";
import React, { FC } from "react";

import { TextStyleOptions } from "./../TextStyleOptions";

interface Props {
    text?: string;
    disabled?: boolean;
    onChange?: VoidFunction;
}

const UsernameInput: FC<Props> = ({}) => {
    const [nameValue, setNameValue] = React.useState("Hello World");

    return (
        <div>
            <Flex gap="size-200" alignItems="center">
                <TextField label="Name" onChange={setNameValue} value={nameValue} />

                <Flex marginTop="size-300">
                    <TextStyleOptions />
                </Flex>
            </Flex>
        </div>
    );
};

export { UsernameInput };

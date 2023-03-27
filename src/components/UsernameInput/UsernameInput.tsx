import { TextField } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";
import React, { FC } from "react";

import { TextStyleOptions } from "./../TextStyleOptions";

interface Props {
    text?: string;
}

const UsernameInput: FC<Props> = ({}) => {
    const [nameValue, setNameValue] = React.useState("Hello World");

    const handleButtonChange = (values: (string | number)[]) => {
        // eslint-disable-next-line no-console
        console.log(values);
    };

    return (
        <Flex gap="size-200" alignItems="end" direction="row">
            <TextField label="Name" onChange={setNameValue} value={nameValue} />
            <TextStyleOptions onChange={handleButtonChange} />
        </Flex>
    );
};

export { UsernameInput };

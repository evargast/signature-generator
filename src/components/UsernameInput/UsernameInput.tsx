import { TextField } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";
import React, { FC } from "react";

import { TextStyleOptions, TextStyleProps } from "./../TextStyleOptions";

interface UsernameInputProps extends TextStyleProps {
    text?: string;
    label: string;
}

const UsernameInput: FC<UsernameInputProps> = ({ text, isBold, isItalics, label }) => {
    const [nameValue, setNameValue] = React.useState(text);

    const handleButtonChange = (values: (string | number)[]) => {
        // eslint-disable-next-line no-console
        console.log(values + " " + text);
    };

    return (
        <Flex gap="size-200" alignItems="end" direction="row">
            <TextField label={label} onChange={setNameValue} value={nameValue} />
            <TextStyleOptions onChange={handleButtonChange} isBold={isBold} isItalics={isItalics} />
        </Flex>
    );
};

export { UsernameInput };
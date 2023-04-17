import { TextField } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";
import { SignatureContextProps } from "providers/SignatureProvider";
import React, { FC } from "react";

import { TextStyleOptions, TextStyleProps } from "./../TextStyleOptions";

interface UsernameInputProps extends TextStyleProps {
    text?: string;
    label: string;
    onInputChange: SignatureContextProps["updateName"];
}

const UsernameInput: FC<UsernameInputProps> = ({ onInputChange, text, isBold, isItalics, label }) => {
    const handleButtonChange = (options: { isBold?: boolean; isItalics?: boolean }) => {
        onInputChange(options);
    };

    const handleInputChange = (value: string) => {
        onInputChange({ textValue: value });
    };

    return (
        <Flex gap="size-200" alignItems="end" direction="row">
            <TextField label={label} onChange={handleInputChange} value={text} />
            <TextStyleOptions onChange={handleButtonChange} isBold={isBold} isItalics={isItalics} />
        </Flex>
    );
};

export { UsernameInput };

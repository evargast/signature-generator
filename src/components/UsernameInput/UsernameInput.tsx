import { TextField } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";
import { Color } from "@react-types/color";
import { InputElementOptions } from "providers/SignatureProvider";
import React, { FC } from "react";

import { TextStyleOptions, TextStyleProps } from "./../TextStyleOptions";

interface UsernameInputProps extends Omit<TextStyleProps, "onColorChange"> {
    state: InputElementOptions;
    label: string;
    onInputChange: (updates: Partial<InputElementOptions>) => void;
}

const UsernameInput: FC<UsernameInputProps> = ({ state, onInputChange, label }) => {
    const handleButtonChange = (options: { isBold?: boolean; isItalics?: boolean }) => {
        // Since the provider needs a variant to know where to apply the logic, we are adding it to the options object
        const modifiedOptions = { ...options, variant: state.variant };
        onInputChange(modifiedOptions);
    };

    const handleInputChange = (value: string) => {
        onInputChange({ variant: state.variant, textValue: value });
    };

    const handleColorChange = (color: Color) => {
        // eslint-disable-next-line no-console
        console.log(color.toFormat("hex"));
    };

    const handleAutoComplete = (variant: string) => {
        switch (variant) {
            case "name":
                return "name";
            case "email":
                return "email";
            case "title":
                return "organization-title";
            case "phone":
                return "tel";
            case "linkedin":
                return "url";
            default:
                return "";
        }
    };

    return (
        <Flex gap="size-200" alignItems="end" direction="row">
            <TextField
                label={label}
                onChange={handleInputChange}
                value={state.textValue}
                width="size-3600"
                // initial implementation needs working, TODO
                name={handleAutoComplete(state.variant)}
                type={handleAutoComplete(state.variant)}
                autoComplete={handleAutoComplete(state.variant)}
            />
            <TextStyleOptions
                onChange={handleButtonChange}
                onColorChange={handleColorChange}
                isBold={state.isBold}
                isItalics={state.isItalics}
            />
        </Flex>
    );
};

export { UsernameInput };

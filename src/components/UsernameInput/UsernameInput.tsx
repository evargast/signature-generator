import { Flex, TextField } from "@adobe/react-spectrum";
import { Color } from "@react-types/color";
import { InputElementOptions } from "providers/SignatureProvider";
import React, { FC, useState } from "react";

import { TextStyleOptions, TextStyleProps } from "./../TextStyleOptions";

interface UsernameInputProps extends Omit<TextStyleProps, "onColorChange"> {
    state: InputElementOptions;
    label: string;
    onInputChange: (updates: Partial<InputElementOptions>) => void;
}

const UsernameInput: FC<UsernameInputProps> = ({ state, onInputChange, label }) => {
    const [emailValidation, setEmailValidation] = useState<"valid" | "invalid">();
    const emailRegex = new RegExp(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);

    const validateEmail = (input: string) => {
        const validation = emailRegex.test(input) ? "valid" : "invalid";
        setEmailValidation(validation);

        return validation; // returning it so we can have access to it after calling the function
    };

    const handleButtonChange = (options: { isBold?: boolean; isItalics?: boolean }) => {
        // Since the provider needs a variant to know where to apply the logic, we are adding it to the options object
        const modifiedOptions = { ...options, variant: state.variant };
        // console.log(modifiedOptions); //no output of coot but yes to isBold isItalics and variant.
        onInputChange(modifiedOptions);
    };

    const handleInputChange = (value: string) => {
        if (state.variant === "email") {
            if (value === "") {
                setEmailValidation(undefined);
            } else {
                const isValid = validateEmail(value);
                if (isValid === "valid") {
                    onInputChange({ variant: state.variant, textValue: value });
                } else {
                    onInputChange({ variant: state.variant, textValue: undefined });
                }
            }
        } else {
            onInputChange({ variant: state.variant, textValue: value });
        }
    };

    const updateProviderColorState = (value: Color) => {
        const strColor = value.toString("hex");
        setColor(strColor);
        return strColor;
    };

    const handleColorChange = (colorValue: Color) => {
        const strColorValue = updateProviderColorState(colorValue);
        console.log(strColorValue); //working setting value on state. missing wire up to

        console.log(colorValue.toFormat("hex"));
    };

    return (
        <Flex gap="size-200" alignItems="end" direction="row">
            <TextField
                label={label}
                onChange={handleInputChange}
                value={state.textValue}
                width="size-3600"
                validationState={state.variant === "email" ? emailValidation : undefined}
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

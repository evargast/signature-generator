import { Flex, TextField } from "@adobe/react-spectrum";
import { Color } from "@react-types/color";
import { InputElementOptions } from "providers/SignatureProvider";
import React, { FC, useEffect, useState } from "react";

import { TextStyleOptions, TextStyleProps } from "./../TextStyleOptions";

interface UsernameInputProps extends Omit<TextStyleProps, "onColorChange"> {
    state: InputElementOptions;
    label: string;
    onInputChange: (updates: Partial<InputElementOptions>) => void;
}

const UsernameInput: FC<UsernameInputProps> = ({ state, onInputChange, label }) => {
    const [emailValidation, setEmailValidation] = useState<"valid" | "invalid">();
    const emailRegex = new RegExp(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);

    useEffect(() => {
        if (state !== undefined && state.variant === "email") {
            validateEmail(state.textValue);
        }
    }, [state]);

    const validateEmail = (input: string) => {
        setEmailValidation(emailRegex.test(input) ? "valid" : "invalid");
    };

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

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
        let autocompleteVariant: string = "";
        switch (variant) {
            case "name":
                autocompleteVariant = "name";
                break;
            case "title":
                autocompleteVariant = "organization-title";
                break;
            case "company":
                autocompleteVariant = "organization";
                break;
            case "email":
                autocompleteVariant = "email";
                break;
            case "phone":
                autocompleteVariant = "tel";
                break;
            case "linkedin":
                autocompleteVariant = "url";
                break;
            default:
                break;
        }
        return {
            name: autocompleteVariant,
            type: autocompleteVariant,
            autoComplete: autocompleteVariant,
        };
    };

    // const handleAutoComplete = (variant: string) => {
    //     switch (variant) {
    //         case "name":
    //             return { name: "name", type: "name", autoComplete: "name" };
    //         case "title":
    //             return { name: "organization-title", type: "organization-title", autoComplete: "organization-title" };
    //         case "company":
    //             return { name: "organization", type: "organization", autoComplete: "organization" };
    //         case "email":
    //             return { name: "email", type: "email", autoComplete: "email" };
    //         case "phone":
    //             return { name: "tel", type: "tel", autoComplete: "tel" };
    //         case "linkedin":
    //             return { name: "url", type: "url", autoComplete: "url" };
    //         default:
    //             return {};
    //     }
    // };

    return (
        <Flex gap="size-200" alignItems="end" direction="row">
            <TextField
                label={label}
                onChange={handleInputChange}
                value={state.textValue}
                width="size-3600"
                {...handleAutoComplete(state.variant)}
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

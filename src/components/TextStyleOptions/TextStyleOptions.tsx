/* eslint-disable no-console */
import { Flex, ToggleButton } from "@adobe/react-spectrum";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import { ColorPicker } from "components/ColorPicker";
import React, { FC, useState } from "react";

export interface TextStyleProps {
    isBold?: boolean;
    isItalics?: boolean;
    onChange?: (options: { isBold?: boolean; isItalics?: boolean }) => void;
}

const TextStyleOptions: FC<TextStyleProps> = ({ isBold, isItalics, onChange }) => {
    const [selectedBold, setSelectedBold] = useState<boolean>(Boolean(isBold));
    const [selectedItalics, setSelectedItalics] = useState<boolean>(Boolean(isItalics));

    const handleButtonChange = (valueBold: boolean, valueItalics: boolean) => {
        setSelectedBold(valueBold);
        setSelectedItalics(valueItalics);
        isBold = valueBold;
        isItalics = valueItalics;
        if (onChange) {
            onChange({
                isBold: valueBold,
                isItalics: valueItalics,
            });
        }
    };

    return (
        <Flex direction="row" gap="size-50">
            <ToggleButton
                isQuiet
                isEmphasized
                aria-label="BoldButton"
                isSelected={selectedBold}
                onChange={selectedBold => handleButtonChange(selectedBold, selectedItalics)}
            >
                <TagBold />
            </ToggleButton>
            <ToggleButton
                isQuiet
                isEmphasized
                aria-label="ItalicsButton"
                isSelected={selectedItalics}
                onChange={selectedItalics => handleButtonChange(selectedBold, selectedItalics)}
            >
                <TagItalic />
            </ToggleButton>
            <ColorPicker handleColorChange={color => console.log(color.toString("hex"))} />
        </Flex>
    );
};

export { TextStyleOptions };

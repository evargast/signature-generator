/* eslint-disable no-console */
import { Flex, ToggleButton } from "@adobe/react-spectrum";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import { ColorPicker } from "components/ColorPicker";
import React, { FC } from "react";

export interface TextStyleProps {
    isBold?: boolean;
    isItalics?: boolean;
    onChange?: (options: { isBold?: boolean; isItalics?: boolean }) => void;
}

const TextStyleOptions: FC<TextStyleProps> = ({ isBold, isItalics, onChange }) => {
    const [selectedBold, setSelectedBold] = React.useState<boolean | undefined>(isBold);
    const [selectedItalics, setSelectedItalics] = React.useState<boolean | undefined>(isItalics);

    const handleBoldChange = (value: boolean) => {
        setSelectedBold(value);
        isBold = value;
        if (onChange) {
            onChange({
                isBold: value,
                isItalics: selectedItalics,
            });
            console.log(`isBoldPropValue: ${isBold}`);
        }
    };

    const handleItalicsChange = (value: boolean) => {
        setSelectedItalics(value);
        isItalics = value;

        if (onChange) {
            onChange({
                isBold: selectedBold,
                isItalics: value,
            });
            console.log(`isItalicsPropValue: ${isItalics}`);
        }
    };

    React.useEffect(() => {
        isBold = selectedBold;
        isItalics = selectedItalics;
        console.log(`isBold: ${isBold} and isItalics:${isItalics}`);
    }, [selectedBold, selectedItalics]);

    return (
        <Flex direction="row">
            <ToggleButton isQuiet aria-label="BoldButton" isSelected={selectedBold} onChange={handleBoldChange}>
                <TagBold />
            </ToggleButton>
            <ToggleButton
                isQuiet
                aria-label="ItalicsButton"
                isSelected={selectedItalics}
                onChange={handleItalicsChange}
            >
                <TagItalic />
            </ToggleButton>
            <ColorPicker handleColorChange={color => console.log(color.toString("hex"))} />
        </Flex>
    );
};

export { TextStyleOptions };

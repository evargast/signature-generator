/* eslint-disable no-console */
// import { ActionGroup, Flex, Item, ToggleButton } from "@adobe/react-spectrum";
// import { Text } from "@adobe/react-spectrum";
import { Flex, ToggleButton } from "@adobe/react-spectrum";
// import type { Selection } from "@react-types/shared";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import { ColorPicker } from "components/ColorPicker";
import React, { FC } from "react";

export interface TextStyleProps {
    isBold?: boolean;
    isItalics?: boolean;
    onChange?: (options: { isBold?: boolean; isItalics?: boolean }) => void;
}

// const TextStyleOptions: FC<TextStyleProps> = ({ isBold, isItalics, onChange }) => { //original
const TextStyleOptions: FC<TextStyleProps> = ({ isBold, isItalics }) => {
    // const [selected, setSelected] = React.useState<Selection>(() => {
    //     const initialValue: string[] = [];

    //     if (isBold) {
    //         initialValue.push("bold");
    //     }

    //     if (isItalics) {
    //         initialValue.push("italics");
    //     }
    //     console.log(initialValue);

    //     return new Set(initialValue);
    // });

    const [selectedBold, setSelectedBold] = React.useState(isBold);
    const [selectedItalics, setSelectedItalics] = React.useState(isItalics);

    // const handleSelectionChange = (selectedKeys: Selection) => {
    //     setSelected(selectedKeys);
    //     if (onChange) {
    //         const values: (string | number)[] = Array.from(selectedKeys);
    //         onChange(values);
    //     }
    // };

    return (
        <Flex direction="row">
            <ToggleButton isQuiet aria-label="BoldButton" isSelected={selectedBold} onChange={setSelectedBold}>
                <TagBold />
            </ToggleButton>
            <ToggleButton isQuiet aria-label="ItalicsButton" isSelected={selectedItalics} onChange={setSelectedItalics}>
                <TagItalic />
            </ToggleButton>
            <ColorPicker />

            {/* <div>
                <ActionGroup
                    isEmphasized
                    density="compact"
                    isQuiet
                    selectionMode="multiple"
                    selectedKeys={selected}
                    onSelectionChange={handleSelectionChange}
                >
                    <Item key="bold">
                        <TagBold />
                        <Text>Bold</Text>
                    </Item>

                    <Item key="italics">
                        <TagItalic />
                        <Text>Italic</Text>
                    </Item>
                </ActionGroup>
            </div> */}
        </Flex>
    );
};

export { TextStyleOptions };

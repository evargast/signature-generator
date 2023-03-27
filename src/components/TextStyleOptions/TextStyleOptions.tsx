/* eslint-disable no-console */
import { ActionGroup, Item } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import type { Selection } from "@react-types/shared";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import React, { FC } from "react";

interface Props {
    isBold?: boolean;
    isItalics?: boolean;
    onChange?: (selectedKeys: (string | number)[]) => void; //works there is no predefined onAction event.
}

const TextStyleOptions: FC<Props> = ({ isBold, isItalics, onChange }) => {
    const [selected, setSelected] = React.useState<Selection>(() => {
        const initialValue: string[] = [];

        if (isBold) {
            initialValue.push("bold");
        }

        if (isItalics) {
            initialValue.push("italics");
        }
        console.log(initialValue);

        return new Set(initialValue);
    });

    const handleSelectionChange = (selectedKeys: Selection) => {
        setSelected(selectedKeys);
        if (onChange) {
            const values: (string | number)[] = Array.from(selectedKeys);
            onChange(values);
        }
    };

    return (
        <div>
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
        </div>
    );
};

export { TextStyleOptions };

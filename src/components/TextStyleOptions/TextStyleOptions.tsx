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
        // eslint-disable-next-line no-console
        console.log(initialValue);

        return new Set(initialValue);
    });

    // function printValues(): void {
    //     console.log("Is bold:" + isBold + "is Italics" + isItalics);
    // } //printing but with the past cycle state.

    // const onChange = (Array.from(selected)) =>{

    // }

    const handleSelectionChange = (selectedKeys: Selection) => {
        //if the optional onChange function if it is defined.
        setSelected(selectedKeys); //setting the state for when onSelectionChange is triggered.
        const values: (string | number)[] = Array.from(selectedKeys);
        values.push();
        if (onChange) {
            onChange(values);
        }
    };

    // function onChange(array: string[]): void {}

    return (
        <div>
            <ActionGroup
                isEmphasized
                density="compact"
                isQuiet
                selectionMode="multiple"
                selectedKeys={selected}
                onSelectionChange={handleSelectionChange}
                // onAction={printValues}
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

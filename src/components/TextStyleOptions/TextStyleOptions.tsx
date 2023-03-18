import { ActionGroup, Item } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import type { Selection } from "@react-types/shared";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import React, { FC } from "react";

interface Props {
    isBold?: boolean;
    isItalics?: boolean;
}

const TextStyleOptions: FC<Props> = ({ isBold, isItalics }) => {
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

    return (
        <div>
            <ActionGroup
                isEmphasized
                density="compact"
                isQuiet
                selectionMode="multiple"
                selectedKeys={selected}
                onSelectionChange={setSelected}
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

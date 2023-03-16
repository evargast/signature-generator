/* eslint-disable no-console */
import type { Selection } from "@adobe/react-spectrum";
import { ActionGroup, Item } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import React, { FC } from "react";

interface Props {
    defaultIsBold: boolean;
    defaultIsItalics: boolean;
}

const ActionGroupButtonComponent: FC<Props> = ({ defaultIsBold, defaultIsItalics }) => {
    const buttonStatus = {
        isBold: defaultIsBold,
        isItalics: defaultIsItalics,
    };

    const [selected, setSelected] = React.useState<Selection>(new Set([]));

    React.useEffect(() => {
        selected.forEach((element: string) => {
            if (element === "bold") {
                buttonStatus.isBold = !buttonStatus.isBold;
            }
            if (element === "italics") {
                buttonStatus.isItalics = !buttonStatus.isItalics;
            }
        });
        console.log(buttonStatus);
    }, [selected]);

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

export { ActionGroupButtonComponent };

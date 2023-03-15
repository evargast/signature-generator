/* eslint-disable no-console */
import { ActionGroup, Item } from "@adobe/react-spectrum";
import { Text } from "@adobe/react-spectrum";
import TagBold from "@spectrum-icons/workflow/TagBold";
import TagItalic from "@spectrum-icons/workflow/TagItalic";
import React, { FC } from "react";

interface Props {
    defaultIsBold: boolean;
    defaultIsItalics: boolean;
    defaultSelectedKeys: (string | number)[];
}

const ActionGroupButtonComponent: FC<Props> = ({ defaultIsBold, defaultIsItalics, defaultSelectedKeys }) => {
    const buttonStatus = {
        isBold: defaultIsBold,
        isItalics: defaultIsItalics,
        selectedKeys: defaultSelectedKeys,
    };

    const multiButtonHandler = (keys: "all" | Set<string | number>) => {
        buttonStatus.selectedKeys = [...keys];
        console.log(buttonStatus.selectedKeys);

        if (buttonStatus.selectedKeys.length === 0) {
            buttonStatus.isBold = false;
            buttonStatus.isItalics = false;
            console.log(buttonStatus);
            return;
        }

        if (buttonStatus.selectedKeys.length === 2) {
            buttonStatus.isBold = true;
            buttonStatus.isItalics = true;
            console.log(buttonStatus);
            return;
        }

        for (const str of buttonStatus.selectedKeys) {
            if (str === "bold") {
                buttonStatus.isBold = true;
            } else {
                buttonStatus.isBold = false;
            }
            if (str === "italics") {
                buttonStatus.isItalics = true;
            } else {
                buttonStatus.isItalics = false;
            }
        }

        console.log(buttonStatus);
    };

    return (
        <div>
            <ActionGroup
                isEmphasized
                density="compact"
                isQuiet
                selectionMode="multiple"
                selectedKeys={buttonStatus.selectedKeys}
                onSelectionChange={multiButtonHandler}
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

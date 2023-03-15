/* eslint-disable no-console */
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

    /**
     *
     * buttonStatus.isBold === true ==> ['bold']
     * buttonStatus.isItalics === true ==> ['italics']
     * lost dos son true ==> ['bold', 'italics']
     *
     */

    const onActionHandler = (key: string | number) => {
        switch (key) {
            case "bold":
                console.log("Bold button pressed.");
                buttonStatus.isBold = !buttonStatus.isBold;
                console.log(buttonStatus);
                break;

            case "italics":
                console.log("Italics button pressed.");
                buttonStatus.isItalics = !buttonStatus.isItalics;
                console.log(buttonStatus);
                break;

            default:
                break;
        }
    };

    /**
     * Controlled ActionGroup
     * 
       <ActionGroup
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
     */

    return (
        <div>
            <ActionGroup
                onAction={onActionHandler}
                isEmphasized
                density="compact"
                isQuiet
                selectionMode="multiple"
                selectedKeys={["bold"]}
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

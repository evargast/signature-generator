import { ComponentStory } from "@storybook/react";
import React, { ReactElement } from "react";

import { TextStyleOptions } from "./../TextStyleOptions";
import { UsernameInput } from "./UsernameInput";

export default {
    title: "TSX/UsernameInput",
    component: UsernameInput,
    TextStyleOptions,
    argTypes: {
        onClick: {
            control: {
                type: "object",
            },
        },
    },
};

const UsernameInputStory: ComponentStory<typeof UsernameInput> = (args): ReactElement => {
    return <UsernameInput {...args} />;
};

const EmptyTextfieldNoButtons = UsernameInputStory.bind({});
EmptyTextfieldNoButtons.args = {
    text: "",
    isBold: false,
    isItalics: false,
    label: "Name",
};

const EmptyTextfieldBoldOnItalicsOff = UsernameInputStory.bind({});
EmptyTextfieldBoldOnItalicsOff.args = {
    text: "",
    isBold: true,
    isItalics: false,
    label: "Name",
};

const EmptyTextfieldBoldOffItalicsOn = UsernameInputStory.bind({});
EmptyTextfieldBoldOffItalicsOn.args = {
    text: "",
    isBold: false,
    isItalics: true,
    label: "Name",
};

const EmptyTextfieldBoldOnItalicsOn = UsernameInputStory.bind({});
EmptyTextfieldBoldOnItalicsOn.args = {
    text: "",
    isBold: true,
    isItalics: true,
    label: "Name",
};

const FilledTextfieldBoldOffItalicsOff = UsernameInputStory.bind({});
FilledTextfieldBoldOffItalicsOff.args = {
    text: "BoldOffItalicsOff",
    isBold: false,
    isItalics: false,
    label: "Name",
};

const FilledTextfieldBoldOnItalicsOff = UsernameInputStory.bind({});
FilledTextfieldBoldOnItalicsOff.args = {
    text: "BoldOnItalicsOff",
    isBold: true,
    isItalics: false,
    label: "Name",
};

const FilledTextfieldBoldOffItalicsOn = UsernameInputStory.bind({});
FilledTextfieldBoldOffItalicsOn.args = {
    text: "BoldOffItalicsOn",
    isBold: false,
    isItalics: true,
    label: "Name",
};

const FilledTextfieldBoldOnItalicsOn = UsernameInputStory.bind({});
FilledTextfieldBoldOnItalicsOn.args = {
    text: "BoldOnItalicsOn",
    isBold: true,
    isItalics: true,
    label: "Name",
};

export {
    EmptyTextfieldNoButtons,
    EmptyTextfieldBoldOnItalicsOff,
    EmptyTextfieldBoldOffItalicsOn,
    EmptyTextfieldBoldOnItalicsOn,
    FilledTextfieldBoldOffItalicsOff,
    FilledTextfieldBoldOnItalicsOff,
    FilledTextfieldBoldOffItalicsOn,
    FilledTextfieldBoldOnItalicsOn,
};

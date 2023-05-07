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
                variant: "object",
            },
        },
    },
};

const UsernameInputStory: ComponentStory<typeof UsernameInput> = (args): ReactElement => {
    return <UsernameInput {...args} />;
};

const EmptyTextfieldNoButtons = UsernameInputStory.bind({});
EmptyTextfieldNoButtons.args = {
    state: {
        variant: "name",
        textValue: "EmptyTextfieldNoButtons",
        isBold: false,
        isItalics: false,
        style: {},
    },
    label: "Name",
};

const EmptyTextfieldBoldOnItalicsOff = UsernameInputStory.bind({});
EmptyTextfieldBoldOnItalicsOff.args = {
    state: {
        variant: "name",
        textValue: "EmptyTextfieldBoldOnItalicsOff",
        isBold: true,
        isItalics: false,
        style: {},
    },
    label: "Name",
};

const EmptyTextfieldBoldOffItalicsOn = UsernameInputStory.bind({});
EmptyTextfieldBoldOffItalicsOn.args = {
    state: {
        variant: "name",
        textValue: "EmptyTextfieldBoldOffItalicsOn",
        isBold: false,
        isItalics: true,
        style: {},
    },
    label: "Name",
};

const EmptyTextfieldBoldOnItalicsOn = UsernameInputStory.bind({});
EmptyTextfieldBoldOnItalicsOn.args = {
    state: {
        variant: "name",
        textValue: "EmptyTextfieldBoldOnItalicsOn",
        isBold: true,
        isItalics: true,
        style: {},
    },
    label: "Name",
};

const FilledTextfieldBoldOffItalicsOff = UsernameInputStory.bind({});
FilledTextfieldBoldOffItalicsOff.args = {
    state: {
        variant: "name",
        textValue: "FilledTextfieldBoldOffItalicsOff",
        isBold: false,
        isItalics: false,
        style: {},
    },
    label: "Name",
};

const FilledTextfieldBoldOnItalicsOff = UsernameInputStory.bind({});
FilledTextfieldBoldOnItalicsOff.args = {
    state: {
        variant: "name",
        textValue: "FilledTextfieldBoldOnItalicsOff",
        isBold: true,
        isItalics: false,
        style: {},
    },
    label: "Name",
};

const FilledTextfieldBoldOffItalicsOn = UsernameInputStory.bind({});
FilledTextfieldBoldOffItalicsOn.args = {
    state: {
        variant: "name",
        textValue: "FilledTextfieldBoldOffItalicsOn",
        isBold: false,
        isItalics: true,
        style: {},
    },
    label: "Name",
};

const FilledTextfieldBoldOnItalicsOn = UsernameInputStory.bind({});
FilledTextfieldBoldOnItalicsOn.args = {
    state: {
        variant: "name",
        textValue: "BoldOnItalicsOn",
        isBold: true,
        isItalics: true,
        style: {},
    },
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

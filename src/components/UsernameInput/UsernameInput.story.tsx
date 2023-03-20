/**
 *  Component Story Format (CSF) is now encouraged.
 *  More info here: https://storybook.js.org/docs/react/api/csf
 */

import { ComponentStory } from "@storybook/react";
import React, { ReactElement } from "react";

import { UsernameInput } from "./UsernameInput";

export default {
    title: "TSX/UsernameInput",
    component: UsernameInput,
    argTypes: {
        onClick: {
            control: {
                type: "object",
            },
        },
    },
};

const UsernameInputStory: ComponentStory<typeof UsernameInput> = (args): ReactElement => {
    // Shared props may be passed here
    return <UsernameInput {...args} />;
};

// Story specific props are passed here
const Enabled = UsernameInputStory.bind({});

Enabled.args = {
    text: "Hello",
    disabled: false,
};

const Disabled = UsernameInputStory.bind({});
Disabled.args = {
    text: "World",
    disabled: true,
};

export { Enabled, Disabled };

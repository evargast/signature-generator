/**
 *  Component Story Format (CSF) is now encouraged.
 *  More info here: https://storybook.js.org/docs/react/api/csf
 */

import { ComponentStory } from "@storybook/react";
import React, { ReactElement } from "react";

import { ColorPicker } from "./ColorPicker";

export default {
    title: "TSX/ColorPicker",
    component: ColorPicker,
    argTypes: {
        onClick: {
            control: {
                type: "object",
            },
        },
    },
};

const ColorPickerStory: ComponentStory<typeof ColorPicker> = (args): ReactElement => {
    // Shared props may be passed here
    return <ColorPicker {...args} />;
};

// Story specific props are passed here
const Basic = ColorPickerStory.bind({});

Basic.args = {
    // eslint-disable-next-line no-console
    onColorChange: console.log,
};

export { Basic };

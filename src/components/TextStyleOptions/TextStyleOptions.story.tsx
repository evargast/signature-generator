import { ComponentStory } from "@storybook/react";
import React, { ReactElement } from "react";

import { TextStyleOptions } from "./TextStyleOptions";

export default {
    title: "TSX/TextStyleOptions",
    component: TextStyleOptions,
    argTypes: {
        onClick: {
            control: {
                type: "object",
            },
        },
    },
};

const TextStyleOptionsStory: ComponentStory<typeof TextStyleOptions> = (args): ReactElement => {
    return <TextStyleOptions {...args} />;
};

const BoldOffItalicsOff = TextStyleOptionsStory.bind({});
BoldOffItalicsOff.args = {
    isBold: false,
    isItalics: false,
};

const BoldOnItalicsOff = TextStyleOptionsStory.bind({});
BoldOnItalicsOff.args = {
    isBold: true,
    isItalics: false,
};

const BoldOffItalicsOn = TextStyleOptionsStory.bind({});
BoldOffItalicsOn.args = {
    isBold: false,
    isItalics: true,
};

const BoldOnItalicsOn = TextStyleOptionsStory.bind({});
BoldOnItalicsOn.args = {
    isBold: true,
    isItalics: true,
};

export { BoldOffItalicsOff, BoldOnItalicsOff, BoldOffItalicsOn, BoldOnItalicsOn };

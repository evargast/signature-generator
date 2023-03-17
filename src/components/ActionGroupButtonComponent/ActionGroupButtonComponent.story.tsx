import { ComponentStory } from "@storybook/react";
import React, { ReactElement } from "react";

import { ActionGroupButtonComponent } from "./ActionGroupButtonComponent";

export default {
    title: "TSX/ActionGroupButtonComponent",
    component: ActionGroupButtonComponent,
    argTypes: {
        onClick: {
            control: {
                type: "object",
            },
        },
    },
};

const ActionGroupButtonComponentStory: ComponentStory<typeof ActionGroupButtonComponent> = (args): ReactElement => {
    return <ActionGroupButtonComponent {...args} />;
};

const BoldOffItalicsOff = ActionGroupButtonComponentStory.bind({});
BoldOffItalicsOff.args = {
    isBold: false,
    isItalics: false,
};

const BoldOnItalicsOff = ActionGroupButtonComponentStory.bind({});
BoldOnItalicsOff.args = {
    isBold: true,
    isItalics: false,
};

const BoldOffItalicsOn = ActionGroupButtonComponentStory.bind({});
BoldOffItalicsOn.args = {
    isBold: false,
    isItalics: true,
};

const BoldOnItalicsOn = ActionGroupButtonComponentStory.bind({});
BoldOnItalicsOn.args = {
    isBold: true,
    isItalics: true,
};

export { BoldOffItalicsOff, BoldOnItalicsOff, BoldOffItalicsOn, BoldOnItalicsOn };

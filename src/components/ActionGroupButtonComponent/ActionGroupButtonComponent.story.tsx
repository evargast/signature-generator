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
    // Shared props may be passed here
    return <ActionGroupButtonComponent {...args} />;
};

// Story specific props are passed here

const BoldOffItalicsOff = ActionGroupButtonComponentStory.bind({});
BoldOffItalicsOff.args = {
    defaultIsBold: false,
    defaultIsItalics: false,
};

const BoldOnItalicsOff = ActionGroupButtonComponentStory.bind({});
BoldOnItalicsOff.args = {
    defaultIsBold: true,
    defaultIsItalics: false,
};

const BoldOffItalicsOn = ActionGroupButtonComponentStory.bind({});
BoldOffItalicsOn.args = {
    defaultIsBold: false,
    defaultIsItalics: true,
};

const BoldOnItalicsOn = ActionGroupButtonComponentStory.bind({});
BoldOnItalicsOn.args = {
    defaultIsBold: true,
    defaultIsItalics: true,
};

export { BoldOffItalicsOff, BoldOnItalicsOff, BoldOffItalicsOn, BoldOnItalicsOn };

/**
 *  Component Story Format (CSF) is now encouraged.
 *  More info here: https://storybook.js.org/docs/react/api/csf
 */

//import { action } from "@storybook/addon-actions";
import { Story } from "@storybook/react";
import React, { ComponentProps, ReactElement } from "react";

import TablePreview from "./TablePreview";

export default {
    title: "TSX/TablePreview",
    component: TablePreview,
};

const TablePreviewStory: Story = (
    args: ComponentProps<typeof TablePreview>,
): ReactElement => {
    // Shared props may be passed here
    return <TablePreview {...args} />;
};

// Story specific props are passed here
const Enabled = TablePreviewStory.bind({});

export { Enabled };

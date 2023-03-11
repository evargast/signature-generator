import { Story } from "@storybook/react";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { ReactElement, useEffect } from "react";

import ImgInput from "./ImgInput";

export default {
    title: "TSX/ImgInput",
    component: ImgInput,
    argTypes: {
        onClick: {
            control: {
                type: "object",
            },
        },
    },
};

const ImgInputStory: Story<{ url: string }> = ({ url }): ReactElement => {
    const { setImgUrl } = useSignatureContext();

    useEffect(() => {
        setImgUrl(url);
    }, []);

    return <ImgInput />;
};

// Story specific props are passed here
const WithValidLink = ImgInputStory.bind({});
WithValidLink.args = {
    url: "https://cdn.britannica.com/25/7225-004-65F33B16/Flag-Costa-Rica.jpg",
};

const EmptyLink = ImgInputStory.bind({});
EmptyLink.args = {
    url: undefined,
};

const InvalidLink = ImgInputStory.bind({});
InvalidLink.args = {
    url: "https://invalid.com",
};

export { WithValidLink, EmptyLink, InvalidLink };

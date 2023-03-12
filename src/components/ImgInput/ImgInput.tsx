import { Flex, TextField } from "@adobe/react-spectrum";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC, useEffect, useState } from "react";

interface Props {}

const ImgInput: FC<Props> = () => {
    const { imgUrl, setImgUrl } = useSignatureContext();
    const [urlValidation, setUrlValidation] = useState<"invalid" | "valid">();
    const urlRegex = new RegExp(/(https?:\/\/.*\.(?:png|jpg))/i);

    useEffect(() => {
        // if on load there's already an img url set, lets validate it
        if (imgUrl !== undefined) {
            validateURL(imgUrl);
        }
    }, [imgUrl]);

    const validateURL = (input: string) => {
        setUrlValidation(urlRegex.test(input) ? "valid" : "invalid");
    };

    const onChangeHandler = (input: string) => {
        setImgUrl(input);
    };

    return (
        <Flex gap="size-150" wrap alignItems="center">
            <TextField
                label="Image url"
                validationState={urlValidation}
                value={imgUrl}
                onChange={onChangeHandler}
                description="Link must be of a png or jpg image"
                width="size-3600"
            />
            {imgUrl !== undefined && urlValidation === "valid" ? <img height="50px" src={imgUrl} /> : <></>}
        </Flex>
    );
};
export default ImgInput;

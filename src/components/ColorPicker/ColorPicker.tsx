import { ActionButton, Content, Dialog, DialogTrigger, Divider, Heading, Text } from "@adobe/react-spectrum";
import { ColorArea } from "@react-spectrum/color";
import { parseColor } from "@react-stately/color";
import TextColor from "@spectrum-icons/workflow/TextColor";
import React, { FC, useState } from "react";

interface Props {
    defaultColor: string;
}

const ColorPicker: FC<Props> = ({ defaultColor = "hsl(50, 100%, 50%)" }) => {
    const [currentValue, setCurrentValue] = useState(parseColor(defaultColor));
    const [finalValue, setFinalValue] = useState(parseColor(defaultColor));

    return (
        <DialogTrigger type="popover">
            <ActionButton>
                <TextColor />
            </ActionButton>
            <Dialog>
                <Heading>Popover</Heading>
                <Divider />
                <Content>
                    <ColorArea value={currentValue} onChange={setCurrentValue} onChangeEnd={setFinalValue} />
                    <pre>Current value: {currentValue.toString("hsl")}</pre>
                    <pre>Final value: {finalValue.toString("hsl")}</pre>
                    <Text>Chose a color</Text>
                </Content>
            </Dialog>
        </DialogTrigger>
    );
};

export { ColorPicker };

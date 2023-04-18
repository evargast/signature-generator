import { ActionButton, Dialog, DialogTrigger, Flex } from "@adobe/react-spectrum";
import { ColorArea, ColorField } from "@react-spectrum/color";
import { parseColor } from "@react-stately/color";
import { Color } from "@react-types/color";
import TextColor from "@spectrum-icons/workflow/TextColor";
import React, { FC, useState } from "react";

export interface ColorPickerProps {
    onColorChange: (color: Color) => void;
    defaultColor?: string;
}

const ColorPicker: FC<ColorPickerProps> = ({ onColorChange, defaultColor = "#EDFA16" }) => {
    const [currentValue, setCurrentValue] = useState<Color>(parseColor(defaultColor));
    const [finalValue, setFinalValue] = useState<Color>(parseColor(defaultColor));

    const handleDialogClose = (isOpen: boolean) => {
        if (!isOpen) {
            onColorChange(finalValue);
        }
    };

    const manuallyUpdateColors = (color: Color | null) => {
        if (color !== null) {
            setCurrentValue(color);
            setFinalValue(color);
        }
    };

    const onInputHandler = (event: React.FormEvent<HTMLInputElement>) => {
        const value = (event.target as HTMLInputElement).value;

        // it's a complete hex input
        if (value.length === 7) {
            manuallyUpdateColors(parseColor(value));
        }
    };

    return (
        <DialogTrigger type="popover" onOpenChange={handleDialogClose}>
            <ActionButton isQuiet>
                <TextColor />
            </ActionButton>
            <Dialog width="100px">
                <Flex gridRow="1/-1" gridColumn="1/-1" direction="column">
                    <ColorField
                        label="Select a color"
                        value={currentValue}
                        onChange={manuallyUpdateColors}
                        onInput={onInputHandler}
                        width="100%"
                    />
                    <ColorArea
                        minWidth="100%"
                        justifySelf={"center"}
                        value={currentValue}
                        onChange={setCurrentValue}
                        onChangeEnd={setFinalValue}
                    />
                </Flex>
            </Dialog>
        </DialogTrigger>
    );
};

export { ColorPicker };

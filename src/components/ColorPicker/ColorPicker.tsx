import { ActionButton, Dialog, DialogTrigger } from "@adobe/react-spectrum";
import { ColorArea } from "@react-spectrum/color";
import { parseColor } from "@react-stately/color";
import { Color } from "@react-types/color";
import TextColor from "@spectrum-icons/workflow/TextColor";
import React, { FC, useState } from "react";

interface Props {
    handleColorChange: (color: Color) => void;
    defaultColor: string;
}

const ColorPicker: FC<Props> = ({ handleColorChange, defaultColor = "hsl(50, 100%, 50%)" }) => {
    const [currentValue, setCurrentValue] = useState<Color>(parseColor(defaultColor));
    const [finalValue, setFinalValue] = useState<Color>(parseColor(defaultColor));

    const handleDialogClose = (isOpen: boolean) => {
        if (!isOpen) {
            handleColorChange(finalValue);
        }
    };

    return (
        <DialogTrigger type="popover" onOpenChange={handleDialogClose}>
            <ActionButton>
                <TextColor />
            </ActionButton>
            <Dialog>
                <ColorArea
                    minWidth="400px"
                    gridColumn={"1/-1"}
                    justifySelf={"center"}
                    value={currentValue}
                    onChange={setCurrentValue}
                    onChangeEnd={setFinalValue}
                />
            </Dialog>
        </DialogTrigger>
    );
};

export { ColorPicker };

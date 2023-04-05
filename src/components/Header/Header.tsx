import { Flex } from "@adobe/react-spectrum";
import { ToggleButton } from "@adobe/react-spectrum";
import ClassicGridView from "@spectrum-icons/workflow/ClassicGridView";
import React, { FC, useState } from "react";

interface Props {
    isToggled?: boolean;
}

const Header: FC<Props> = ({ isToggled = false }) => {
    const [selected, setSelected] = useState(isToggled);

    return (
        <Flex direction="row" alignItems="baseline" justifyContent="space-between">
            <h1>Signature Generator</h1>
            <ToggleButton isQuiet onChange={setSelected} isSelected={selected}>
                <ClassicGridView />
            </ToggleButton>
        </Flex>
    );
};

export { Header };

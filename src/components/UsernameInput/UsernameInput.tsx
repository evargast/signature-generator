import { TextField } from "@adobe/react-spectrum";
import { Flex } from "@adobe/react-spectrum";
import React, { FC } from "react";

import { TextStyleOptions } from "./../TextStyleOptions"; // component imported

interface Props {
    text?: string;
    onChange?: () => void;
}

const UsernameInput: FC<Props> = ({}) => {
    const [nameValue, setNameValue] = React.useState("Hello World");
    // const [buttonValues, setButtonValues] = React.useState<string[]>([]);
    // const [nameValue, setNameValue] = React.useState("Hello World");

    //buttonValuesStates to be set into this state.
    // const [buttonValues, setButtonValues] = React.useState<string[]>([]);

    // text = nameValue;
    // eslint-disable-next-line no-console
    // console.log(text);

    //function to be passed as an an optional onChange function,
    //  as a prop to the button group component

    // const onChange: (selectedKeys: string[]) => void) =>{
    //     setButtonValues(selectedKeys);
    // }

    const handleButtonChange = (values: (string | number)[]) => {
        //printing the button values.
        // eslint-disable-next-line no-console
        console.log(values);
    };

    // eslint-disable-next-line no-console
    //console.log(nameValue);

    return (
        <div>
            <Flex gap="size-200" alignItems="center">
                <TextField label="Name" onChange={setNameValue} value={nameValue} />

                <Flex marginTop="size-300">
                    {/* // eslint-disable-next-line no-console */}
                    {/* setting the new prop to read the child data */}
                    <TextStyleOptions onChange={handleButtonChange} />
                </Flex>
            </Flex>
            {/* <p>Selected Keys: {buttonValues.join(", ")}</p> */}
        </div>
    );
};

export { UsernameInput };

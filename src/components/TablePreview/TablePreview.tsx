import { Button } from "@adobe/react-spectrum";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC } from "react";

interface Props {}

const TablePreview: FC<Props> = ({}) => {
    const { name } = useSignatureContext();

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <style>{`table, td {border: 1px solid black;}`}</style>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan={3}>Image Taking 3 cells</td>
                            <td
                                style={{
                                    fontWeight: name.cssBold,
                                    fontStyle: name.cssItalics,
                                }}
                            >
                                {name.textValue}
                            </td>
                            <td>Phone Number</td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>Email</td>
                        </tr>
                        <tr>
                            <td>Company</td>
                            <td>LinkedIn</td>
                        </tr>
                    </tbody>
                </table>
                <Button
                    marginTop="size-150"
                    variant="accent"
                    width="100%"
                    onPress={() => {
                        // eslint-disable-next-line no-console
                        console.log("Copied text!");
                    }}
                >
                    Copy
                </Button>
            </div>
        </>
    );
};
export default TablePreview;

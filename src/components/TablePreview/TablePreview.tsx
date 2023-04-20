import { Button, Flex } from "@adobe/react-spectrum";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC, useRef } from "react";

interface Props {}

const TablePreview: FC<Props> = ({}) => {
    const { name } = useSignatureContext();

    const tableRef = useRef<HTMLTableElement>(null);

    const handleCopy = () => {
        if (tableRef.current) {
            copyTableToClipboard(tableRef.current);
        }
    };

    const copyTableToClipboard = (table: HTMLTableElement) => {
        const range = document.createRange();
        range.selectNode(table);
        const selection = window.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("copy");
            selection.removeAllRanges();
            // eslint-disable-next-line no-console
            console.log("Copied text!");
        }
    };

    return (
        <Flex direction="column">
            <style>{`table, td {border: 1px solid black;}`}</style>
            <table ref={tableRef}>
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
            </table>

            <Button marginTop="size-150" variant="accent" width="100%" onPress={handleCopy}>
                Copy
            </Button>
        </Flex>
    );
};
export default TablePreview;

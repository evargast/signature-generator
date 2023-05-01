import { Button, Flex } from "@adobe/react-spectrum";
import { ToastContainer, ToastQueue } from "@react-spectrum/toast";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC, useRef } from "react";

interface Props {}

/**
 * This component *must* be pure html with inline styling, otherwise we will not be able to copy & paste it into an email.
 */
const TablePreview: FC<Props> = ({}) => {
    const { name, imgUrl } = useSignatureContext();

    const tableRef = useRef<HTMLTableElement>(null);

    const handleCopy = () => {
        if (tableRef.current) {
            copyTableToClipboard(tableRef.current);
        }
    };

    const copyTableToClipboard = (table: HTMLTableElement) => {
        const htmlData = new ClipboardItem({
            "text/html": new Blob([table.outerHTML], { type: "text/html" }),
        });

        navigator.clipboard.write([htmlData]);
        ToastQueue.positive("Signature copied!", { timeout: 5000 });
    };

    return (
        <Flex direction="column">
            <style>{`table, td {border: 1px solid black;}`}</style>
            <table ref={tableRef}>
                <tbody>
                    <tr>
                        <td rowSpan={3} align="center">
                            <img src={imgUrl} height="60"></img>
                        </td>
                        <td style={name.style}>{name.textValue}</td>
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

            <ToastContainer />
            <Button marginTop="size-150" variant="accent" width="100%" onPress={handleCopy}>
                Copy
            </Button>
        </Flex>
    );
};
export default TablePreview;

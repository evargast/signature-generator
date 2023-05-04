import { Button, Flex } from "@adobe/react-spectrum";
import { ToastContainer, ToastQueue } from "@react-spectrum/toast";
import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC, useRef } from "react";

interface Props {}

/**
 * This component *must* be pure html with inline styling, otherwise we will not be able to copy & paste it into an email.
 */
const TablePreview: FC<Props> = ({}) => {
    const { name, imgUrl, email, title, company, linkedin, phone } = useSignatureContext();

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
        <Flex direction="column" height="100%" alignItems="center" marginBottom="size-1200">
            <style>{`table, td {border: 1px solid black;}`}</style>
            <table ref={tableRef}>
                <tbody>
                    <tr>
                        <td rowSpan={3} align="center">
                            <img src={imgUrl} height="60"></img>
                        </td>
                        <td style={name.style}>{name.textValue}</td>
                        <td style={phone.style}>{phone.textValue}</td>
                    </tr>
                    <tr>
                        <td style={title.style}>{title.textValue}</td>
                        <td style={email.style}>{email.textValue} </td>
                    </tr>
                    <tr>
                        <td style={company.style}>{company.textValue}</td>
                        <td style={linkedin.style}>{linkedin.textValue}</td>
                    </tr>
                </tbody>
            </table>

            <ToastContainer />
            <Button marginTop="size-150" variant="accent" width="10%" onPress={handleCopy}>
                Copy
            </Button>
        </Flex>
    );
};
export default TablePreview;

import { useSignatureContext } from "providers/SignatureProvider";
import React, { FC } from "react";

interface Props {}

const TablePreview: FC<Props> = ({}) => {
    const { name } = useSignatureContext();

    return (
        <>
            <style>{`table, td {border: 1px solid black;}`}</style>
            <table>
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
        </>
    );
};
export default TablePreview;

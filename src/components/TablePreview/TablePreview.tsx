import React, { FC } from "react";

interface Props {}

const TablePreview: FC<Props> = ({}) => {
    return (
        <>
            <style>{`
        table, td {
            border: 1px solid black;
          }
  `}</style>
            <table>
                <tr>
                    <td rowSpan={3}>Image Taking 3 cells</td>
                    <td>Name</td>
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

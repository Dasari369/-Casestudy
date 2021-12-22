import React from 'react';
import ColumnComponent from './ColumnComponent';

function TableComponent(){
    return(
        <table border="1">
            <tbody>
                <tr>
                    <ColumnComponent />
                    <ColumnComponent />
                    <ColumnComponent />

                </tr>
            </tbody>
        </table>
    )
}
export default TableComponent;
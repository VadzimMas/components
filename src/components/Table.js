import React, { Fragment } from "react"

function Table({ data, config }) {

    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>
        }
        else {
            return (
                <th
                    className='p-3'
                    key={column.label}
                >
                    {column.label}
                </th>
            )
        }
    })

    const renderedRows = data.map((row) => {
        const renderedCells = config.map((column) => {
            return <td key={column.label} className='p-3'>{column.render(row)}</td>
        })

        return (
            <tr className="border-b" key={row.name}>
                {renderedCells}
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )

}

export default Table
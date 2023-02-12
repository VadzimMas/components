import React, { useState } from "react"
import { GoTriangleDown, GoTriangleUp } from "react-icons/go"
import Table from "./Table"

function SortableTable({ config, data }) {

    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)

    const handleClick = (label) => {
        if (sortBy && sortBy !== label) {
            setSortOrder('asc')
            setSortBy(label)
            return
        }

        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null)
        }
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column
        }
        else {
            return {
                ...column,
                header: () => {
                    return (
                        <th
                            className="p-3 flex items-center cursor-pointer hover:bg-gray-100"
                            onClick={() => { handleClick(column.label) }}
                        >
                            {column.label}
                            <div className="ml-2">
                                {getIcons(column.label, sortBy, sortOrder)}
                            </div>
                        </th>
                    )
                }
            }
        }
    })

    let sortedData = data

    if (sortedData && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reversOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reversOrder
            }
            else {
                return (valueA - valueB) * reversOrder
            }
        })
    }

    return <Table data={sortedData} config={updatedConfig} />
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return (
            <div>
                <GoTriangleUp />
                <GoTriangleDown />
            </div>
        )
    }

    if (sortOrder === null) {
        return (
            <div>
                <GoTriangleUp />
                <GoTriangleDown />
            </div>
        )
    } else if (sortOrder === 'asc') {
        return (
            <div>
                <GoTriangleUp />
            </div>
        )
    } else if (sortOrder === 'desc') {
        return (
            <div>
                <GoTriangleDown />
            </div>
        )
    }
}

export default SortableTable
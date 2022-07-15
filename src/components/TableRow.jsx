import React, { Component } from 'react'

export default class TableRow extends Component {
    render() {
        return (
            <thead>
                <tr>
                    {TableHead()}
                </tr>
            </thead>
        )
    }
}


function TableHead() {
    return (
        <>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
        </>
    )
}
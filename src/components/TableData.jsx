import React from 'react'

export default function TableData({ mov, delMovies, updateMovieStatus }) {
    return (
        <tr >
            {cellValue(mov, delMovies, updateMovieStatus)}
        </tr>
    )
}


function cellValue(mov, delMovies, updateMovieStatus) {
    return (
        <>
            <th scope="row" >{mov.id}</th>
            <td>{mov.name}</td>
            <td>{mov.Genre}</td>
            <td>{mov.Stock}</td>
            {mov.Status === "Flop" ?
                <td><button type="button" className="btn btn-danger btn-sm" onClick={() => updateMovieStatus(mov.id)}>{mov.Status}</button></td> :
                <td><button type="button" className="btn btn-success btn-sm" onClick={() => updateMovieStatus(mov.id)}>{mov.Status}</button></td>}
            <td><button type="button" className="btn btn-danger btn-sm" onClick={() => delMovies(mov.id)}>Delete</button></td>
        </>
    )

}
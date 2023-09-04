import React from 'react'

const Allusers = () => {
    return <>
        <br />
        <br />
        <table className="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th scope="colSpan">#</th>
                    <th scope="colSpan">First</th>
                    <th scope="colSpan">Last</th>
                    <th scope="colSpan">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>





    </>
}

export default Allusers
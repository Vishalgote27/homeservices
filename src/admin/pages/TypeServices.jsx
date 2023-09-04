import React from 'react'

const TypeServices = () => {
    return <>
        <div className="container mt-4">
            <div className='d-flex justify-content-between'>
                <h1>Serivces Types</h1>
                <button type="button" className="btn btn-primary btn-sm">Add new</button>
            </div>
            <br />
            <table
                id="datatable"
                className="table"
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Services</th>
                        <th>Email</th>
                        <th>createdAt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Home Repairing Services</td>
                        <td>Jhondoe@gmail.com</td>
                        <td>10/10/22</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Appliance Repair Services</td>
                        <td>smae@gmail.com</td>
                        <td>10/11/22</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Interior Services</td>
                        <td>Jhondoe3@gmail.com</td>
                        <td>10/10/22</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Clean</td>
                        <td>Jhondoe4@gmail.com</td>
                        <td>10/10/24</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>home exterior wash</td>
                        <td>Jhondoe5@gmail.com</td>
                        <td>10/10/21</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Home Repairing Services</td>
                        <td>Jhondoe@gmail.com</td>
                        <td>10/10/22</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Appliance Repair Services</td>
                        <td>smae@gmail.com</td>
                        <td>10/11/22</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Interior Services</td>
                        <td>Jhondoe3@gmail.com</td>
                        <td>10/10/22</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Clean</td>
                        <td>Jhondoe4@gmail.com</td>
                        <td>10/10/24</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>home exterior wash</td>
                        <td>Jhondoe5@gmail.com</td>
                        <td>10/10/21</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>home exterior wash</td>
                        <td>Jhondoe5@gmail.com</td>
                        <td>10/10/21</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>home exterior wash</td>
                        <td>Jhondoe5@gmail.com</td>
                        <td>10/10/21</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </>
}

export default TypeServices
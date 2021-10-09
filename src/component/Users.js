import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import { Table, Button } from 'antd';

const Users = () => {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const loadUsers = async () => {
        try {
            const res = await axios.get('http://localhost:8000/getusers')
            setUsers(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(async () => {
        loadUsers();
    }, [])

    const deletUser = async (user) => {
        await axios.post(`http://localhost:8000/delete`, { id: user._id })
        alert(`${user.name} User has been deleted`)
        loadUsers();
    }

    const updateuser = async (user) => {
        history.push(`/Updateuser/${user._id}`)
    }

    const columns = [
        {
            title: 'Id',
            key: 'Id',
            render: (index, data, id) => (
                id + 1
            )
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Work',
            dataIndex: 'work',
            key: 'work',
        },
        {
            title: 'Actions',
            key: 'Actions',
            render: (user) => {

                return (
                    <>
                        <Button onClick={() => updateuser(user)}>
                            Edit
                        </Button>
                        <Button danger onClick={() => deletUser(user)}>
                            Delete
                        </Button>
                    </>
                )
            }
        },
    ];

    return (
        <>

            <Table dataSource={users} columns={columns} />;

            {/* <table style={{ width: '100%' }}>
                <thead>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Phone </th>
                    <th> Work </th>
                    <th> Actions </th>
                </thead>
                <tbody style={{ textAlign: 'center' }}>
                    {users?.map((user, index) => (
                        <tr>
                            <td> {index + 1} </td>
                            <td> {user.name} </td>
                            <td> {user.email} </td>
                            <td> {user.phone} </td>
                            <td> {user.work} </td>

                            <td>
                                <span>
                                    <button onClick={() => updateuser(user)}>Edit</button>
                                </span>
                                <span>
                                    <button onClick={() => deletUser(user)}>Delete</button>
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </>
    )
}

export default Users;
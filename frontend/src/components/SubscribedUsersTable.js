import React, { Component } from 'react'

//self-made Components
import SubscribedUsersTableData from './SucscribedUsersTableData';

//Bootstrap Components
import {Table} from 'react-bootstrap'

//axios instance
import instance from '../axios'

export default class SubscribedUsersTable extends Component {
    constructor(){
        super();
        this.state = {
            'email': []
        }
    }

    componentDidMount(){
        instance.get('/core/subscribers')
            .then(response => {
                console.log(response);
                if(response.data.length>0) {
                    this.setState({
                        email: response.data
                    })
                }
            })
    }

    render() {
        return (
            <>
                <div className="text-center mb-4">
                    <h4>Subscribers</h4>
                </div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Subscribed Email </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.email.map((emails) =>
                                <SubscribedUsersTableData
                                    id= {emails.id}
                                    email = {emails.emails}
                                />
                            )
                        }
                    </tbody>
                </Table>
            </>
        )
    }
}

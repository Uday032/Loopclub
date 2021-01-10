import React, { Component } from 'react'

export default class SucscribedUsersTableData extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.email}</td>
            </tr>
        )
    }
}

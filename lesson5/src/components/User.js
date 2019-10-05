import React, { Component } from 'react';
import { Link } from 'react-router';

export default class User extends Component {
    render() {
        const {username, name, email, phone, website, noLink} = this.props;
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    {
                        !noLink ?
                        <Link to={`/users/${this.props.id}`}>{username}</Link> :
                        username
                    }
                </div>
                <div className="card-body text-secondary">
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                    <p>{website}</p>
                    {noLink ? <Link className="card-link" to='/users/'>Back to all Users</Link> : null }
                </div>
            </div>
        )
    }
}

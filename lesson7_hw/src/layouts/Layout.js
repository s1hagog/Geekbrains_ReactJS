import React from 'react';
// import {Link} from 'react-router';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';


export default class Layout extends React.Component{
    constructor(props){
        super(props);

        this.brand = 'React Blog';

    }

    isActiveMain(href) { 
        return window.location.pathname == href;
    }

    isActive(href) {
        return window.location.pathname.includes(href);
    }

    render(){
        return(
            <>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActiveMain('/')}>Main</MenuItem>
                    <MenuItem href="/users" active={this.isActive('users')}>Users</MenuItem>
                    <MenuItem href="/posts" active={this.isActive('posts')}>Posts</MenuItem>
                    <MenuItem href="/comments" active={this.isActive('comments')}>Comments</MenuItem>
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    &copy; 2019
                </div>
            </>
        );
    }
}
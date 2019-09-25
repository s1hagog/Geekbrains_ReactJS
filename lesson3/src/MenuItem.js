import React from 'react';
import PropTypes from 'prop-types';

class MenuItem extends React.Component{
    render() {
        // let title;

        // if(this.props.children){
        //     title = this.props.children;
        // }else{
        //     title = "nothing";
        // }
        return <li>
            <a href = {this.props.href}>{this.props.title}</a>
        </li>
    }
}

MenuItem.defaultProps = {
    title: "title",
    href: '/'
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired
}

export default MenuItem;
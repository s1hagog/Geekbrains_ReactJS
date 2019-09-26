import React from 'react';
import MenuItem from './MenuItem';
import Login from './Login';


export default class Menu extends React.Component{
    render() {
        const items = this.props.items.map((item, index) =>{
            return <MenuItem key={index} href={item.href} title={item.title}/>
        });

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Aleksandr Moshak</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {items}
                    </ul>
                    <Login />
                </div>
            </nav>
        )
    }
}


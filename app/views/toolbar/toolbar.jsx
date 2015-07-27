import React from 'react';
import ToolbarItem from './toolbar-item.jsx';

var Toolbar = React.createClass({
    render: function () {
        'use strict';

        var ToolBarItems = this.props.items.map(function (item, index) {
            return (
                <ToolbarItem
                    type={item.type}
                    text={item.text}
                    icon={item.icon}
                    brand={item.brand}
                    toggle={item.toggle}
                    key={index}
                />
            );
        });

        var className = 'toolbar';
        className += this.props.type ? ' ' + this.props.type : '';

        return (
            <nav className={className}>
                {ToolBarItems}
            </nav>
        );
    }
});

export default Toolbar;

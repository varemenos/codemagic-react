import React from 'react';
import ToolbarItem from './toolbar-item.jsx';

var Toolbar = React.createClass({
    render: function () {
        'use strict';

        var ToolBarItems = this.props.items.map(function (item, index) {
            return (
                <ToolbarItem
                    text={item.text}
                    icon={item.icon}
                    direction={item.direction}
                    hint={item.hint}
                    key={index}
                />
            );
        })

        return (
            <nav className="toolbar">
                {ToolBarItems}
            </nav>
        );
    }
});

export default Toolbar;

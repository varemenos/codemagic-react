import React from 'react';
import ToolbarItem from './toolbar-item.jsx';

var Toolbar = React.createClass({
    getInitialState: function () {
        'use strict';

        return {
            items: this.props.items
        }
    },
    render: function () {
        'use strict';

        var ToolBarItems = this.state.items.map(function (item, index) {
            return (
                <ToolbarItem
                    name={item.name}
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

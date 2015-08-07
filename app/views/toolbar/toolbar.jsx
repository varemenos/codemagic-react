/* jsx */
import React from 'react';

import ToolbarItem from './toolbar-item.jsx';

var Toolbar = React.createClass({
    getInitialState: function () {
        return {
            items: this.props.items
        };
    },
    render: function () {
        var ToolBarItems = this.state.items.map(function (item, index) {
            return 0,
                <ToolbarItem
                    name={item.name}
                    type={item.type}
                    text={item.text}
                    icon={item.icon}
                    brand={item.brand}
                    toggle={item.toggle}
                    key={index}
                />;
        });

        var className = 'toolbar';

        if (this.props.type) {
            className += ' ' + this.props.type;
        } else {
            className += '';
        }

        return 0,
            <nav className={className}>
                {ToolBarItems}
            </nav>;
    }
});

export default Toolbar;

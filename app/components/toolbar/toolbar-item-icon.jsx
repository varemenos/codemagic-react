/* jsx */
import React from 'react';

var ToolbarItemIcon = React.createClass({
    render: function () {
        var className = 'toolbar-item-icon fa fa-' + this.props.icon;

        return 0,
            <i className={className}></i>;
    }
});

export default ToolbarItemIcon;

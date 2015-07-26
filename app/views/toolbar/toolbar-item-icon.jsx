import React from 'react';

var ToolbarItemIcon = React.createClass({
    render: function () {
        'use strict';

        var className = 'toolbar-item-icon fa fa-' + this.props.icon;

        return (
            <i className={className}></i>
        );
    }
});

export default ToolbarItemIcon;

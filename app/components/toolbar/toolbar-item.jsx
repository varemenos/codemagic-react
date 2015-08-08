/* jsx */
import React from 'react';

import ToolbarItemIcon from './toolbar-item-icon.jsx';
import dispatcher from '../../utilities/dispatcher.jsx';

var ToolbarItem = React.createClass({
    toggleEditor: function () {
        this.setState({
            toggle: !this.state.toggle,
            className: this.getClassName({
                toggle: !this.state.toggle,
                type: this.props.type,
                brand: this.props.brand
            })
        });

        dispatcher.dispatch({
            actionType: 'enable-editor',
            name: this.props.name,
            enabled: this.state.toggle
        });

        dispatcher.dispatch({
            actionType: 'resize-editor'
        });
    },
    onClick: function (e) {
        var isFullscreenItem = this.props.name === 'fullscreen';

        var isEditorItem = [
            'markup',
            'style',
            'script'
        ].filter(function (name) {
            return name === this.props.name;
        }.bind(this)).length;

        if (isEditorItem) {
            this.toggleEditor();
        } else if (isFullscreenItem) {
            dispatcher.dispatch({
                actionType: 'toggle-result-fullscreen'
            });
        }
    },
    componentDidMount: function () {
        this.getDOMNode().addEventListener('click', this.onClick);
    },
    getInitialState: function () {
        return {
            toggle: this.props.toggle,
            className: this.getClassName({
                toggle: this.props.toggle,
                type: this.props.type,
                brand: this.props.brand
            })
        };
    },
    getClassName: function (attrs) {
        var className = 'toolbar-item';

        if (typeof attrs.toggle !== 'undefined') {
            className += ' toggle';

            if (attrs.toggle) {
                className += ' active';
            }
        }

        className += ['expand', 'separator', 'space'].filter(function (prop) {
            return attrs.type === prop;
        }).map(function (prop) {
            return ' toolbar-item-' + prop;
        }).join(' ');

        if (attrs.brand) {
            className += ' toolbar-item-brand';
        }

        return className;
    },
    render: function () {
        var ToolbarContent;

        if (this.props.type === 'icon') {
            ToolbarContent = <ToolbarItemIcon icon={this.props.icon} />;
        } else if (this.props.type === 'text') {
            ToolbarContent = this.props.text;
        }

        return 0,
            <button className={this.state.className}>
                {ToolbarContent}
            </button>;
    }
});

export default ToolbarItem;

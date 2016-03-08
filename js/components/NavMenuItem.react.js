var React = require('react');
var ReactPropTypes = React.PropTypes;

var classNames = require('classnames');

var NavMenuItem = React.createClass({

    propTypes: {
        navMenuItem: ReactPropTypes.object.isRequired
    },

    getInitialState: function() {
        return {
        };
    },

    render: function() {
        var navMenuItem = this.props.navMenuItem;

        return (
          <li key={navMenuItem.id} className="sidebar-brand nav-menu-item">
            <a id={navMenuItem.html_id} href={navMenuItem.url}><span className={navMenuItem.span_class} aria-hidden='true'></span> {navMenuItem.title}</a>
          </li>
        );
    }

});

module.exports = NavMenuItem;

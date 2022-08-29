import React from "react";
import { LoginContext } from './context/loginContext';
import { When } from 'react-if';

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
    }
    static contextType = LoginContext;
    render() {
        return (
            <When condition={this.context.login && this.context.canDo(this.props.action)}>
                {this.props.children}
            </When>
        )
    }
}
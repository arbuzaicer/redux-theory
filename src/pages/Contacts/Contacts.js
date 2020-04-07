import React from 'react';
import {connect} from "react-redux";

const Contacts = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        title: state.contacts.title
    }
};

export default connect(mapStateToProps)(Contacts);
import React from 'react'
import { Header } from 'semantic-ui-react';
import { useStore } from '../../../store/store';

function Homepage(props) {
    // @ts-ignore
    const currentUser = useStore(state => state.currentUser)
    console.log("from homepage " + currentUser)
    return (
        <div className="ui container">
            <h1 className="ui large header">Hello Homepage</h1>
        </div>
    )
}

export default Homepage

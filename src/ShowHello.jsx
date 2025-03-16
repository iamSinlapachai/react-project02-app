// rcfe
import React from 'react'

function ShowHello() {
    return (
        <>
            <ShowWow/>
            <br/>
            <h1>Hello</h1>
            <br/>
            <ShowWow/>
        </>
    )
}

function ShowWow() {
    return (
        <>
            <h1>Wow Wow Wow</h1>
        </>
    )
}

export default ShowHello

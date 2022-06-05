import React, { Component, useState, useEffect } from 'react';

// State adalah sebuah variable yang dapat diubah oleh komponen. State dapat berupa string, number, boolean, dan array. State dapat berupa object.

const Post = (props) => {

    const [counter, setCounter] = useState(0); // Mendefinisikan state counter
    const [name, setName] = useState("Panji"); // Mendefinisikan state name

    useEffect(() => {}, [])

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => {
                setCounter(counter + 1)
            }}></button>

            <h1>{props.nama}</h1>
            <h2>{props.umur}</h2>
        </div>
    );
}

export default Post;
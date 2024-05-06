import React from 'react'
import { Container } from 'react-bootstrap'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import { useState, useEffect } from 'react'
function html() {
    const [value,setValue] = useState("")
    const [srcDoc, setSrcDoc] = useState(``)
    function handleChange(editor, data, value) {
        setValue(value)
    }
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
        `)
        }, 250);

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <div className='editor-container'>
            <div style={{ backgroundColor: "black", color: 'white', padding: "0.5%" }}>
                C
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                className='controlled-editor'
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: "text/x-csrc",
                    theme: 'dracula',
                    lineNumbers: true
                }}
            />
            <iframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                    />
        </div>
    );
}

export default html

import React from 'react'
import { Container } from 'react-bootstrap'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'
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
            <html>
                <body>${value}</body>
            </html>
        `)
        }, 250);

        return () => clearTimeout(timeout)
    }, [value])

    return (
        <div className='editor-container'>
            <div style={{ backgroundColor: "black", color: 'white', padding: "0.5%" }}>
                HTML
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                className='controlled-editor'
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: "xml",
                    theme: 'material',
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

import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'

function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props
    const [open, setOpen] = useState(false)

    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div className='editor-container'>
            <div className="editor-title" style={{color: 'white'}}>
                {displayName}
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                className='controlled-editor'
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: 'material',
                    lineNumbers: true
                }}
            />
        </div>
    );
}


export default Editor;
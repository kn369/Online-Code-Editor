import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Editor } from "@monaco-editor/react"
import { useState, useEffect } from 'react'

function html() {
    const [value,setValue] = useState("");


    
    return (
        <Container fluid style={{padding: '2%', background: 'black'}}>
            <Container fluid style={{color: 'white', display: "flex", justifyContent: 'space-between', padding: '0%', alignItems: 'center'}}>
                <p style={{fontSize: '1vw'}}>C</p>
                <Button variant="secondary" style={{marginBottom: '1%'}} 
                    onClick={runCode}
                >Run</Button>
            </Container>
            <Editor 
                height="50vh"
                defaultLanguage='c'
                theme="vs-dark"
                value={value}
                onChange={(value)=> setValue(value)}
            />
        </Container>
    );
}

export default html

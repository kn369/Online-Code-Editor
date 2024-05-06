import React, { useState, useEffect } from "react";
import Editor from "../components/editor";
import { Container, Row, Col } from "react-bootstrap";

function EditorPage() {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')

    const [srcDoc, setSrcDoc] = useState(``)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrcDoc(`
            <html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script>
            </html>
        `)
        }, 250);

        return () => clearTimeout(timeout)
    }, [html, css, js])


    return (
        <>
            <div className="pane top-pane">
                <Container fluid>
                    <Row style={{ height: '50vh', backgroundColor: 'black' }}>
                        <Col>
                            <Editor
                                language="xml"
                                displayName="HTML"
                                value={html}
                                onChange={setHtml}
                            />
                        </Col>
                        <Col>
                            <Editor
                                language="css"
                                displayName="CSS"
                                value={css}
                                onChange={setCss}
                            />
                        </Col>
                        <Col>
                            <Editor
                                language="javascript"
                                displayName="JS"
                                value={js}
                                onChange={setJs}
                            />
                        </Col>
                    </Row>
                </Container>
                <div className="pane">
                    <iframe
                        srcDoc={srcDoc}
                        title="output"
                        sandbox="allow-scripts"
                        frameBorder="0"
                        width="100%"
                    />
                </div>
            </div>
        </>
    )
}

export default EditorPage;
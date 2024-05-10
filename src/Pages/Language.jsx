import React from 'react'
import { Container, NavLink, Card, Button, Nav } from 'react-bootstrap'
function Language() {
    return (
        <Container fluid style={{ background: "black", color: "white", height: "100vh"}}>
            <Container style={{ padding: '1%' }}>
                <Card style={{ background: "grey", borderRadius: '1rem', margin: '1%' }}>
                    <Card.Body style={{ padding: '2%' }}>
                        <Card.Title style={{ fontSize: '2vw' }}>HTML</Card.Title>
                        <Card.Text style={{ fontSize: '1vw', textAlign: 'justify' }}>
                            HTML, or Hypertext Markup Language, is the backbone of the World Wide Web. It's a markup language used to create and structure the content of web pages. HTML documents consist of a series of elements, each surrounded by tags, which define the structure and semantics of the content. These elements can include headings, paragraphs, links, images, and more. HTML provides the basic framework for web pages, allowing browsers to interpret and display content as intended by the web developers.
                        </Card.Text><br></br>
                        <Button variant="primary" href="/html">HTML Editor</Button>
                    </Card.Body>
                </Card>
                <Card style={{ background: "grey", borderRadius: '1rem', margin: '1%' }}>
                    <Card.Body style={{ padding: '2%' }}>
                        <Card.Title style={{ fontSize: '2vw' }}>CSS</Card.Title>
                        <Card.Text style={{ fontSize: '1vw', textAlign: 'justify' }}>
                            CSS, or Cascading Style Sheets, is a powerful styling language used to enhance the presentation of HTML documents. While HTML provides the structure and content of a web page, CSS controls the visual aspects, such as layout, colors, fonts, and spacing. With CSS, web designers can create visually appealing and consistent designs across multiple web pages. CSS works by selecting HTML elements and applying styles to them, either directly within the HTML document or externally through separate CSS files. Its flexibility and cascading nature allow for efficient management and customization of website styles, ensuring a polished and cohesive user experience.
                        </Card.Text><br></br>
                        <Button variant="primary" href='/css'>CSS Editor</Button>
                    </Card.Body>
                </Card>
                <Card style={{ background: "grey", borderRadius: '1rem', margin: '1%' }}>
                    <Card.Body style={{ padding: '2%' }}>
                        <Card.Title style={{ fontSize: '2vw' }}>Javascript </Card.Title>
                        <Card.Text style={{ fontSize: '1vw', textAlign: 'justify' }}>
                            JavaScript, often abbreviated as JS, is a versatile programming language primarily used for creating interactive and dynamic content on websites. Unlike HTML and CSS, which focus on structure and presentation respectively, JavaScript adds behavior to web pages, allowing for user interaction, animations, and real-time updates without requiring a page reload. It can manipulate the content and structure of HTML documents, handle events triggered by user actions or browser activity, and interact with server-side scripts to fetch or send data asynchronously. JavaScript is essential for modern web development, powering everything from simple form validations to complex web applications and games, making the web more engaging and responsive.
                        </Card.Text><br></br>
                        <Button variant="primary" href="/js">JS Editor</Button>
                    </Card.Body>
                </Card>
                <Card style={{ background: "grey", borderRadius: '1rem', margin: '1%' }}>
                    <Card.Body style={{ padding: '2%' }}>
                        <Card.Title style={{ fontSize: '2vw' }}>C</Card.Title>
                        <Card.Text style={{ fontSize: '1vw', textAlign: 'justify' }}>
                            C is a powerful and widely used programming language known for its efficiency, flexibility, and versatility. Developed in the early 1970s, C has influenced numerous other programming languages and remains a cornerstone of modern software development. It provides low-level access to system resources, making it ideal for writing operating systems, device drivers, and embedded systems. Additionally, its simple syntax and rich standard library enable developers to create a wide range of applications, from small utilities to large-scale software projects. C is highly portable, allowing code written in C to be compiled and run on various platforms with minimal changes, making it a popular choice for cross-platform development.
                        </Card.Text><br></br>
                        <Button variant="primary" href="/c">C Compiler</Button>
                    </Card.Body>
                </Card>
                <Card style={{ background: "grey", borderRadius: '1rem', margin: '1%' }}>
                    <Card.Body style={{ padding: '2%' }}>
                        <Card.Title style={{ fontSize: '2vw' }}>C++</Card.Title>
                        <Card.Text style={{ fontSize: '1vw', textAlign: 'justify' }}>
                            C++ is a high-level programming language that builds upon the foundation of C with added features for object-oriented programming (OOP). Developed in the 1980s, C++ combines the efficiency and flexibility of C with the concepts of classes, inheritance, polymorphism, and encapsulation, making it suitable for both procedural and object-oriented programming paradigms. It offers strong type-checking, generic programming support via templates, and advanced memory management features like smart pointers. C++ is widely used in a variety of domains, including systems programming, game development, graphical user interface (GUI) development, and large-scale software projects. Its versatility and performance make it a popular choice for building complex and performance-critical applications.
                        </Card.Text><br></br>
                        <Button variant="primary">C++ Compiler</Button>
                    </Card.Body>
                </Card>
                <Card style={{ background: "grey", borderRadius: '1rem', margin: '1%' }}>
                    <Card.Body style={{ padding: '2%' }}>
                        <Card.Title style={{ fontSize: '2vw' }}>Python</Card.Title>
                        <Card.Text style={{ fontSize: '1vw', textAlign: 'justify' }}>
                            Python is a high-level, interpreted programming language known for its simplicity, readability, and versatility. Developed in the late 1980s, Python emphasizes code readability and expressive syntax, making it an ideal language for beginners and experienced programmers alike. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming, and offers dynamic typing and automatic memory management, which simplifies development and debugging processes. Python has a vast standard library and a vibrant ecosystem of third-party packages, providing tools and frameworks for a wide range of applications, including web development, data analysis, machine learning, scientific computing, and automation. Its popularity continues to grow due to its ease of learning, extensive community support, and broad applicability across various industries and domains.
                        </Card.Text><br></br>
                        <Button variant="primary">Python Compiler</Button>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
}

export default Language

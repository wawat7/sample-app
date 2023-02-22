import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import MainLayout from '../../components/MainLayout';
import readmeFile from "../../Page.md"

const Markdown = () => {
    const [content, setContent] = useState("")
    useEffect(() => {
        fetch(readmeFile)
        .then((response) => response.text())
        .then((text) => {
            setContent(text)
        })
    },[])
    return (
        <MainLayout>
            <div style={markdownStyle}>
                <ReactMarkdown children={content} />,
            </div>
        </MainLayout>
    )
}

const markdownStyle = {
    margin: "20px"
}

export default Markdown;

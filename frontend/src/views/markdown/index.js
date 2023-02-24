import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"
import remarkDirective from 'remark-directive'
import remarkHighlightjs from 'remark-highlight.js'
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
                <Card
                    title="Documentation"
                    bordered={false}
                    hoverable
                    style={{
                    width: "80vw",
                    }}
                >
                    <ReactMarkdown children={content} remarkPlugins={[remarkGfm, remarkDirective, remarkHighlightjs]}/>,
                </Card>
            </div>
        </MainLayout>
    )
}

const markdownStyle = {
    margin: "40px 30px",
    display: "flex",
    justifyContent: "center",
}

export default Markdown;

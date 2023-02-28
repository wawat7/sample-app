import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import remarkHtml from "remark-html"
import remarkGfm from "remark-gfm"
import remarkDirective from 'remark-directive'
import remarkHighlightjs from 'remark-highlight.js'
import remarkUnwrapImages from "remark-unwrap-images"
import rehypeHighlight from "rehype-highlight"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
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
                    className="documentation-card"
                    bordered={false}
                    hoverable
                    style={{
                    width: "80vw",
                    }}
                >
                    <ReactMarkdown children={content} remarkPlugins={[remarkGfm, remarkDirective, remarkHighlightjs, remarkUnwrapImages, remarkHtml]} rehypePlugins={[rehypeHighlight]} 
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || "");
                            return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, "")}
                                language={match[1]}
                                style={dark}
                                {...props}
                            />
                            ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                            );
                        },
                        }}
                    />,
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

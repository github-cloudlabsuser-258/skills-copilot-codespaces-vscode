import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    return (
        <div>
            <textarea
                value={markdown}
                onChange={(e) => setMarkdown(e.target.value)}
            />
            <ReactMarkdown children={markdown} />
        </div>
    );
}


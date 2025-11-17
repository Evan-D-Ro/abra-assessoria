import { useState, useEffect } from "react";

const TypewriterText = ({ texts = [], speed = 80, pause = 900 }) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !deleting) {
            setTimeout(() => setDeleting(true), pause);
            return;
        }

        if (subIndex === 0 && deleting) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
            setDisplayText(texts[index].substring(0, subIndex));
        }, deleting ? speed / 2 : speed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting, texts, speed, pause]);

    return (
        <span className="highlight-container">
            <span className="highlight-bg" />
            <span className="rounded-md bg-[#ceb14d] text-primary px-2">{displayText}</span>
        </span>
    );
};

export default TypewriterText;

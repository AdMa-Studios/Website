import './ToolsSlider.css';

const ToolsSlider = () => {
    const tools = [
        { name: 'canva', ext: 'webp' },
        { name: 'github', ext: 'svg' },
        { name: 'figma', ext: 'svg' },
        { name: 'chatgpt', ext: 'png' },
        { name: 'gemini', ext: 'png' },
        { name: 'cursor', ext: 'jpeg' },
        { name: 'xcode', ext: 'png' },
        { name: 'vscode', ext: 'png' },
        { name: 'firebase', ext: 'png' }
    ];

    // Duplicate the tools array for seamless infinite scroll
    const doubledTools = [...tools, ...tools];

    return (
        <div className="tools-slider-wrapper">
            <div className="tools-slider-container">
                <h3 className="tools-title">Tools We Use</h3>
                <div className="tools-slider">
                    <div className="tools-track">
                        {doubledTools.map((tool, index) => (
                            <div key={index} className="tool-item">
                                <img
                                    src={`/logos/${tool.name}.${tool.ext}`}
                                    alt={tool.name}
                                    className="tool-logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolsSlider;

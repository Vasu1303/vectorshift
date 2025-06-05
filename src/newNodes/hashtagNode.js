import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const HashtagNode = ({ id, data }) => {
    const [text, setText] = useState(data?.text || '');
    const [minLength, setMinLength] = useState(3);
    const [hashtagCount, setHashtagCount] = useState(0);

    const handleTextChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        
        
        const words = newText.split(' ').filter(word => word.length >= minLength);
        setHashtagCount(words.length);
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Hashtag Generator"
            inputs={[{ id: 'text' }]}
            outputs={[{ id: 'hashtags' }]}
            style={{
                height: 160,
                width: 250,
             
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label>
                    Text:
                    <textarea
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter text to generate hashtags..."
                        rows={3}
                        style={{ width: '100%', marginTop: '4px' }}
                    />
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <label>
                        Min Length:
                        <input
                            type="number"
                            min={2}
                            max={10}
                            value={minLength}
                            onChange={(e) => setMinLength(Number(e.target.value))}
                            style={{ width: '50px', marginLeft: '4px' }}
                        />
                    </label>
                    <span style={{ fontSize: '12px', color: 'gray' }}>
                        {hashtagCount} potential hashtags
                    </span>
                </div>
            </div>
        </BaseNode>
    );
};
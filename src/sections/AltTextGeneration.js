import { Button, Card, CardBody, Spinner } from "@wordpress/components";
import { useState, useRef } from "@wordpress/element";
import { executeAbility } from '@wordpress/abilities';

export default function AltTextGeneration() {
    const [imageDataUri, setImageDataUri] = useState(null);
    const [altText, setAltText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            return;
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setError('Please select a valid image file.');
            return;
        }

        // Validate file size (max 10MB)
        if (file.size > 10 * 1024 * 1024) {
            setError('Image size must be less than 10MB.');
            return;
        }

        setError(null);

        // Read file as data URL
        const reader = new FileReader();
        reader.onload = (e) => {
            setImageDataUri(e.target.result);
            setAltText(''); // Clear previous alt text
        };
        reader.onerror = () => {
            setError('Failed to read the image file.');
        };
        reader.readAsDataURL(file);
    };

    // Generate alt text
    const handleGenerateAltText = async () => {
        if (!imageDataUri) {
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await executeAbility('wp-ai/alt-text-generation', {
                image: imageDataUri
            });

            if (response && response.alt_text) {
                setAltText(response.alt_text);
            } else {
                setError('Failed to generate alt text. Please try again.');
            }
        } catch (err) {
            setError(err.message || 'An error occurred while generating alt text.');
        } finally {
            setLoading(false);
        }
    };

    // Copy to clipboard
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(altText);
    };

    // Reset form
    const handleReset = () => {
        setImageDataUri(null);
        setAltText('');
        setError(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <Card style={{ maxWidth: '650px' }}>
            <CardBody>
                <h2 style={{ marginTop: 0 }}>Upload Image</h2>

                <div style={{ marginBottom: '16px' }}>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{
                            display: 'block',
                            marginBottom: '8px',
                            padding: '8px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            width: '100%'
                        }}
                    />
                    <p style={{ margin: '4px 0', fontSize: '12px', color: '#666' }}>
                        Supported formats: JPG, PNG, GIF, WebP (max 10MB)
                    </p>
                </div>

                {error && (
                    <div style={{
                        padding: '12px',
                        backgroundColor: '#f8d7da',
                        color: '#721c24',
                        borderRadius: '4px',
                        marginBottom: '16px'
                    }}>
                        {error}
                    </div>
                )}

                {imageDataUri && (
                    <div style={{ marginBottom: '16px' }}>
                        <img
                            src={imageDataUri}
                            alt="Preview"
                            style={{
                                maxWidth: '100%',
                                height: 'auto',
                                display: 'block',
                                border: '1px solid #ddd',
                                borderRadius: '4px'
                            }}
                        />
                    </div>
                )}

                <div style={{ display: 'flex', gap: '8px' }}>
                    <Button
                        variant="primary"
                        onClick={handleGenerateAltText}
                        disabled={!imageDataUri || loading}
                    >
                        {loading ? (
                            <>
                                <Spinner style={{ marginRight: '8px' }} />
                                Generating...
                            </>
                        ) : (
                            'Generate Alt Text'
                        )}
                    </Button>

                    {imageDataUri && (
                        <Button variant="secondary" onClick={handleReset}>
                            Reset
                        </Button>
                    )}
                </div>
            </CardBody>

            {altText && (
                <CardBody>
                    <h2 style={{ marginTop: 0 }}>Generated Alt Text</h2>

                    <div style={{
                        padding: '12px',
                        backgroundColor: '#f0f0f0',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        marginBottom: '16px',
                        fontSize: '14px',
                        lineHeight: '1.5'
                    }}>
                        {altText}
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                        <Button variant="secondary" onClick={handleCopyToClipboard}>
                            Copy to Clipboard
                        </Button>
                    </div>

                    <p style={{ margin: '8px 0', fontSize: '12px', color: '#666' }}>
                        Character count: {altText.length}
                        {altText.length > 125 && altText.length <= 250 && ' (longer than ideal)'}
                        {altText.length > 250 && ' (too long - consider shortening)'}
                    </p>
                </CardBody>
            )}
        </Card>
    );
}

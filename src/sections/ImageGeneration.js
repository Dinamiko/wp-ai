import {Button, Card, CardBody} from "@wordpress/components";
import {__experimentalInputControl as InputControl} from '@wordpress/components';
import {useState} from "@wordpress/element";
import {executeAbility} from '@wordpress/abilities';

export default function ImageGeneration() {
    const [topic, setTopic] = useState('');
    const [result, setResult] = useState(null);

    const handleOnClick = () => {
        executeAbility('wp-ai/image-generation', {topic})
            .then((response) => {
                setResult(response)
            })
    }

    return (
        <Card style={{maxWidth: '650px'}}>
            <CardBody>
                <InputControl
                    label="Topic"
                    placeholder="e.g., Winter travel destination from train window"
                    value={topic}
                    onChange={(value) => setTopic(value)}
                    __next40pxDefaultSize
                />
                <Button variant="primary" onClick={handleOnClick} style={{marginTop: '16px'}}>
                    Generate Image
                </Button>
            </CardBody>
            <CardBody>
                {result && (
                    <img src={result} alt="Generated image" style={{maxWidth: '100%', height: 'auto', display: 'block'}}/>
                )}
            </CardBody>
        </Card>
    )
}

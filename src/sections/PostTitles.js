import {Button, Card, CardBody} from "@wordpress/components";
import {__experimentalInputControl as InputControl} from '@wordpress/components';
import {useState} from "@wordpress/element";
import {executeAbility} from '@wordpress/abilities';

export default function PostTitles() {
    const [topic, setTopic] = useState('');
    const [result, setResult] = useState(null);

    const handleOnClick = () => {
        executeAbility('wp-ai/post-titles', {topic})
            .then((response) => {
                setResult(response[0].split('\n').filter(Boolean))
            })
    }

    return (
        <Card style={{maxWidth: '650px'}}>
            <CardBody>
                <InputControl
                    label="Topic"
                    placeholder="e.g., Store that sells eco-friendly products"
                    value={topic}
                    onChange={(value) => setTopic(value)}
                    __next40pxDefaultSize
                />
                <Button variant="primary" onClick={handleOnClick} style={{marginTop: '16px'}}>
                    Suggest Titles
                </Button>
            </CardBody>
            <CardBody>
                {result && (
                    <ul>
                        {result.map((title, index) => <li key={index}>{title}</li>)}
                    </ul>
                )}
            </CardBody>
        </Card>
    )
}

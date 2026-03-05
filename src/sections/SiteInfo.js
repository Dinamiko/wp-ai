import {useState, useEffect} from '@wordpress/element';
import {executeAbility} from '@wordpress/abilities';
import {Card, CardBody} from "@wordpress/components";

export default function SiteInfo() {
    const [siteInfo, setSiteInfo] = useState(null);

    useEffect(() => {
        executeAbility('wp-ai/site-info')
            .then((response) => {
                setSiteInfo(response)
            })
    }, []);

    return (
        <Card style={{maxWidth: '650px'}}>
            <CardBody>
                {siteInfo && (
                    <div>
                        <p>Name: {siteInfo.name}</p>
                        <p>Description: {siteInfo.description}</p>
                        <p>URL: {siteInfo.url}</p>
                    </div>
                )}
            </CardBody>
        </Card>
    )
}



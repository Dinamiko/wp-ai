import { App, Header } from 'wp-interface';
import { TabPanel } from '@wordpress/components';
import SiteInfo from "./sections/SiteInfo";
import PostTitles from "./sections/PostTitles";
import ImageGeneration from "./sections/ImageGeneration";
import AltTextGeneration from "./sections/AltTextGeneration";

export default function WpAi() {
    const labels = {};

    return (
        <App scope="wp-ai" labels={ labels }>
            <Header>
                <h1>WP AI</h1>
            </Header>

            <div className="wp-ai-content">
                <TabPanel
                    onSelect={() => {}}
                    tabs={[
                        {
                            name: 'tab1',
                            title: 'Site Info'
                        },
                        {
                            name: 'tab2',
                            title: 'Title Suggestions'
                        },
                        {
                            name: 'tab3',
                            title: 'Image Generation'
                        },
                        {
                            name: 'tab4',
                            title: 'Alt Text Generation'
                        },
                    ]}
                >
                    {(tab) => (
                        <div>
                            {tab.name === 'tab1' && <SiteInfo />}
                            {tab.name === 'tab2' && <PostTitles />}
                            {tab.name === 'tab3' && <ImageGeneration />}
                            {tab.name === 'tab4' && <AltTextGeneration />}
                        </div>
                    )}
                </TabPanel>

            </div>
        </App>
    );
}

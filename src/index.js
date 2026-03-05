import domReady from '@wordpress/dom-ready';
import {createRoot} from '@wordpress/element';

import './index.scss';
import WpAi from "./WpAi";

domReady(() => {
    createRoot(
        document.getElementById('wp-ai')
    ).render(
        <WpAi />
    );
});

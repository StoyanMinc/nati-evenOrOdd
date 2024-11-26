import page from '../node_modules/page/page.mjs';

import { playView } from './on-play.js';

page('/even-or-odd', playView)
page.start();
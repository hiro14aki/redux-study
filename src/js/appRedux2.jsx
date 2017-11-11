import React from 'react';
import { render } from 'react-dom';

import Root from './components/root';

/**
 * Redux チュートリアルサンプル
 * ざっくり React チュートリアル
 * https://qiita.com/pullphone/items/efcaee59cf2a5725c61d
 */

// ReactDOM.render(...) と同じ意味合い
render(
    <Root title="react redux sample.">
      test
    </Root>,
    document.getElementById('app')
);

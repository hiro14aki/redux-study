import React from 'react';
import { render } from 'react-dom';

import Root from './components/root';

// ReactDOM.render(...) と同じ意味合い
render(
    <Root title="react redux sample.">
      test
    </Root>,
    document.getElementById('app')
);

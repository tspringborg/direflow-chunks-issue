import { DireflowComponent } from 'direflow-component';
import App from './App';
import '@telekom/scale-components-neutral/dist/scale-components/scale-components.css';
import {
  applyPolyfills,
  defineCustomElements,
} from '@telekom/scale-components-neutral/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

export default DireflowComponent.create({
  component: App,
  configuration: {
    tagname: 'direflow-chunk-issue',
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Advent Pro', 'Noto Sans JP'],
        },
      },
    },
  ],
});

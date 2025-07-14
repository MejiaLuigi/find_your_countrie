import { expect, userEvent, within } from 'storybook/test';

import {Button} from '../app/ui/home/Button';

export default {
  title: 'Componentes/Button',
  component: Button,
  args: {
    label: 'Click Me',
    onClick: () => console.log('Button clicked'),
  },
};



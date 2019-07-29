import React from 'react';
import { storiesOf } from '@storybook/react';

import List from "./index";

storiesOf('List', module)
  .add('with text', () => (
    <List>Hello Button</List>
  ))
  .add('with text 2', () => (
    <List>Hello Button 2</List>
  ))
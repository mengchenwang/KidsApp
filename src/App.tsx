import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AppNavigator} from './navigation/AppNavigator';
import {colors, rainbowColors} from './theme/color';

const App = () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider
      {...eva}
      theme={{...eva.light, ...colors, ...rainbowColors}}>
      <AppNavigator />
    </ApplicationProvider>
  </>
);

export default App;

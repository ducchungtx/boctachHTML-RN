import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator  } from 'react-navigation';

import DanhSach from './DanhSach';
import ChiTiet from './ChiTiet';

export default App = StackNavigator({
    DanhSach: { screen: DanhSach },
    ChiTiet: { screen: ChiTiet }
});

import logo from './logo.svg';
import './App.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React,{useState} from 'react';
import PstarPage from './components/PstarPage'
import WeightBalanceSheet from './components/WeightBalanceSheet'
import { channels } from '../shared/constants';
const { ipcRenderer } = window;


function App() {
  var value = "Item One"
  return (
    <div key="questions">
    <Tabs>
    <TabList>
      <Tab>PSTAR</Tab>
      <Tab>Weight and Balance</Tab>
    </TabList>

    <TabPanel>
      <PstarPage />
    </TabPanel>
    <TabPanel>
      <WeightBalanceSheet />
    </TabPanel>
    </Tabs>
    </div>
  );
}



export default App;

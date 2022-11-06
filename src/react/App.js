import logo from './logo.svg';
import './App.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React,{useState} from 'react';
import Header from './components/Header'
import PstarPage from './components/PstarPage'
import WeightBalanceSheet from './components/WeightBalanceSheet'
import Footer from './components/Footer'
import { channels } from '../shared/constants';
const { ipcRenderer } = window;


function App() {
  var value = "Item One"
  return (
    <div key="questions">
    <Header />
    <Tabs>
    <TabList>
      <Tab>PSTAR</Tab>
      <Tab>Weight and Balance</Tab>
      <Tab><form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="business" value="VL6X36SRHVQAG" />
    <input type="hidden" name="no_recurring" value="1" />
    <input type="hidden" name="currency_code" value="CAD" />
    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
    <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
    </form></Tab>
    </TabList>

    <TabPanel>
      <PstarPage />
    </TabPanel>
    <TabPanel>
      <WeightBalanceSheet />
    </TabPanel>
    </Tabs>
    <Footer />
    </div>
  );
}



export default App;

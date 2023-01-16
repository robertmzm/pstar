import logo from './logo.svg';
import './App.css';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React,{useState} from 'react';
import Header from './components/Header'
import PstarPage from './components/PstarPage'
import WeightBalanceSheet from './components/WeightBalanceSheet'
import Footer from './components/Footer'
import QA from './components/QA'
import { channels } from '../shared/constants';

const { ipcRenderer } = window;
const styles = {
    tab: {
        minWidth: 300, // a number of your choice
        width: 500, // a number of your choice
    },
    body:{
      margin: "40px",
    }
};

function App() {
  return (
    <div style={styles.body}>
    <Header />
    <Tabs>
    <TabList style={styles.tab}>
      <Tab>PSTAR</Tab>
      <Tab>Weight and Balance</Tab>
      <Tab>Q&A</Tab>
      <Tab>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="VL6X36SRHVQAG" />
          <input type="hidden" name="no_recurring" value="0" />
          <input type="hidden" name="currency_code" value="CAD" />
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
        </form>
      </Tab>
    </TabList>

    <TabPanel>
      <PstarPage />
    </TabPanel>
    <TabPanel>
      <WeightBalanceSheet />
    </TabPanel>
    <TabPanel>
      <QA />
    </TabPanel>
    <TabPanel>
      <p> Donation is very appreciated </p>
    </TabPanel>
    </Tabs>
    <Footer />
    </div>
  );
}



export default App;

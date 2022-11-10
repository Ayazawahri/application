import * as React from 'react';
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs';
import styles from './SectionTabs.css';
import User from './User';
import Profile from './Profile';
import Log from './Log';
import LogList from './LogList';
import UserList from './UserList';
import Myposts from './MyPosts';
import Board from './Board';
import Data from './Data';
import AllData from './AllData';



export default class Container extends React.Component{
    constructor(props){
        super(props);
        this.state=
        {
            User:{
            id:0,
            name:'',
            email:'',
            password:'', 
            
        }, 
        log:{
            post:'',
        },
        dm:{
            message:'',
        },
        year: 0,
        number: 0,
        choice: "",

        selectedIndex: 0,    
        };
      
      this.handleSelect = this.handleSelect.bind(this);
      
      }
      handleSelect(index) {
        this.setState({selectedIndex: index});
      };
    
      handleChange(name, value) {
        console.log('User ' + name + ': ' + value);
        this.setState({
              ...this.state,
              [name]: value,
            },
        );
        console.log(JSON.stringify(this.state));
      }

      
    
      

      render() {
        return (
            <div className="react">
              <Tabs className={styles.reactTabs} selectedIndex={this.state.selectedIndex}
                    onSelect={this.handleSelect}>
                <TabList className={styles.reactTabs__tabList}>
                  <Tab className={styles.reactTabs__tab}>
                    <p> register new user</p>
                  </Tab>
                  <Tab className={styles.reactTabs__tab}>
                    <p>Profile</p>
                  </Tab>
                  <Tab className={styles.reactTabs__tab}>
                    <p>Log</p>
                  </Tab>
                  <Tab className={styles.reactTabs__tab}>
                    <p>My posts</p>
                  </Tab>
                  <Tab className={styles.reactTabs__tab}>
                    <p>UserList</p>
                  </Tab>
                  <Tab className={styles.reactTabs__tab}>
                    <p>Whiteboard</p>
                  </Tab>
                  <Tab className={styles.reactTabs__tab}>
                    <p>Insert data</p>
                  </Tab>
                  <Tab className={styles.reactTabs__tab}>
                    <p>View diagram</p>
                  </Tab>
                
                  
                </TabList>
                <TabPanel className={styles.reactTabs__tabPanel}>
                  <div className="panel-content">
                    <User data={this.state} 
                           handleData={(name, value) => this.handleChange(name,
                               value)}/>
                  </div>
                </TabPanel>
                <TabPanel className={styles.reactTabs__tabPanel}>
                  <div className="panel-content">
                    <Profile data={this.state}
                           handleData={(name, value) => this.handleChange(name,
                               value)}/>
                  </div>
                </TabPanel>
                <TabPanel className={styles.reactTabs__tabPanel}>
                  <div className="panel-content">
                    <Log data={this.state}
                           handleData={(name, value) => this.handleChange(name,
                               value)}/>
                  </div>
                </TabPanel>
                <TabPanel className={styles.reactTabs__tabPanel}>
                  <div className="panel-content">
                    <Myposts data={this.state}
                           handleData={(name, value) => this.handleChange(name,
                               value)}/>
                  </div>
                </TabPanel>
                <TabPanel className={styles.reactTabs__tabPanel}>
                  <div className="panel-content">
                    <UserList data={this.state}
                           handleData={(name, value) => this.handleChange(name,
                               value)}/>
                  </div>
                </TabPanel>
                <TabPanel className={styles.reactTabs__tabPanel}>
                  <div className="panel-content">
                    <Board data={this.state}
                           handleData={(name, value) => this.handleChange(name,
                               value)}/>
                  </div>
                </TabPanel>
                <TabPanel className={styles.reactTabs__tabPanel}>
                  <div className="panel-content">
                    <Data data={this.state}
                           handleData={(name, value) => this.handleChange(name,
                               value)}/>
                  </div>
                </TabPanel>
                <TabPanel className={styles.reactTabs__tabPanel}>
                  <div className="panel-content">
                    <AllData data={this.state}
                           handleData={(name, value) => this.handleChange(name,
                               value)}/>
                  </div>
                </TabPanel>
                
              </Tabs>
             
            </div>
        );
    
      }
}
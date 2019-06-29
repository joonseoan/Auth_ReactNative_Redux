import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'; 
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = props => {
    return (
        <Router sceneStyle={{ paddingTop: 65}} >
        {/* only a single router which means that only the most parent scene */}
            {/* hideNavBar removes the space of Scene */}
            <Scene key="root" hideNavBar>
                {/* 
                    1) In order to remove "back button"
                    which is generated automatically
                    we need to use another "Scene"'s wrapup

                    2) No back button means that
                        it is noty easy to navigate to another wrapping Scene!!
                */}
                <Scene key="auth">
                    <Scene 
                        // Because of Expo
                        titleStyle={{ flex:1, paddingTop: 10}}
                        // titleStyle={{textAlign: 'center', flex: 1}}
                        key="login" 
                        component={ LoginForm } 
                        // title is going to be a header.
                        title="Please Log In" 
                        // tabBarLabel="Home"
                        // tabBarStyle={{ flex:1, alignItems: 'center' }}
                        // initial
                    />
                </Scene>
                {/* Scene must have a key, by the way */}
                <Scene key="main">
                    <Scene 
                        // Because of Expo
                        titleStyle={{ flex:1, paddingTop: 10}} 
                        rightButtonStyle={{ paddingTop: 15 }}
                        // display Ttitle Name on the right side.
                        rightTitle="Add"
                        // Event for rightTitle
                        onRight={() => Actions.employeeCreate() }
                        key="employeeList" 
                        component={ EmployeeList } 
                        title="Employees"
                        initial
                    />
                    <Scene 
                        // Because of Expo
                        titleStyle={{ flex:1, paddingTop: 10}} 
                        leftButtonStyle={{ paddingTop: 17 }}

                        key="employeeCreate" 
                        component={ EmployeeCreate }
                        title="Create Employee"
                    />
                </Scene>
            </Scene>
        </Router>
    );
}

export default RouterComponent;
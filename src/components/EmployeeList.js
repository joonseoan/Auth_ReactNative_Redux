import React from 'react';
import { View, Text, FlatList, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import ListItem from './ListItem';
import { Spinner } from './common';
import { employeeFetch } from '../actions';


// Need to know immediate props update by using ListView
class EmployeeList extends React.Component {

    // For ListView, componentWillMount must be used.
    componentWillMount = () => {

        console.log('componentDidUpdate');
        this.props.employeeFetch();

        /* 
            1)
            const ds = new ListView.DataSource({
                // r1 and r2 are different, change make and change the new row
                rowHasChanged: (r1, r2) =>  r1 !== r2
            });

            // copy and paste the row again and then put an employee item

            // **************** IMPORTANT ******************* //
            // issue: no this.props.employee value so far 
            //  because we jut invoke the "props.employee()" above
            //      it does not complete receiving the data ==> asynchronous?
            this.dataSource = ds.cloneWithRows(this.props.employees);
        
        */

       // 3) 
       // When comming from EmployeeForm Creat
       //   In this case, "this.props.employees" is not empty object
       this.createDataSource(this.props);
       
    }


    // only when props is updated without the relation to state
    componentWillReceiveProps = newProps => {

        console.log('componentWillReceiveProps');

        /* 
            2)
            // This can be OK when the user login and then
            // this.props.employees is empty and then this.props.employees is updated
            //  by using componentWillReceiveUpdate update the value and render it again

            // However, when the new user is created and immediately update
            //  by using EmployeForm component and we automatically get back to this page
            //  still have trouble that the component still has the old data????


            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) =>  r1 !== r2
            });
            this.dataSource = ds.cloneWithRows(newProps.employees);
        */

        // 3)
        this.createDataSource(newProps);
    }

    createDataSource = ({ employees }) => {

        // ListView must be set up in componentWillMount!!!!
        // Then, we can use ListView component.

        // When 'employees' value is updated ListView.DataSource must be updated again.
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) =>  r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow = employee => {
        return(
            <ListItem employee={ employee } />
        );
    }

    render() {
        return (
           <ListView 
                enableEmptySections
                dataSource={ this.dataSource }
                renderRow={ this.renderRow }
           />
        );
    }
}



// ----------------------------------------- NOT WORKING!!

// const EmployeeList = props => {

//    const [ dataSource, setDataSource ] = React.useState(null);

//    // CAN'T WORK BECAUSE USEFFECT IS componentDidMount!
//    React.useEffect(() => {
//        props.employeeFetch();
//        createDataSource(props);
//    }, [props.employees])

//     const createDataSource = ({ employees }) => {

//         // ListView must be set up in componentWillMount!!!!
//         // Then, we can use ListView component.

//         // When 'employees' value is updated ListView.DataSource must be updated again.
//         const ds = new ListView.DataSource({
//             rowHasChanged: (r1, r2) =>  r1 !== r2
//         });

//         setDataSource(ds.cloneWithRows(employees));
//     }

//     const renderRow = employee => {
//         return(
//             <ListItem employee={ employee } />
//         );
//     }

//     console.log(dataSource)

//     return (
//         <ListView 
//             enableEmptySections
//             dataSource={ dataSource }
//             renderRow={ renderRow }
//         />
//     );
// }












// My Better Code by using FlatList
// const EmployeeList = props => {

//     // let dataSource;
//     React.useEffect(() => {
//         props.employeeFetch();
//     }, []);

//     const renderItem = employee => {
//         console.log('employee: ==================>  ', employee)
//         return (
//             <ListItem employee={ employee } />
//         );
//     }

//     // console.log('dataSource: ', dataSource)

//     if(!props.employees) {
//         return (
//             <View>
//                 <Spinner />
//             </View>
//         );
//     }

//     return (
//        <FlatList
//             data={ props.employees }

//             // how to render each individual library
//             // It invokes a function renderItem above
//             //  with an argument, each item of the array.
//             renderItem={ renderItem }

//             // key: it is because map or list function is used under the scene.
//             keyExtractor={ employee => employee.uid.toString() }
//        />
//     );
// }

const mapStateToProps = ({ employees }) => {

        // console.log('employees: ', employees)
        // "uid" => key
        // "val" => value
    
        // employees: entire object
        // val : the first pararent object of the entire object
        // uid: key
        const employees_array = _.map(employees, (val, uid) => {
            // uid must be same name as specified in  the data.!!!
            return { ...val, uid } // => [ { name, phone, shift, id: }, { }, ...]
        });
        
        console.log('employee_arry: ', employees_array)
        return { employees: employees_array };
    

}

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
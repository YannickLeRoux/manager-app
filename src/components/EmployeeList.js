import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);

  }

  createDataSource() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.employees);
  }

  render() {
    return (
      <View>
        <Text> Blahhhhhhhh </Text>
        <Text> Blahhhhhhhh </Text>
        <Text> Blahhhhhhhh </Text>
        <Text> Blahhhhhhhh </Text>
        <Text> Blahhhhhhhh </Text>
      </View>

    );
  }
}

export default connect(null, { employeesFetch})(EmployeeList);

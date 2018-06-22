import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions/';


class EmployeeCreate extends Component {
  constructor(props) {
    super(props);
    this.days = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    this.generatePickerItems = this.days.map(day => <Picker.Item key={day} label={day} value={day} />);
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }


  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="name"
            placeholder="Name"
            value={this.props.name}
            onChangeText={ value => this.props.employeeUpdate({ prop: 'name', value })}
            />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={ value => this.props.employeeUpdate({ prop: 'phone', value })}
             />
        </CardSection>

        <CardSection style={{ flexDirection:'column' }}>
          <Text style={ styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange= { value => this.props.employeeUpdate({ prop: 'shift', value })}>
            {this.generatePickerItems}

          </Picker>
        </CardSection>

        <CardSection>
          <Button onPress={ this.onButtonPress.bind(this) }>
            Create
          </Button>
        </CardSection>

      </Card>


    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20,
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate, employeeCreate
 })(EmployeeCreate);
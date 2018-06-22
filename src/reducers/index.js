import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import { employeeFormReducer } from './EmployeeFormReducer';

export default combineReducers({
  auth: AuthReducer,
  employeeForm: employeeFormReducer
});

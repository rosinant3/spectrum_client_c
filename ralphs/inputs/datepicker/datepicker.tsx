import React, { useState, SetStateAction  } from 'react';
import { InfoContainer, DateContainer } from '../inputComponents';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';

type selectedDate = Date | null;

interface DatePickerProps { 
  dateTime: { value: Date, error: string; };
	setSelectedDate: SetStateAction <selectedDate>;
	selectedDate: selectedDate;
};

const DatePicker: React.FC<DatePickerProps> = (props, ref:any) => {
  return (<InfoContainer>
		<DateContainer>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
			  <DateTimePicker
			  
				  variant="inline"
				  value={props.selectedDate}
				  onChange={props.setSelectedDate}
				  format="MM/dd/yyyy HH:mm"
				  margin="normal"
				  label={"Date:"}
				
			  />
			</MuiPickersUtilsProvider>
		</DateContainer>
  </InfoContainer>);
};

export default DatePicker;

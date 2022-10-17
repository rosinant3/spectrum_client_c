import React, { useState } from 'react';
import { InfoContainer, DateContainer } from '../color/colorDateStyles';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import { useDatepickerError, useSelectedDate } from './datepickerHooks';

interface DatePickerProps { 
    dateTime: { value: Date, error: string; };
};

const DatePicker: React.FC<DatePickerProps> = (props) => {
	const dateTime = props.dateTime;
	const { selectedDate, setSelectedDate } = useSelectedDate(dateTime.value);
	const { datepickerError } = useDatepickerError(dateTime);
  return (<InfoContainer>
		<DateContainer>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
			  <DateTimePicker
			  
				variant="inline"
				value={selectedDate}
				onChange={setSelectedDate}
				format="MM/dd/yyyy HH:mm"
				margin="normal"
				label={"Date:"}
				
			  />
			</MuiPickersUtilsProvider>
			{datepickerError.status && <div>{datepickerError.message}</div>}
		</DateContainer>
  </InfoContainer>);
};

export default DatePicker;
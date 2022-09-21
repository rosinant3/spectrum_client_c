import React from 'react';
import {    
 
  IncidentFormCont,
  IncidentFormHeader,
  ButtonContainerRight,
  PostButton
	
} from '../mapComponents';
import { useParams } from 'react-router-dom';
import Color from '../../../../ralphs/inputs/color/color';
import DatePicker from '../../../../ralphs/inputs//datePicker/datepicker';
import Content from '../../../../ralphs/inputs/content/content'
//import MediaEditor from '../../../../ralphs/media/mediaEditorComponent';
import { usePostSubmit, useIncidents } from './postIncidentHooks';
import { useSelectedDate } from '../../../../ralphs/hooks/selectedDateHook';

interface IncidentFormProps {
  setShowPostOnClick: any;
  incident: number;
};

const IncidentForm: React.FC<IncidentFormProps> = (props) => {

  const params = useParams();
  const id: any = params.id;
  const incident: number = props.incident;
  const post = useIncident({ id, incident });
  const dateTime = post.dateTime;
  const { selectedDate, setSelectedDate } = useSelectedDate(dateTime);
  const { 

      buttonText, 
      submitForm,
      contentRef,
      colorRef

  } = usePostSubmit({ id: post.id, selectedDate: selectedDate });

  return (<IncidentFormCont onSubmit={submitForm}>
		<ButtonContainerRight>
			<PostButton type="submit" >{buttonText}</PostButton> 
		</ButtonContainerRight>
      		<IncidentFormHeader>
			<DatePicker dateTime={dateTime} selectedDate={selectedDate} setSelectedDate={setSelectedDate}  />
        		<Color color={post.color} ref={colorRef}/>
      		</IncidentFormHeader>
      		<Content content={post.content} ref={contentRef} />
    </IncidentFormCont>);
};

/*  <MediaEditor incident={incident} id={id} />  */

export default PostIncident;

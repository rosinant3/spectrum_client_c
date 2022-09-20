import React from 'react';
import {    
	
  PostIncidentCont,
  PostHeader,
  ButtonContainerRight,
  PostButton
	
} from '../mapComponents';
import { useParams } from 'react-router-dom';
import Color from '../../../../ralphs/inputs/color/color';
import DatePicker from '../../../../ralphs/inputs//datePicker/datepicker';
import Content from '../../../../ralphs/inputs/content/content';
import { useIncident } from '../utils/incidentUtility';
//import MediaEditor from '../../../../ralphs/media/mediaEditorComponent';
import { useSelectedDate, usePostSubmit } from './postIncidentHooks';

interface PostIncidentProps {
  setShowPostOnClick: any;
  incident: number;
};

const PostIncident: React.FC<PostIncidentProps> = (props) => {

  const params = useParams();
  const id: any = params.id;
  const incident: number = props.incident;
  const post = useIncident({ id, incident });
  const dateTime = post.dateTime;
  const { selectedDate, setSelectedDate } = useSelectedDate(dateTime);
  const { buttonText, submitForm, contentRef, colorRef } = usePostSubmit({ id: post.id, selectedDate: selectedDate });

  return (<PostIncidentCont onSubmit={submitForm}>
		<ButtonContainerRight>
			<PostButton type="submit" >{buttonText}</PostButton> 
		</ButtonContainerRight>
		<PostHeader>
			<DatePicker dateTime={dateTime} selectedDate={selectedDate} setSelectedDate={setSelectedDate}  />
			<Color color={post.color} ref={colorRef}/>
		</PostHeader>
      		<Content content={post.content} ref={contentRef} />
    </PostIncidentCont>);
};

/*  <MediaEditor incident={incident} id={id} />  */

export default PostIncident;

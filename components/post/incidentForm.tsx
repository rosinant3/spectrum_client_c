import React from 'react';
import { IncidentFormCont, IncidentFormHeader, ErrorDiv } from '../mapStyles';
import { useParams } from 'react-router-dom';
import Color from '../../../../ralphs/inputs/color/color';
import DatePicker from '../../../../ralphs/inputs//datePicker/datepicker';
import Content from '../../../../ralphs/inputs/content/content'
import PostButton from '../../../../ralphs/buttons/postButton/postButton'
//import MediaEditor from '../../../../ralphs/media/mediaEditorComponent';
import { usePostSubmit, useIncidentForm } from './postIncidentHooks';
import { useSelectedDate } from '../../../../ralphs/hooks/selectedDateHook';

interface IncidentFormProps {

};

const IncidentForm: React.FC<IncidentFormProps> = (props) => {

  const params = useParams();
  const caseUrl: string = params.id ? params.id : "";
  const post = useIncidentForm();
  const dateTime = post.dateTime;
  const { selectedDate, setSelectedDate } = useSelectedDate(dateTime);
  const { submitForm, contentRef, colorRef } = usePostSubmit({ caseUrl: caseUrl, incidentId: post.id, selectedDate: selectedDate });

  return (<IncidentFormCont onSubmit={submitForm}>
			<PostButton waiting={post.waiting} id={post.id} />
      <IncidentFormHeader>
	      <DatePicker dateTime={dateTime} selectedDate={selectedDate} setSelectedDate={setSelectedDate}  />
        <Color color={post.color} ref={colorRef}/>
      </IncidentFormHeader>
      <Content content={post.content} ref={contentRef} />
      <ErrorDiv>{post.generalError}</ErrorDiv>
    </IncidentFormCont>);
};

/*  <MediaEditor incident={incident} id={id} />  */

export default IncidentForm;

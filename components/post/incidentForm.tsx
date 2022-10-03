import React, { Suspense } from 'react';
import { IncidentFormCont, IncidentFormHeader, ErrorDiv } from '../mapStyles';
import { useParams } from 'react-router-dom';
import Color from '../../../../ralphs/inputs/color/color';
import DatePicker from '../../../../ralphs/inputs//datePicker/datepicker';
import Content from '../../../../ralphs/inputs/content/content'
import PostButton from '../../../../ralphs/buttons/postButton/postButton'
//import MediaEditor from '../../../../ralphs/media/mediaEditorComponent';
import { usePostSubmit, useIncidentForm } from './postIncidentHooks';
import IncidentFiles from './incidentFiles';

interface IncidentFormProps {};

const IncidentForm: React.FC<IncidentFormProps> = () => {

  const params = useParams();
  const caseUrl: string = params.id ? params.id : "";
  const post = useIncidentForm();
  const dateTime = post.dateTime;
  const { submitForm } = usePostSubmit({ caseUrl: caseUrl, incidentId: post.id });

  return (<IncidentFormCont onSubmit={submitForm}>
			<PostButton waiting={post.waiting} id={post.id} />
      <IncidentFormHeader>
	      <DatePicker dateTime={dateTime}  />
        <Color color={post.color} />
      </IncidentFormHeader>
      <Content content={post.content} />
      <ErrorDiv>{post.generalError}</ErrorDiv>
      <IncidentFiles id={post.id} ></IncidentFiles>
    </IncidentFormCont>);
};

/*  <MediaEditor incident={incident} id={id} />  */

export default IncidentForm;

import React, { Suspense } from 'react';
import FileUpload from '../../../../ralphs/inputs/FileUpload/FileUpload';
import { IncidentFormCont } from '../mapStyles';
import { SpawnSpinner } from '../../../../utility/appUtility';
import { incidentAddFilesAction } from '../redux/incidentForm/actions/files/actions';


interface IncidentFilesProps {
    id: number;
};

const IncidentFiles: React.FC<IncidentFilesProps> = (props) => {

  const actions = {
    addFiles: incidentAddFilesAction
  };

  return (<>
    { props.id === -1 && 
        <Suspense fallback={<IncidentFormCont>{SpawnSpinner('var(--mainActiveColor')}</IncidentFormCont>}>
          <FileUpload actions={actions} />
		</Suspense>
    }
    </>);
};

/*  <MediaEditor incident={incident} id={id} />  */

export default IncidentFiles;

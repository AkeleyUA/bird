import React from 'react';
import CreateIcon from '@material-ui/icons/Create';
import RunHumanIcon from '@material-ui/icons/DirectionsRun';
import DoneAll from '@material-ui/icons/DoneAll';
import approve from '../hardCodeData/Approve.svg';

const iconStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: 3,
};

const DraftIcon = () => (
  <div style={{...iconStyle, background: '#E3E7F4', color: '#3E245C'}}>
    <CreateIcon />
  </div>
);
const RunIcon = () => (
  <div style={{...iconStyle, background: '#3E245C', color: '#FFDC00'}}>
    <RunHumanIcon />
  </div>
);
const CompletedIcon = () => (
  <div style={{...iconStyle, background: '#FFDC00', color: '#3E245C'}}>
    <DoneAll />
  </div>
);

const ApproveIcon = () => (
  // !!!!!!!!!!!!!!!
  <div style={iconStyle}>
    <img src={approve} alt="approve" />
  </div>
);

export const dashboardCategoriesArray = [
  {name: 'All'},
  {name: 'Drafts', Icon: DraftIcon},
  {name: 'Under Approval​', Icon: ApproveIcon},
  {name: 'Running', Icon: RunIcon},
  {name: 'Completed', Icon: CompletedIcon},
];

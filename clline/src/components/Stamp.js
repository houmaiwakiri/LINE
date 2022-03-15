import { Button } from '@mui/material';
import React from 'react';

function Stamp(props) {
  return (props.trigger) ? (
    <div className='stamp'>
      <div className='stamp_inner'>
        <stamp trigger={false}>
          <h3>stamp</h3>
        </stamp>
        <Button>閉じる</Button>
        { props.children }
      </div>
    </div>
  ) : "";
}

export default Stamp;

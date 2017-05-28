import React, { Component } from 'react';
import { Sparklines, SparklinesLine , SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return(
    <Sparklines data={props.data} height={120} width={180}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type='avg'/>
      <div>{props.unit} {average(props.data)}</div>
    </Sparklines>
  );
}

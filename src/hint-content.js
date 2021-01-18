import React from 'react';
export default function HintContent({value}) {
  const {birth, country, death} = value;
  return <div>
    <div style={{
      borderBottom: '1px solid #717171',
      fontWeight: 'bold',
      marginBottom: 5,
      paddingBottom: 5,
      textTransform: 'uppercase'
    }}>{country}</div>
    {_hintRow({label: 'Birth Rates', value: birth})},
    {_hintRow({label: 'Death Rates', value: death})}
  </div>;
}
 
function _hintRow({label, value}) {
  return <div style={{position: 'relative', height: '15px', width: '100%'}}>
    <div style={{position: 'absolute'}}>{label}</div>
    <div style={{position: 'absolute', right: 0}}>{value}</div>
  </div>;
}
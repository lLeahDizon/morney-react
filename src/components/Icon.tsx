import React from 'react';

const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

type x = {
  name: string
}

const Icon = (props: x) => {
  return (
    <svg className='icon'>
      <use xlinkHref={'#' + props.name}/>
    </svg>
  );
};

export default Icon;

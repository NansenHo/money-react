import React from 'react';

require('../icons/book.svg')
require('../icons/logs.svg')
require('../icons/tags.svg')
require('../icons/right.svg')
require('../icons/left.svg')

// const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
// try {
//     importAll(require.context('../icons', true, /\.svg$/));
// } catch (error) {
//     console.log(error);
// }

// 类型别名必须大写
type PropsType = {
    name: string
}

const Icon = (props: PropsType) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
};

export { Icon }
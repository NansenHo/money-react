import React from 'react';
import classnames from 'classnames';

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
    // ?: 表示可选属性
    name?: string
} & React.SVGProps<SVGSVGElement>
// Props 的类型除了 name 之外，还接受 React 提供的 SVG 的所有属性

const Icon = (props: PropsType) => {
    // 如果 rest 里面有 className，那就会覆盖 className="icon"
    const { name, children, className, ...rest } = props
    return (
        <svg className={classnames('icon', className)} {...rest}>
            { name && <use xlinkHref={'#' + name} /> }
        </svg>
    )
};

export { Icon }
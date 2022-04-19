import React from 'react';

require("../icons/tags.svg");
require("../icons/book.svg");
require("../icons/logs.svg");

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

export default Icon
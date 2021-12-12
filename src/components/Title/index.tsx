import React from "react";
import style from './index.less';

interface IProps{
    text: string
}

const Title: React.FC<IProps> = (props) => {
    return (
        <div className={style.container}>
            <span className={style.title}>{props.text}</span>
        </div>
    )
}

export default Title
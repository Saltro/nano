import React from 'react';
import style from './index.less';

interface IProps {
    src:string,
    title: string,
    imgStyle: {
        width?: string,
        marginRight?: string,
        marginTop?: string
    }
    titleStyle?: {
        top: string,
        right: string
    }
}

const Image: React.FC<IProps> = (props) => {
    return (
        <div className={style.container}>
            <img src={props.src} alt={props.title} style={props.imgStyle}/>
            <span className={style.title} style={props.titleStyle}>{props.title}</span>
        </div>
    )
}
export default Image
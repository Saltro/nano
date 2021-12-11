import React from "react";
import style from './index.less';
import { Carousel } from "antd";

const DoubleSwiper: React.FC = () => {
    const pic:string[][] = [
        ["https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjC6ATJqsAAHQLHYElVU487.jpg",
        "https://media.nano.nagico.cn/group1/M00/00/6D/CgAABGGwjH2AWSV4AADIjj6dIeo387.jpg"],
        ["https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjHqAIX-YAAFQpwDZEAg957.JPG",
        "https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjHyAH3Q7AAFWTJmXGcU359.JPG"],
        ["https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjHmANL_VAADBaxkJapQ727.JPG",
        "https://media.nano.nagico.cn/group1/M00/00/6C/CgAABGGwjHuAPkHZAAEKeaGsfe4229.JPG"]
    ]
    return(
        <div className={style.container}>
            <Carousel autoplay={true}>
                {pic.map((group, index) => {
                    return (
                        <div key={index} className={style.slide}>
                            <div><img src={group[0]}/></div>
                            <div><img src={group[1]}/></div>
                        </div>
                    )
                })}
            </Carousel>
        </div>
    )
}
export default DoubleSwiper
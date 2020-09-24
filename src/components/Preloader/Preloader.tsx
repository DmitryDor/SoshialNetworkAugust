import React from "react";
import preloader from "../../assets/images/preloader.webp";

type PropsType = {

}

export const Preloader = (props: PropsType) => {
    return <img src={preloader} />
}
import React from "react";
import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({onClick}) {
    return <div><button className={css.buttonStyle} onClick={onClick}>LoadMore</button></div>
}
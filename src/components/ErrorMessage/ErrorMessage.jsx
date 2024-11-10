import css from "./ErrorMessager.module.css"
import { BiError } from "react-icons/bi"

export default function ErrorMessager({error, status}) {
    return (<div className={css.error}>Ошибка  {status}<BiError size={60}/></div>)
}
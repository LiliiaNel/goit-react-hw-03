import css from "./SearchBox.module.css";

export default function SearchBox({value, onFilter}) {
    return <div className={css.container}>
        <label className={css.label} htmlFor="">Find contacts by name</label>
        <input className={css.input} type="text" value={value} onChange={(event)=>onFilter(event.target.value)} />
    </div>
    
};
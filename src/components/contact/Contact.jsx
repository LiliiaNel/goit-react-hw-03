import css from "./Contact.module.css";
import { IoMdPerson } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

export default function Contact({ contact, deleteItem }) {
                return <li key={contact.id} className={css.item}>
                     <div className={css.info}>
                        <p><IoMdPerson /> {contact.name}</p>
                        <p><MdLocalPhone /> {contact.number}</p>
                    </div>
                    <button className={css.button} type="button" onClick={() => { deleteItem (contact.id)}}>Delete</button>
                </li>;
};
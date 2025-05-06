import css from "./Contact.module.css";

export default function Contact({ contact, deleteItem }) {
                return <li key={contact.id} className={css.item}>
                     <div className={css.info}>
                        <p>{contact.name}</p>
                        <p>{contact.number}</p>
                    </div>
                    <button className={css.button} type="button" onClick={() => { deleteItem (contact.id)}}>Delete</button>
                </li>;
};
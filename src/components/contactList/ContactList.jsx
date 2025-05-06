import css from "./Contactlist.module.css";
import Contact from "../contact/Contact";

export default function ContactList({ contactItems, removeItem }) {
    return    ( <ul className={css.container}>
		{contactItems.map((contact) => (<Contact key={contact.id} contact={contact} deleteItem={removeItem} />))}
	</ul>)
};
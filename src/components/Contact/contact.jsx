import { contactCard, contactInfo, contactName, contactNumber, deleteBtn, person, telephone } from './contact.module.css'

const Contact = ({ data: { id, name, number }, onDelete }) => {
    return (
        <div className={contactCard}>
            <div className={contactInfo}>
                <div className={contactName}>
                <svg className={person}>
                    <use href='/src/assets/symbol-defs.svg#icon-user'></use>
                </svg>
                <p>{name}</p>
                </div>
                <div className={contactNumber}>
                    <svg className={telephone}>
                        <use href='/src/assets/symbol-defs.svg#icon-phone'></use>
                    </svg>
                    <p>{number}</p>
                </div>
            </div>
            
            <button className={deleteBtn} onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default Contact;
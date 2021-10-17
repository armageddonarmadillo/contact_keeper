import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import ContactContext from '../../context/contact/contactContext'


const ContactItem = ({ contact }) => {
    const contactContext = useContext(ContactContext);
    const { deleteContact, setCurrentContact, clearCurrentContact } = contactContext;
    const { name, email, phone, _id, type } = contact;

    const onDelete = () => {
        deleteContact(_id);
        clearCurrentContact();
    }
    return (
        <div className='card bg-light'>
            <h3 className='text-primary text-left'>
                {name.split(" ").map((np => {
                    return np[0].toUpperCase() + np.slice(1) + " "
                }))}
                <span style={{float: 'right'}} 
                    className={'badge ' + (type === 'professional' ? 
                                            'badge-success' : 'badge-primary')}>
                    {type[0].toUpperCase() + type.slice(1)}
                </span>
            </h3>
            <ul className='list'>
                {email && <li><i className='fas fa-envelope-open'>{" " + email}</i></li>}
                {phone && <li><i className='fas fa-phone'>{" " + phone}</i></li>}
            </ul>
            <p>
                <button className='btn btn-dark btn-sm' onClick={()=>setCurrentContact(contact)}>Edit</button>
                <button className='btn btn-danger btn-sm' onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}


ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
}

export default ContactItem


import clsx from "clsx";
import styles from "./About.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faPhoneSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import LinkTag from './LinkTag.js'

export default function Contact(contacts) {

    const dataContacts = contacts.contacts

    const icon = (name) => {
        if (name === 'phone') return faPhone
        if (name === 'email') return faGithub
        if (name === 'facebook') return faFacebook
        if (name === 'zalo') return faPhoneSquare
        if (name === 'github') return faEnvelope
    }

    const checkLinkTag = (name) => {
        if (name === 'facebook' || name === 'github') {
            return true
        }
    }

    return (

        <div className={clsx(styles.titleContentContainer)}>
            {dataContacts.map(contact => (

                <div key={contact.id} className={clsx(styles.titleSubContainer)}>
                    <div className={clsx(styles.subject, 'd-flex')}>
                        <div className={clsx(styles.icon)}>
                            <FontAwesomeIcon icon={icon(contact.name)} />
                        </div>
                        <div className={clsx(styles.titleContent)}>
                            {contact.name}
                        </div>
                    </div>
                    <LinkTag
                        className={clsx(styles.detailedContent)}
                        types={checkLinkTag(contact.name)}
                    >
                        {contact.content}
                    </LinkTag>
                </div>
            ))}

        </div>
    )
}
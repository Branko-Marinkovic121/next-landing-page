import styles from '../../../styles/atoms/cardContactIcon.module.css';

export default function cardContactIcon({iconUrl}) {
    return (
        <div className={`${styles.body}`}>
             <img src={iconUrl} alt="" />
        </div>
    )
}
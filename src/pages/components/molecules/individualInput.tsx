import styles from '../../../styles/molecules/individualInput.module.css'

export default function individualInput({ label, imgUrl, option }) {
    return (
        <div className={`${styles.selectContainer}`}>
            <div className={`${styles.staticIconAndTitle}`}>
                <p className={`${styles.text}`}>{label}</p>
                <img className={`${styles.icon}`} src={imgUrl} alt="" />
            </div>
            <select>
                <option value="February 22 2024">{option}</option>
            </select>
        </div>
    )
}
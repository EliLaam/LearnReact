// import các style qua tên gọi chung (styles) từ file module
import styles from "./Title.module.css";

export default function Title({ title }) {
	return (
		<>
			{/* add 1 style */}
			{/* <h1 className={styles.title}>{title}</h1> */}
			{/* add nhiều style {` ${}	${} `}*/}
			<h1 className={`${styles.title} ${styles.color}`}>{title}</h1>
		</>
	);
}

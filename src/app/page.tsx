import styles from "../styles/home.module.scss";
import ButtonCnb from "@/components/ui/button-cnb";

export default function Home() {
    return (
        <div className={styles.home_wrap}>
            <h1 className={styles.h1}>My Boards</h1>
            <ButtonCnb/>
        </div>
    );
}

import styles from "./Home.module.scss";
import ButtonCnb from "@/components/ui/ButtonCnb";

export default function Home() {
    return (
        <div className={styles.home_wrap}>
            <h1 className={styles.h1}>My Boards</h1>
            <ButtonCnb/>
        </div>
    );
}

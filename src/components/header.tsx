import styles from "./header.module.scss";
import Image from "next/image";
import Link from "next/link";

// header: all routes website
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_wrap}>
                <nav className={styles.header_nav_board}>
                    <ul className={styles.header_nav_board_ul}>
                        <Link href="/">
                            <li className={styles.header_nav_board_li}>
                                <h3 className={styles.header_nav_board_li_h3}>Boards</h3>
                            </li>
                        </Link>
                    </ul>
                </nav>
                <Image className={styles.header_logo} src="/assets/images/logo/kanban-logo.svg" alt="" width={160}
                       height={49.65} priority/>
                <div></div>
            </div>
        </header>
    );
}

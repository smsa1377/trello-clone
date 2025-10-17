"use client"
import styles from "./ButtonCnb.module.scss";
import {useState} from "react";
import Image from "next/image";

// button cnb (create new board)
export default function ButtonCnb() {
    const [activeButton, setActiveButton] = useState<boolean>(true);
    const handleButtonCNBClose = () => {
        setActiveButton(!activeButton);
    }
    const handleButtonCNB = () => {
        setActiveButton(!activeButton);
    }
    return (
        <ul className={styles.button_cnb_wrap}>
            {activeButton &&
                <button className={styles.button_cnb} onClick={handleButtonCNBClose}>
                    Create new board...
                </button>
            }
            {!activeButton &&
                <div className={styles.button_cnb_outside}>
                    <form>
                        <input name="board-name" type="text" placeholder="Add board title" className={styles.input_cnb}
                               onChange={handleButtonCNB}/>
                        <div className={styles.checkbox_color}>
                            {[1, 2, 3, 4, 5].map((i: number, n: number) =>
                                <div className={`${styles.checkbox_color_item} ${i}`} key={n}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check"
                                         className="svg-inline--fa fa-check fa-w-16 fa-null fa-rotate-null fa-pull-null "
                                         role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                              d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                                    </svg>
                                </div>
                            )}
                        </div>
                        <button className={styles.button_cnb_outside_submit} type="submit">Create board</button>
                        <button className={styles.button_cnb_outside_close} onClick={handleButtonCNBClose}>
                            <Image className={styles.header_logo} src="/assets/other/close.svg" alt="" width={20}
                                   height={20} priority/>
                        </button>
                    </form>
                </div>
            }
        </ul>
    )
}

import Link from "next/link";

import styles from "./Navbar.module.css";


export function Navbar (){
    return(

        <>
            <div>
                <div className={styles.yc}>
                    <div className={styles.pok}>

                        <h1 className={styles.pok}>
                            Pokédex
                        </h1>
                        <form >
                            <label htmlFor="pswrd" className={styles.cc}>Search:</label>
                            <input
                                type="search"
                                id="srch"
                                name="srch"
                                pattern="[a-z0-9]{1,15}"
                            />
                        </form>

                    </div>
                </div>
            </div>



        </>

    )
}


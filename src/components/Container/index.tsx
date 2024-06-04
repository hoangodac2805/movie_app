import React from 'react'
import styles from "./_container.module.scss"
interface IContainer {
    children: React.ReactNode;
}

const Container:React.FC<IContainer> = ({
    children
}) => {
    return (
        <div className={styles.container}>{children}</div>
    )
}

export default Container
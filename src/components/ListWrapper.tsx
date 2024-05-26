import React from 'react'
import styles from "@/styles/components/_listWrapper.module.scss"
interface IContainer {
    children: React.ReactNode;
}

const ListWrapper: React.FC<IContainer> = ({
    children
}) => {
    return (
        <div className={styles.list}>{children}</div>
    )
}

export default ListWrapper
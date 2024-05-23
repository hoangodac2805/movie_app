import React from 'react'
import styles from "@/styles/components/_container.module.scss"
interface IContainer {
    children: React.ReactNode;
}

const Container:React.FC<IContainer> = ({
    children
}) => {
    return (
        <div className='l-container'>{children}</div>
    )
}

export default Container
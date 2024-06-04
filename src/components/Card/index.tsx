import React from 'react'
import Link from 'next/link'
import styles from './_card.module.scss';
import Image from 'next/image';
import star from "@/assets/img/star.svg"
interface ICard {
    link: string
    poster: string
    title: string
    vote: number
}

const Card: React.FC<ICard> = ({ link, poster, title, vote }) => {
    return (
        <div className={styles.card}>

            <div className={styles.card_bg} style={{ backgroundImage: `url(${poster})` }}>
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_poster}>
                    <img src={poster} alt={title} />
                </div>
                <div className={styles.card_vote}>
                    <Image width={16} height={16} src={star} alt='star' />
                    <span>{vote}</span>
                </div>
                <p className={styles.card_ttl}>{title}</p>
            </div>
            <Link href={link} className={styles.card_link}>
            </Link>
        </div>
    )
}

export default Card
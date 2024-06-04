import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import styles from './_cardsuggest.module.scss';
import star from "@/assets/img/star.svg"
import likeicon from '@/assets/img/like.svg'
import add from '@/assets/img/add.svg'
import videotick from '@/assets/img/video-tick.svg'
import { SUGGESTPROCESS } from '@/enums/process';
interface ICardSuggest {
    link: string
    poster: string
    title: string
    vote: number
    suggestProcess: SUGGESTPROCESS
    suggestAction: () => void
}

const CardSuggest: React.FC<ICardSuggest> = ({ link, poster, title, vote, suggestAction, suggestProcess }) => {
    const renderSuggestBtn = () => {
        switch (suggestProcess) {
            case SUGGESTPROCESS.SUGGEST:
                return <div><Image src={likeicon} alt='like' />Suggest this</div>
            case SUGGESTPROCESS.ADDTOLIST:
                return <div><Image src={add} alt='like' />Add to my list</div>
            case SUGGESTPROCESS.WATCHED:
                return <div className={styles.card_watched}><Image src={videotick} alt='like' />Already watched</div>
            default:
                return <div><Image src={likeicon} alt='like' />Suggest this</div>
        }
    }
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
                <div className={styles.card_actionBox}>
                    <div onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        suggestAction();
                    }} className={styles.card_action}>{renderSuggestBtn()}</div>
                </div>
            </div>
            <Link href={link} className={styles.card_link}>
            </Link>
        </div>
    )
}

export default CardSuggest
import React from "react";
import styles from "@/styles/components/_detail.module.scss";
import Image from "next/image";
import star from "@/assets/img/star.svg";
interface IInfoTable {
  [key: string | number]: {
    label: string;
    value: string | number;
  };
}

interface IDetailProps {
  backdrop_path: string;
  title: string;
  poster_path: string;
  tagline: string;
  overview: string;
  vote: number;
  type:string
  inforTable: IInfoTable;
}

const Detail: React.FC<IDetailProps> = ({
  backdrop_path,
  title,
  poster_path,
  tagline,
  overview,
  vote,
  type,
  inforTable,
}) => {
  const renderTable = () => {
    return (Object.keys(inforTable) as Array<keyof IInfoTable>).map((key) => (
      <li className={styles.detail_table_item} key={key}>
        <p className={styles.detail_table_item_label}>{inforTable[key].label}</p>
        <p className={styles.detail_table_item_value}>{inforTable[key].value}</p>
      </li>
    ));
  };
  return (
    <div className={styles.detail}>
      <figure className={styles.detail_banner}>
        <img src={process.env.imgHost + backdrop_path} alt={title} />
      </figure>
      <div className={styles.detail_lead}>
        <p className={styles.detail_breadcrumb}>MaileHereko / {type} </p>
        <p className={styles.detail_name}>{title}</p>
      </div>
      <div className={styles.detail_body}>
        <figure className={styles.detail_poster}>
          <img src={process.env.imgHost + poster_path} alt={title} />
        </figure>
        <div className={styles.detail_info}>
          <p className={styles.detail_tagline}>{tagline}</p>
          <p className={styles.detail_overview}>{overview}</p>
          <div className={styles.detail_vote}>
            <Image width={16} height={16} src={star} alt="star" />
            <span>{Number(vote.toFixed(1))}</span>
          </div>
          <ul className={styles.detail_table}>{renderTable()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;

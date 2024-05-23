import React from "react";
import styles from "@/styles/components/_search.module.scss";
import searchIcon from "@/assets/img/search-normal.svg";
import Image from "next/image";

type Props = {};

const Search = (props: Props) => {
  return (
    <div className={styles.search}>
      <Image className={styles.search_icon} src={searchIcon} alt="searchIcon" />
      <div className={styles.search_inputWrap}>
        <input placeholder=" " className={styles.search_input} type="text" />
        <span className={styles.search_placeHolder}>
          Search Movies or TV Shows
        </span>
      </div>
    </div>
  );
};

export default Search;

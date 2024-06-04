'use client'
import React, { useState } from "react";
import Image from "next/image";
import styles from "./_search.module.scss";
import searchIcon from "@/assets/img/search-normal.svg";

interface ISearchProps {
  handleSubmit: (value: string) => void,
  withButton?: boolean,
  defaultValue?:string
};

const Search: React.FC<ISearchProps> = ({ handleSubmit, withButton,defaultValue }) => {
  const [input, setInput] = useState("")

  return (
    <form className={styles.search_wrap} onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      handleSubmit(input);
    }}>
      <div className={styles.search}>
        <Image className={styles.search_icon} src={searchIcon} alt="searchIcon" />

        <div className={styles.search_inputWrap}>
          <input placeholder=" " defaultValue={defaultValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setInput(e.target.value) }} className={styles.search_input} type="text" />
          <span className={styles.search_placeHolder}>
            Search Movies or TV Shows
          </span>
        </div>
      </div>
      {withButton ? (<button>Search</button>) : ""}
    </form>

  );
};

export default Search;

import React from 'react'
import Search from './Search'
import Filter from './Filter'
import styles from './SearchAndFilter.module.scss';

type Props = {}

const SearchAndFilter = (props: Props) => {
  return (
    <div className={styles.searchAndFilter}>
      <Search />
      <Filter />
    </div>
  )
}

export default SearchAndFilter
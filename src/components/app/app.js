import React from "react";
import './app.css'

import AppHead from '../app-head/app-head';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';


const App = () => {
  const data = [
    {label: 'Going to learn react', important: false, key: 'qweqweq'},
    {label: 'That is so good', important: true, key: 'asdadas'},
    {label: 'I need a break...', important: false, key: 'zxcvzxc'},
  ]

  return (
      <div className="app">
        <AppHead />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={data} />
        <PostAddForm />
      </div>
  )
}
export default App

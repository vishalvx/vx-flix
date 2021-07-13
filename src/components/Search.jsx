import React from "react";


export function Search({ search, setSearch }) {
  return (
    <div >
      <label>Search : </label>
      <input onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}

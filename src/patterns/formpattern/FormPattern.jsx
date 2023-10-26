import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDataSourceListContainer } from "../../hooks/useDataSourceListContainer";
import PersonList from "./PersonList";
import debounce from "lodash.debounce";

export default function FormPattern() {
  const [filterPersons, setfilterPersons] = useState([]);
  const searchRef = useRef();
  const { dataSource, isLoading, onDeletePerson, onPutPerson, onPostPerson } =
    useDataSourceListContainer("/api/persons", "person", "srl");
  useEffect(() => {
    setfilterPersons(
      dataSource?.filter((item) =>
        item.lastname.includes(searchRef.current.value)
      )
    );
  }, [dataSource]);

  const handleChangeSearch = ({ target }) => {
    setfilterPersons(
      dataSource?.filter((item) => item.lastname.includes(target.value))
    );
    console.log(target.value);
  };
  const debouncedChangeHandler = useMemo(
    () => debounce(handleChangeSearch, 300),
    [dataSource]
  );

  return (
    <div>
      <div>
        <label>Search: </label>
        <input
          ref={searchRef}
          className="searchInput"
          type="text"
          name="search"
          placeholder="Please Enter your condition..."
          onChange={debouncedChangeHandler}
        />
      </div>
      <PersonList
        isLoading={isLoading}
        listItems={filterPersons}
        onDelete={onDeletePerson}
        onPut={onPutPerson}
        onPost={onPostPerson}
      />
    </div>
  );
}

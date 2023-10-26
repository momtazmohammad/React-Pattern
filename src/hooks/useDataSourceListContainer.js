import axios from "axios";
import { useEffect, useState } from "react";
export const useDataSourceListContainer = (
  dataSourceUrl,
  dataSourceName,
  dataSourceIdName
) => {
  const toCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const [dataSource, setDataSource] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getDataSource = async () => {
    setIsLoading(true);
    const response = await axios.get(dataSourceUrl);
    setIsLoading(false);
    if (!response.data) return;
    setDataSource(response.data);
  };

  useEffect(() => {
    getDataSource();
  }, [dataSourceUrl]);
  const onDelete = async (srl) => {
    try {
      const res = await axios.delete(`${dataSourceUrl}/${srl}`);
      setDataSource((cur) =>
        cur.filter((item) => item[dataSourceIdName] != srl)
      );
    } catch (err) {
      console.log(err);
    }
  };
  const onPost = async (data) => {
    try {
      const res = await axios.post(dataSourceUrl, { [dataSourceName]: data });      
      setDataSource((cur) => [...cur, res.data]);
    } catch (err) {
      console.log(err);
    }
  };
  const onPut = async (data) => {
    try {
      const res = await axios.put(
        `${dataSourceUrl}/${data[dataSourceIdName]}`,
        { [dataSourceName]: data }
      );
      setDataSource((cur) =>
        cur.map((item) =>
          item[dataSourceIdName] != data[dataSourceIdName] ? item : data
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  const dataSourceProps = {
    dataSource,
    isLoading,
    [`onDelete${toCapital(dataSourceName)}`]: onDelete,
    [`onPut${toCapital(dataSourceName)}`]: onPut,
    [`onPost${toCapital(dataSourceName)}`]: onPost,
  };
  return { ...dataSourceProps };
};

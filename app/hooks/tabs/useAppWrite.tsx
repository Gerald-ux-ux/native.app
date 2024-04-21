import { useEffect, useState } from "react";

type AppWriteProps = {
  fn: any;
};
export default function useAppWrite({ fn }: AppWriteProps) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = async () => {
    setLoading(true);
    const res = await fn();

    setData(res);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();
  return {
    loading,
    data,
    refetch,
  };
}

import React from "react";

const GetUserInfo = () => {
  const [data, setData] = React.useState<any[]>([]);

  const fetchUserData = async () => {
    await fetch("https://randomuser.me/api/?results=1")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  };

  React.useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="flex flex-col items-start gap-3">
      <h1>Customer Data</h1>
      {data?.length > 0 ? (
        <div>
          <p>Name : {data?.[0].name?.first}</p>
          <img src={data?.[0].picture?.large} alt="userImage" />
        </div>
      ) : (
        <h2>Data fetching...</h2>
      )}
    </div>
  );
};

export default GetUserInfo;

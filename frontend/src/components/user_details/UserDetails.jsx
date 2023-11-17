import "./user_details.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

export const UserDetails = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["user_details"],
    queryFn: () =>
      makeRequest.get("/user_details").then((res) => {
        return res.data;
      }),
  });

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="user_details">
      {data && (
        <div>
          <h2>User Details</h2>
          <p>User ID: {data[0].userId}</p>
          <p>Name: {data[0].name}</p>
          <p>Gender: {data[0].gender}</p>
          <p>Bio: {data[0].bio}</p>
          <p>Country: {data[0].country}</p>
          <p>Language: {data[0].language}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;

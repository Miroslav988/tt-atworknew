import axios from "axios";

const fetchUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      {
        params: {
          _limit: 6,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export default fetchUsers;

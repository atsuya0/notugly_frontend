import client from "@/api/client";

export default {
  post: async (data, token) => {
    return await client
      .post("/favorites", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        return res;
      })
      .catch(err => {
        throw err;
      });
  },
  delete: async (data, token) => {
    const headers = { Authorization: `Bearer ${token}` };
    return await client
      .delete("/favorites", {
        headers,
        data
      })
      .then(res => {
        return res;
      })
      .catch(err => {
        throw err;
      });
  }
};

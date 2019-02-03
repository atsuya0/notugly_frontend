import client from "@/api/client";

export default {
  post: async (data, token) => {
    client
      .post("/favorites", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(err => {
        throw err;
      });
  },
  delete: async (data, token) => {
    const headers = { Authorization: `Bearer ${token}` };
    client
      .delete("/favorites", {
        headers,
        data
      })
      .catch(err => {
        throw err;
      });
  }
};

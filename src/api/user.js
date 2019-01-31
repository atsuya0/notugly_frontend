import client from "@/api/client";

export default {
  get: async uid => {
    return client.get(`/users/${uid}`).catch(err => {
      throw err;
    });
  },
  post: async (params, token) => {
    client
      .post("/users/me", params, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(err => {
        throw err;
      });
  },
  put: async (params, token) => {
    client
      .put("/users/me", params, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(err => {
        throw err;
      });
  }
};

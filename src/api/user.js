import client from "@/api/client";

export default {
  get: async uid => {
    return await client
      .get(`/users/${uid}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        throw err;
      });
  },
  post: async (params, token) => {
    return await client
      .post("/users/me", params, {
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
  put: async (params, token) => {
    return await client
      .put("/users/me", params, {
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
  }
};

import client from "@/api/client";

export default {
  get: async coordinateId => {
    return await client
      .get(`/coordinates/${coordinateId}`)
      .then(res => {
        return res;
      })
      .catch(err => {
        throw err;
      });
  },
  getAtRandom: async token => {
    return await client({
      method: "GET",
      url: "/coordinate",
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
  getByUserId: async uid => {
    return await client
      .get(`/users/${uid}/coordinates`)
      .then(res => {
        return res;
      })
      .catch(err => {
        throw err;
      });
  },
  post: async (data, token) => {
    return await client
      .post("/coordinates", data, {
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
    return await client
      .delete("/coordinates", {
        data: {
          data
        },
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

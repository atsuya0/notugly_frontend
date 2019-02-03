import client from "@/api/client";

export default {
  get: async coordinateId => {
    return client.get(`/coordinates/${coordinateId}`).catch(err => {
      throw err;
    });
  },
  getAtRandom: async token => {
    return client({
      method: "GET",
      url: "/coordinate",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).catch(err => {
      throw err;
    });
  },
  getByUserId: async uid => {
    return client.get(`/users/${uid}/coordinates`).catch(err => {
      throw err;
    });
  },
  post: async (data, token) => {
    client
      .post("/coordinates", data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(err => {
        throw err;
      });
  },
  delete: async (data, token) => {
    client
      .delete("/coordinates", {
        data: {
          data
        },
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch(err => {
        throw err;
      });
  }
};

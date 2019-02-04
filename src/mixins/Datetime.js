export default {
  methods: {
    zeroPadding: function(value) {
      return ("00" + value).slice(-2);
    },
    getDate: function(now) {
      return `${now.getFullYear()}-${this.zeroPadding(
        now.getMonth() + 1
      )}-${this.zeroPadding(now.getDate())}`;
    },
    getTime: function(now) {
      return `${this.zeroPadding(now.getHours())}:${this.zeroPadding(
        now.getMinutes()
      )}:${this.zeroPadding(now.getSeconds())}`;
    },
    getDatetime: function() {
      const now = new Date();
      return `${this.getDate(now)} ${this.getTime(now)}`;
    }
  }
};

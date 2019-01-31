export default {
  rules: {
    required: v => !!v || "Required",
    minLen: len => v =>
      (v || "").length >= len || `Invalid character length, required ${len}`,
    maxLen: len => v =>
      (v || "").length <= len ||
      `Invalid character length, not more than ${len}`,
    email: v => /.+@.+/.test(v) || "Please enter a valid email",
    password: v =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/.test(v) ||
      "Password must contain an upper case letter, a numeric character, and a special character"
  }
};


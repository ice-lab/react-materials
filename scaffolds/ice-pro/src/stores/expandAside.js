export default {
  collapse: false,

  toggle(bool) {
    if (bool === undefined) {
      this.collapse = !this.collapse;
    } else {
      this.collapse = bool;
    }
  },
};

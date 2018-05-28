var app = new Vue({
  el: "#app",
  data: {
    items: [
      {id: 0, food: "orange"},
      {id: 1, food: "apple"},
      {id: 2, food: "grape"}
    ],
    newItem: '',
  },

  methods: {
    addItem: function () {
      this.items.push({id: this.items.length-1, food: this.newItem})
    },

    removeItem: function (id) {
      this.items.splice(id, 1)
    }
  }
})

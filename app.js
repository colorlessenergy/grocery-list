Vue.component("todo-item", {
  template: '\
  <li v-on:click="$emit(\'deletestate\')">\
  <p>{{ text }}</p>\
  <img :src=\'src\'>\
  <button v-on:click="$emit(\'remove\')">Remove</button>\
  </li>\
  ',
  props: ['text','src']
});

var app = new Vue({
  el: "#app",
  data: {
    purple: "purple",
    orange: "orange",
    todos: [
      {id: 0, text: "orange", isActive: false, isEven: true, image: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056_150.jpg'},
      {id: 1, text: "grape", isActive: false, isEven: false, image: 'https://cdn.pixabay.com/photo/2015/03/26/09/45/grapes-690230_150.jpg'},
      {id: 2, text: "lemon", isActive: false, isEven: true, image: 'https://cdn.pixabay.com/photo/2017/03/11/18/13/slice-of-lemon-2135548_150.jpg'}
    ],
    newTodo: ''
  },
  methods: {
    submitTodo: function () {
      var image;
      var that = this;
      fetch('https://pixabay.com/api/?key=4765740-700305074567594a583980abe&q='+ this.newTodo.split(" ").join("+") +'&image_type=all&per_page=3&order=popular&category=food')
      .then(function(response) {
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        image = myJson.hits[0].previewURL;
        // console.log(myJson.hits[0].previewURL);

        if (that.newTodo !== "") {
          that.todos.push({id: that.todos.length, text: that.newTodo, isActive: false, isEven: (that.todos.length % 2 === 0), image: image });
          that.newTodo = "";
        }
      });
    },
    removeTodos: function () {
      this.todos = this.todos.filter(function (current) {
        return !current.isActive;
      });
    }
  }
});

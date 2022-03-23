const numberOfFiles = 42 // todo: add auto-detection of number of files

var content = new Vue({
  el: '#content',
  mounted() {
    this.generateId()
  },
  data: {
    modeRandom: true,
    id: 0,
  },
  computed: {
    url(){
      return getUrl(this.id)
    },
  },
  methods: {
    generateId() {
      this.id = this.modeRandom ? (1+Math.floor(Math.random() * numberOfFiles)) : new Date().getDate()
    },
  },
  watch: {
    modeRandom: function () {
      this.generateId()
    }
  },
})

function getUrl(picNumber) {
  return 'assets/img/' + picNumber+ '.jpg' //todo: possibility handle any 
}
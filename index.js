const numberOfFiles = 2

var content = new Vue({
  el: '#content',
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
  mounted() {
    this.generateId()
  }
})

function getUrl(picNumber) {
  return 'assets/img/' + picNumber+ '.jpg'
}
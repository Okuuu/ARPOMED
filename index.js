const numberOfFiles = 2

var content = new Vue({
  el: '#content',
  data: {
    modeRandom: true,
  },
  computed: {
    id() {
      return this.modeRandom ? (1+Math.floor(Math.random() * numberOfFiles)) : new Date().getDate()
    },
    url(){
      return getUrl(this.id)
    }
  }
})

function getUrl(picNumber) {
  return 'assets/img/' + picNumber+ '.jpg'
}
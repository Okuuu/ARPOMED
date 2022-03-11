const numberOfFiles = 2

var content = new Vue({
  el: '#content',
  data: {
    mode: true,
    id: getId()
  },
  computed: {
    url(){
      return this.mode ? getUrl((1+Math.floor(Math.random() * numberOfFiles))) : getUrl(new Date().getDate())
    } 
  }
})

function getUrl(picNumber) {
  return 'img/' + picNumber+ '.jpg'
}

function getId() {
  return 'a'
}
var msg = new Vue({
  el: '#msg',
  data: {
  name: "Hello user,",
  welcome:"welcome to the web page!",
  inf:" This website can provide you with more detailed game information and information, wish you have a good time!",
	
  }
});

var item = new Vue({
  el: '#item',
  data: {
    item: [
      { text: 'LOL' },
	  { text: 'CS:GO' },
	  { text: 'DOTA2' }
      
    ]
  }
})

var announcement = new Vue({
  el: '#announcement',
  data: {
  seen: true,
   },
  });
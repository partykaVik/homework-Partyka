async function getRandomHieroglyph(lenght){
  let hieroglyphString = '';
  let i = 0;
    while(i<lenght){
      const generatHieroglyph = new Promise ((resolve) => {
      setTimeout(()=> {
        const dateToString = Date.now().toString().slice(-5)
        hieroglyphString = String.fromCharCode(dateToString)
        resolve(hieroglyphString)
      }, 50)
    })
    hieroglyphString += await generatHieroglyph
    i++
  }
  return hieroglyphString
}

const value = document.getElementById('value')
const result = document.getElementById('result')

value.addEventListener('change', (e)=> {
  getRandomHieroglyph(e.target.value)
  .then((hieroglyphString) => {
    result.value = hieroglyphString;
});
})



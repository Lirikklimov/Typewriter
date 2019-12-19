const t = [
    'Проснись, Нео!!!!\n',
    'Иди за белым кроликом\n',
    'Матрица следит за тобой\n',
    'Тринити.\n'
  ];
  
  function typeText(){
    let line = 0;
    let count = 0;
    let out = '';
    function typeLine() {
      let interval = setTimeout(
        () => {
          out += t[line][count]
          document.querySelector('pre').innerHTML =out +'|';
       
        
        count++;
        /**
        ** проверяем 
        **/
        if (count >= t[line].length) {
          count = 0;
          line++;
          if (line == t.length) {
            clearTimeout(interval);
             document.querySelector('pre').innerHTML =out;
            return true;
          }
        }
        typeLine();
      }, getRandomInt(getRandomInt(250*2.5)))
    }
    typeLine();
    
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  typeText();
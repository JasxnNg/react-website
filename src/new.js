

const hangulRomanization = [
    { hangul: "ㄱ", romanization: "g" },
    { hangul: "ㄴ", romanization: "n" },
    { hangul: "ㄷ", romanization: "d" },
    { hangul: "ㄹ", romanization: "r" },
    { hangul: "ㅁ", romanization: "m" },
    { hangul: "ㅂ", romanization: "b" },
    { hangul: "ㅅ", romanization: "s" },
    { hangul: "ㅇ", romanization: "ng" },
    { hangul: "ㅈ", romanization: "j" },
    { hangul: "ㅊ", romanization: "ch" },
    { hangul: "ㅋ", romanization: "k" },
    { hangul: "ㅌ", romanization: "t" },
    { hangul: "ㅍ", romanization: "p" },
    { hangul: "ㅎ", romanization: "h" },
    { hangul: "ㄲ", romanization: "kk" },
    { hangul: "ㄸ", romanization: "tt" },
    { hangul: "ㅃ", romanization: "pp" },
    { hangul: "ㅆ", romanization: "ss" },
    { hangul: "ㅉ", romanization: "jj" },
    { hangul: "ㅏ", romanization: "a" },
    { hangul: "ㅐ", romanization: "ae" },
    { hangul: "ㅑ", romanization: "ya" },
    { hangul: "ㅒ", romanization: "yae" },
    { hangul: "ㅓ", romanization: "eo" },
    { hangul: "ㅔ", romanization: "e" },
    { hangul: "ㅕ", romanization: "yeo" },
    { hangul: "ㅖ", romanization: "ye" },
    { hangul: "ㅗ", romanization: "o" },
    { hangul: "ㅘ", romanization: "wa" },
    { hangul: "ㅙ", romanization: "wae" },
    { hangul: "ㅚ", romanization: "oe" },
    { hangul: "ㅛ", romanization: "yo" },
    { hangul: "ㅜ", romanization: "u" },
    { hangul: "ㅝ", romanization: "wo" },
    { hangul: "ㅞ", romanization: "we" },
    { hangul: "ㅟ", romanization: "wi" },
    { hangul: "ㅠ", romanization: "yu" },
    { hangul: "ㅡ", romanization: "eu" },
    { hangul: "ㅢ", romanization: "ui" },
    { hangul: "ㅣ", romanization: "i" }
  ];

  let currentchar = {};

  function randomchar(){
      const randomind = Math.floor(Math.random() * hangulRomanization.length);
      currentchar = hangulRomanization[randomind];
    //   console.log(currentchar);
    //   console.log(randomind)
      document.getElementById('character').innerHTML = currentchar.hangul;
  }

  function checkRomanization(){
      const hira = document.getElementById('stuff').value.toLowerCase();
      if (hira == currentchar.romanization){
          document.getElementById('stuff').value = '';
          randomchar();
      }
   } 

   randomchar();
  function hint() {
      
  }
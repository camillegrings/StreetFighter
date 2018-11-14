import Personagem from "./personagem";

class ListaPersonagem {
    constructor(){
      this.configurarCharacters()
      this.configurar()
      this.mostrarPrimeiro()
      this.konamiCode()
    }

    mostrarPrimeiro() {
      const personagem = new Personagem()
      personagem.primeiro(this.characters[0])
    }
    
    configurar(){
        const personagem = new Personagem()
        ryu.onclick = () => {
          personagem.mostrar(this.characters[0])
        };
        ken.onclick = () => {
          personagem.mostrar(this.characters[1])
        };
        chun_li.onclick = () => {
          personagem.mostrar(this.characters[2])
        };
        dee_jay.onclick = () => {
          personagem.mostrar(this.characters[3])
        };
        cammy.onclick = () => {
          personagem.mostrar(this.characters[4])
        };
        sagat.onclick = () => {
          personagem.mostrar(this.characters[5])
        };
        zangief.onclick = () => {
          personagem.mostrar(this.characters[6])
        };
        akuma.onclick = () => {
          personagem.mostrar(this.characters[7])
        };
        blanka.onclick = () => {
          personagem.mostrar(this.characters[8])
        };
        silvio.onclick = () => {
          personagem.mostrar(this.characters[9])
        };
    }
    
    konamiCode(){
      const allowedKeys = {37: 'left', 38: 'up', 39: 'right', 40: 'down', 65: 'a', 66: 'b'};
      const konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
      let konamiCodePosition = 0;
      if(localStorage.status == 'active'){
        this.activatedSilvio()
      }else{
        body.addEventListener('keydown', event => {
          let key = allowedKeys[event.keyCode];
          let requiredKey = konamiCode[konamiCodePosition];
          if (key == requiredKey) {
              konamiCodePosition++;
              if (konamiCodePosition == konamiCode.length) {
                localStorage.setItem("status", "active")
                this.activateCheats();
                konamiCodePosition = 0;
              }
              } else {
                konamiCodePosition = 0;
              }
          });
      }
      
    }

    activateCheats() {
      document.getElementById('silvio').classList.remove('disable');
      document.getElementById('silvio').removeAttribute('disabled');
      document.getElementById('novoPersonagem').classList.remove('hide');
      const personagem = new Personagem()
      personagem.mostrar(this.characters[0])
    }

    activatedSilvio() {
      document.getElementById('silvio').classList.remove('disable');
      document.getElementById('silvio').removeAttribute('disabled');
    }
  

    configurarCharacters(){
        this.characters = [
            {
              name: 'Ryu',
              smallImg: 'assets/images/characters/ryu_headshot.jpg',
              largeImg: 'assets/images/characters/ryu.png',
              height: '5"9',
              fighting: 'Ansatsuken',
              skills: 'Sleeping anywhere',
              birth: 'jp',
              active: true
            },
            {
              name: 'Ken',
              smallImg: 'assets/images/characters/ken_headshot.jpg',
              largeImg: 'assets/images/characters/ken.png',
              height: '5"9',
              fighting: 'Ansatsuken',
              skills: 'Cooking pasta',
              birth: 'us',
            },
            {
              name: 'Chun-Li',
              smallImg: 'assets/images/characters/chun_li_headshot.jpg',
              largeImg: 'assets/images/characters/chun_li.png',
              height: '5"6',
              fighting: 'Chinese martial arts',
              skills: 'Shooting',
              birth: 'cn',
            },
            {
              name: 'Dee Jay',
              smallImg: 'assets/images/characters/dj_headshot.jpg',
              largeImg: 'assets/images/characters/dj.png',
              height: '6"1',
              fighting: 'Kickboxing',
              skills: 'Bamboo dancing',
              birth: 'jm',
            },
            {
              name: 'Cammy',
              smallImg: 'assets/images/characters/cammy_headshot.jpg',
              largeImg: 'assets/images/characters/cammy.png',
              height: '5"5',
              fighting: 'Shadaloo/Special Forces Training',
              skills: 'Knife throwing',
              birth: 'gb',
            },
            {
              name: 'Sagat',
              smallImg: 'assets/images/characters/sagat_headshot.jpg',
              largeImg: 'assets/images/characters/sagat.png',
              height: '7"5',
              fighting: 'Muay Thai',
              skills: 'Breathing underwater',
              birth: 'th',
            },
            {
              name: 'Zangief',
              smallImg: 'assets/images/characters/zangief_headshot.jpg',
              largeImg: 'assets/images/characters/zangief.png',
              height: '7"0',
              fighting: 'Russian/American Pro Wrestling',
              skills: 'Resistance to cold',
              birth: 'ru',
            },
            {
              name: 'Akuma',
              smallImg: 'assets/images/characters/akuma_headshot.jpg',
              largeImg: 'assets/images/characters/akuma.png',
              height: '5"10',
              fighting: 'Satsui no Hado/Ansatsuken',
              skills: 'Martial Arts',
              birth: 'jp',
            },
            {
              name: 'Blanka',
              smallImg: 'assets/images/characters/blanka_headshot.jpg',
              largeImg: 'assets/images/characters/blanka.png',
              height: '6"4',
              fighting: 'Feral movement, electric attacks',
              skills: 'Hunting',
              birth: 'br',
            },
            {
              name: 'Silvio',
              smallImg: 'assets/images/characters/silvio_headshot.png',
              largeImg: 'assets/images/characters/silvio.png',
              height: '6"0',
              fighting: 'Strategist',
              skills: 'Money planes throwing',
              birth: 'br',
              secret: true
            },
          ]
    }
    
}

export default ListaPersonagem
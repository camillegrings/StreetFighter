class Personagem{
    constructor(){
        
    }

    primeiro(personagem){
        let imagemElement = document.getElementById('fotoPersonagem');
        document.getElementById('nome').innerHTML = personagem.name;
        document.getElementById('altura').innerHTML = personagem.height;
        document.getElementById('luta').innerHTML = personagem.fighting;
        document.getElementById('habilidade').innerHTML = personagem.skills;
        document.body.className = `fundo-${personagem.birth}`;
        let id = personagem.name.toLowerCase();
        id = id.replace(' ', '_');
        id = id.replace('-', '_');
        document.getElementById(id).classList.add('active');
        document.getElementById(id).children[0].classList.add('show');
        imagemElement.src = personagem.largeImg;
    }

    mostrar(personagem){
        let imagemElement = document.getElementById('fotoPersonagem');
        document.getElementById('nome').innerHTML = personagem.name;
        document.getElementById('altura').innerHTML = personagem.height;
        document.getElementById('luta').innerHTML = personagem.fighting;
        document.getElementById('habilidade').innerHTML = personagem.skills;
        document.body.className = `fundo-${personagem.birth}`;
        imagemElement.classList.remove('slide');
        imagemElement.src = personagem.largeImg;
        let id = personagem.name.toLowerCase();
        id = id.replace(' ', '_');
        id = id.replace('-', '_');
        document.getElementsByClassName('active')[0].classList.remove('active');
        document.getElementsByClassName('show')[0].classList.remove('show');
        document.getElementById(id).classList.add('active');
        document.getElementById(id).children[0].classList.add('show');
        setTimeout(function() {
            imagemElement.classList.add('slide');
          }, 100);
    }
    
}

export default Personagem
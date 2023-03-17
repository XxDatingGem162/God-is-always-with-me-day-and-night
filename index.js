const YesBtn = document.querySelector('#YesBtn');

YesBtn.addEventListener('click',function () {
    alert('❤️GRACIAS POR DECIR QUE SI ❤️')
    alert('👫NO TE VAS A ARREPENTIR TE LO PROMETO👫')
    alert('💖QUE ESTO DURE Y SEA LO MAS REAL POSIBLE💖')
    alert('💕NO ME ARREPIENTO DE HABERTE CONOCIDO💕')
    alert('🌹TE AGRADEZCO TODOS LOS MOMENTOS BONITOS QUE EH PASADO CONTIGO🌹')
    alert('🎁Y QUE TODOS ESOS MOMENTOS BONITOS QUE HEMOS PASADO AHORA SE DUPLIQUEN🎁')
    alert('💌Y DE ULTIMAS, QUIERO DECIRTE QUE ERES UNA PERSONA QUE ADMIRO MUCHO ERES UNA CHICA MUY VALIENTE,MUY INTELIGENTE,UNA PERSONA MADURA ANTE CUALQUIER SITUACION Y POR MUCHAS RAZONES MERECES LO MEJOR DE LO MEJOR 💌')
    alert('💞TE💟QUIERO....💞') 
    alert('❣')
    location.href = 'https://drive.google.com/file/d/1oPIzMDjqASJhF916u0-s_nUe2cKWI4s4/view?usp=sharing';
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
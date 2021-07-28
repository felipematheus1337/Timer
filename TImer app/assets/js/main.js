function fRelogio() {
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let segundos = 0;
    let timer;
    
    function iniciaRelogio() {
         timer = setInterval(function () {
         segundos++;
         relogio.innerHTML = criaHoraDosSegundos(segundos);
        },1000)
    }
    
    
    
    
    
    
    iniciar.addEventListener('click',function(evento) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    });
    
    
    pausar.addEventListener('click',function(evento) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    })
    
    zerar.addEventListener('click',function(evento) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00'; 
        segundos = 0;
    })
    
    
    
    
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos*1000);    
        return data.toLocaleTimeString('pt-BR',{
            hour12:false,
            timeZone:'GMT'
        });
    }




    



}


fRelogio();


/* Outro modo de se fazer e mais prático.
document.addEventListener('click',function(e){
    const el = e.target;
    if(el.classList.contains('zerar')) {
       clearInterval(timer);
       relogio.innerHTML = '00:00:00';
       segundos = 0;
      }

      if(el.classList.contains('iniciar')) {
        clearInterval(timer);
          relogio.classList.remove('pausado');
        

        
       }


       if(el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
      clearInterval(timer);
      iniciaRelogio();
      
     }
    
}); */
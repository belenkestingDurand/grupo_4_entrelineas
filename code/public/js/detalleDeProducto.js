window.addEventListener('load', () => {
    // console.log('listo para js front');
    let btFichaTecnica = document.querySelector('.detail-title-info-ficha')
    let btMasInfo = document.querySelector('.detail-title-info-more')
    let displayFichaTecnica = document.querySelector('.display-more-tech')
    let displayMasInfo = document.querySelector('.display-more-info')
    
    btFichaTecnica.addEventListener('click', (e) => {
        console.log('hiciste click en FICHA TECNICA');
        displayFichaTecnica.classList.toggle('hidden-until-click')
        // btFichaTecnica.style.height = '100px'
        document.querySelector('.detail-extra-rect').classList.toggle('detail-max-size-ficha')
    })  
    btMasInfo.addEventListener('click', (e) => {
        console.log('hiciste click en MAS INFORMACION');
        displayMasInfo.classList.toggle('hidden-until-click')
        document.querySelector('.detail-extra-rect').classList.toggle('detail-max-size-info')
    })  
})
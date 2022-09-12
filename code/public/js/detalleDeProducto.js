window.addEventListener('load', () => {
    let sectionAmbosBotones = document.querySelector('.detail-extra-info')

    // Toggle de Mas Informacion
    let btMasInfo = document.querySelector('.detail-title-info-more')
    let displayMasInfo = document.querySelector('.display-more-info')
    
    btMasInfo.addEventListener('click', (e) => {
        console.log('hiciste click en MAS INFORMACION');
        displayMasInfo.classList.toggle('hidden-until-click-info')
    })  
    
    // Toggle de Ficha Tecnica
    let btFichaTecnica = document.querySelector('.detail-title-info-ficha')
    let displayFichaTecnica = document.querySelector('.display-more-tech')

    btFichaTecnica.addEventListener('click', (e) => {
        console.log('hiciste click en FICHA TECNICA');
        if (displayFichaTecnica.classList.contains('hidden-until-click-tech')) {
            displayFichaTecnica.classList.remove('hidden-until-click-tech')
            // btFichaTecnica.classList.toggle('detail-max-size-ficha')
            // sectionFichaTech.classList.toggle('detail-max-size-ficha')
        } else {
            displayFichaTecnica.classList.add('hidden-until-click-tech')
            // btFichaTecnica.classList.toggle('detail-max-size-ficha')
            // sectionFichaTech.classList.toggle('detail-max-size-ficha')
        }
    })  
})
let wordDecided = document.getElementById("wordDecided")
let btnDecide = document.getElementById('btnDecide')
let btnDeciding = document.getElementById('btnDeciding')
let btnDecided = document.getElementById('btnDecided')
let btnTranslate = document.getElementById('translate')

btnTranslate.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    btnTranslate.innerHTML = 'Eu finalmente decidi...'
    btnTranslate.style.boxShadow = '1px 1px 1px black'
    setTimeout(function()
    {
        btnTranslate.innerHTML = 'Translate'
        btnTranslate.style.boxShadow = '2px 2px 3px black'
    }, 1500)

})


btnDecided.addEventListener('click', function() {
    let songAudio = document.getElementById('song')
    songAudio.play()
    let audio = document.getElementById('click')
    audio.play()
    wordDecided.innerHTML = 'decided'
    wordDecided.style.color = 'lime'
    btnDecided.style.background = 'lawngreen'
    btnDecided.style.color = 'green'
    btnDecided.disabled = 'true'
    btnDecide.disabled = 'true'
    btnDeciding.disabled = 'true'
})

btnDecide.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordDecided.innerHTML = 'decide'
    wordDecided.style.color = 'red'
    btnDecide.style.background = 'red'
    btnDecide.disabled = 'true'
})

btnDeciding.addEventListener('click', function() {
    let audio = document.getElementById('click')
    audio.play()
    wordDecided.innerHTML = 'deciding'
    wordDecided.style.color = 'red'
    btnDeciding.style.background = 'red'
    btnDeciding.disabled = 'true'
})
// let btn_draw = document.querySelector('.but')
// let field_container = document.querySelector('.field-container')
// function scrollDown(e) {
//     e.preventDefault()
//     field_container.style.display = 'flex'
//     window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
// }

// btn_draw.addEventListener('click', scrollDown)



// let CURRENT_COLOR = 'white'
// let DEFAULT_COLOR = 'gray'
// let field = document.querySelector('.field')
// for (let i=0; i<450;i+=1){
//     let cell=document.createElement('div')
//     cell.classList.add('cell')
//     cell.setAttribute('id',`${i}`)
//     field.appendChild(cell)   
// }
// let IS_CLICED = false
// document.addEventListener('mousedown',function(){
//     IS_CLICED=true
// })
// document.addEventListener('mouseup',function(){
//     IS_CLICED=false
// })
// let cells = document.querySelectorAll('.cell')
// cells.forEach(cell =>{
//     cell.addEventListener('mouseover', function(){
//         if (IS_CLICED){
//             cell.style.backgroundColor=CURRENT_COLOR
//         }
//     })
//     cell.addEventListener('mousedown', function(){
//         cell.style.backgroundColor=CURRENT_COLOR
//     })
// })

// let red_color = document.querySelector('.red')
// red_color.addEventListener('click', function(){
//     CURRENT_COLOR='red'
//     let selected = document.querySelector('.selected')
//     selected.classList.remove('selected')
//     red_color.classList.add('selected')

// })
// let purple_color = document.querySelector('.violet')
// purple_color.addEventListener('click', function(){
//     CURRENT_COLOR='purple'
//     let selected = document.querySelector('.selected')
//     selected.classList.remove('selected')
//     purple_color.classList.add('selected')

// })
// let blue_color = document.querySelector('.blue')
// blue_color.addEventListener('click', function(){
//     CURRENT_COLOR='blue'
//     let selected = document.querySelector('.selected')
//     selected.classList.remove('selected')
//     blue_color.classList.add('selected')

// })

// let green_color = document.querySelector('.green')
// green_color.addEventListener('click', function(){
//     CURRENT_COLOR='green'
//     let selected = document.querySelector('.selected')
//     selected.classList.remove('selected')
//     green_color.classList.add('selected')

// })
// let white_color = document.querySelector('.white')
// white_color.addEventListener('click', function(){
//     CURRENT_COLOR='white'
//     let selected = document.querySelector('.selected')
//     selected.classList.remove('selected')
//     white_color.classList.add('selected')

// })
// let eraser = document.querySelector('.eraser')
// eraser.addEventListener('click', function(){
//     CURRENT_COLOR='gray'
//     let selected = document.querySelector('.selected')
//     selected.classList.remove('selected')
//     eraser.classList.add('selected')

// })

// document.querySelector('.save').addEventListener('click', function(){
//     domtoimage.toJpeg(field)
//     .then(function (dataUrl) {
//         let link = document.createElement('a');
//         link.download = 'my-image-name.jpeg';
//         link.href = dataUrl;
//         link.click();
//     });
// })



let FILL_MODE = false
let IS_CLICKED = false
document.addEventListener('mousedown', function(){
   IS_CLICKED = true 
})
document.addEventListener('mouseup', function(){
   IS_CLICKED = false 
})

let CURRENT_COLOR = 'rgb(54, 54, 54)'

let DEFAULT_COLOR = 'rgb(54, 54, 54)'


let field = document.querySelector('.field')
for (let i = 0; i < 450; i += 1) {
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.setAttribute('id', `${i}`)
    field.appendChild(cell)

}
let cells = document.querySelectorAll('.cell')

cells.forEach(cell => {
    cell.addEventListener('mouseover',function(){
        if (IS_CLICKED) 
        cell.style.backgroundColor = CURRENT_COLOR
    })


    cell.addEventListener('click',function(){
    if (FILL_MODE) {
    cells.forEach(cell => {
        cell.style.backgroundColor = CURRENT_COLOR
    })

    } else {

        cell.style.backgroundColor = CURRENT_COLOR
    }

    })

})

let color_blue = document.querySelector('.blue')
color_blue.addEventListener('click', function(){
    CURRENT_COLOR = '#3216B0'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_blue.classList.add('selected')
    FILL_MODE = false
    })

let color_red = document.querySelector('.red')
color_red.addEventListener('click', function(){
    CURRENT_COLOR = '#BF3030'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_red.classList.add('selected')
    FILL_MODE = false
})

let color_black = document.querySelector('.black')
color_black.addEventListener('click', function(){
    CURRENT_COLOR = 'black'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_black.classList.add('selected')
    FILL_MODE = false
    })

let color_green = document.querySelector('.green')
color_green.addEventListener('click', function(){
    CURRENT_COLOR = '#00BB3F'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_green.classList.add('selected')
    FILL_MODE = false
    })

let color_yellow = document.querySelector('.yellow')
color_yellow.addEventListener('click', function(){
    CURRENT_COLOR = '#FFEE40'
    document.documentElement.style.cssText = `--current-color: ${CURRENT_COLOR}`
    document.querySelector('.selected').classList.remove('selected')
    color_yellow.classList.add('selected')
    FILL_MODE = false
    })



document.querySelector('.eraser').addEventListener('click', function(){
    CURRENT_COLOR = DEFAULT_COLOR
    FILL_MODE = false
    document.querySelector('.selected').classList.remove('selected')
    document.querySelector('.eraser').classList.add('selected')
    
})

document.querySelector('.fill').addEventListener('click', function(){
FILL_MODE = !FILL_MODE

})

function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let header = document.querySelector('header')
let main = document.querySelector('main')

let start_btn = document.querySelector('.knop')
start_btn.addEventListener('click', function(e){
    e.preventDefault()
    main.style.display = 'flex'
    scrollDown()
    setTimeout(function(){header.style.display = 'none' }, 500)

})

let save_btn = document.querySelector('.conservation')
save_btn.addEventListener('click', function(){
    field.style.gap = '0'
    domtoimage.toJpeg(field)
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'pixel.jpeg';
        link.href = dataUrl;
        link.click();
    });
    setTimeout(function(){field.style.gap = '.5px' }, 500)

    

})







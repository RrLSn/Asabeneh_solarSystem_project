const planets = ['MOON','MERCURY', 'VENUS', 'EARTH', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE', 'PLUTO']

// selctors
const inputEl = document.querySelector('input')
const selectEl = document.querySelector('select')
const buttonEl = document.querySelector('button')
const requiredEl = document.querySelector('.required')
const image_wrapper = document.querySelector('.img_wrapper')
const weigthEl = document.querySelector('.weigth_info')
const planetEl = document.querySelector('.planet')
// const weigthEl = document.querySelector('.weigth')

const activePlanet = planets[3]
// const gravityArray = [1.6, 3.7, 8.87, 9.8, 3.7, 24.5, 10.44, 8.87, 11.15, 0.58]

image_wrapper.innerHTML = `<img src="./media/Earth.png" alt="planet" />`

for(planet of planets){
    selectEl.innerHTML += `<option value=${planet}>${planet}</option>`
}

buttonEl.addEventListener(
    'click',
    (e) => {
        e.preventDefault();
        if(inputEl.value === ''){
            image_wrapper.style.display = 'none'
            requiredEl.style.display = 'block'
            requiredEl.textContent = 'Mass is required'
        }else if(selectEl.value === 'null'){
            image_wrapper.style.display = 'none'
            requiredEl.style.display = 'block'
            requiredEl.textContent = 'Select a Planet'
        }else{
            activePlanet = selectEl.value;
            // planetEl.textContent = activePlanet
            // image_wrapper.innerHTML= `<img src="./media/${activePlanet.substr(1,activePlanet.length).toLowerCase()}.png" alt="planet" />`
            // image_wrapper.style.display = 'block'
            // weigthEl.style.display = 'block'
        }
    }
)
async function getData() {
     try {
          const response = await fetch('changelog.txt');
          if (!response.ok) { // Check if the request was successful
               throw new Error('Network response was not ok');
          }
          return await new Response(response.body).text();
     } catch (error) {
          console.error('Error fetching data:', error);
     }
}

let dod = await getData()

const huy = dod.match(/commit.+/g)
const yu = huy.map((value) => {
               return `<span style="color: #ffb300">${value}</span>`
          })
          .forEach((value, index) => {
               dod = dod.replace(huy[index], value)
          })

const iop = dod.split('\n\n').slice(0, 2).join('\n\n')

document.querySelector('.updatelogs__terminal').innerHTML = dod
document.querySelector('.updatelogs__terminal span').innerHTML += ' (<span style="color: #51cbd3; font-weight: bolder">HEAD -></span> <span style="color: #43cd5f; font-weight: bolder">main</span>)'

//const container = document.querySelector('.updatelogs__console')
//container.scrollTop = container.scrollHeight - container.clientHeight;

//console.log(dod)

/* const yu = data.match(/commit.+/g).map(value => `<span style="color: #ffb300">${value}</span>`)
          for (const index in yu) {
               data = data.replace(data.match(/commit.+/g)[index], yu[index])
          }
          
          document.querySelector('.updatelogs__terminal').innerHTML = data
          document.querySelector('.updatelogs__terminal span').innerHTML += ' (<span style="color: #51cbd3; font-weight: bolder">HEAD -></span> <span style="color: #43cd5f; font-weight: bolder">main</span>)'

          const container = document.querySelector('.updatelogs__console')
          container.scrollTop = container.scrollHeight - container.clientHeight;

          const we = document.querySelector('.updatelogs__terminal').textContent.split('\n\n') */



//document.querySelector('.updatelogs__terminal').insertAdjacentHTML('beforeend', dod);


//console.log(dod)


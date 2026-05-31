"use strict";

async function getData() {
     try {
          const response = await fetch('changelog.txt');
          if (!response.ok) { // Check if the request was successful
               throw new Error('Network response was not ok');
          }

          const data = await new Response(response.body).text();
          document.querySelector('.updatelogs__console').textContent = data
     } catch (error) {
          console.error('Error fetching data:', error);
     }
}

getData()
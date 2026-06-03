import featured from '../json/featured.json' with { type: 'json' };

function toUpperFirstCase(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);
}

const albumlistBody = document.querySelector('.blogs__bloglist tbody')
const albumlistSection = document.querySelector('.blogs__bloglist-section');
const albumlistContent = document.querySelector('.blogs__bloglist-content');
albumlistSection.remove();
albumlistContent.remove();

for (const [key, value] of Object.entries(featured)) {
     if (Object.keys(value).length === 0) break; // No empty content, there's nothing special here

     const albumlistSectionClone = albumlistSection.cloneNode(true);
     albumlistSectionClone.querySelector('.blogs__bloglist-section-grp').textContent = toUpperFirstCase(key)
     albumlistBody.appendChild(albumlistSectionClone)

     for (const element of Object.values(value)) {
          const albumlistContentClone = albumlistContent.cloneNode(true);

          albumlistContentClone.querySelector('.blogs__bloglist-link').setAttribute('href', element.title.link);
          albumlistContentClone.querySelector('.blogs__bloglist-title').textContent = element.title.content;

          albumlistContentClone.querySelector('.blogs__bloglist-type').textContent = element.type;
          albumlistContentClone.querySelector('.blogs__bloglist-description').textContent = element.description;
          albumlistContentClone.querySelector('.blogs__bloglist-time').textContent = element.time;
          albumlistContentClone.querySelector('.blogs__bloglist-time').setAttribute('datetime', element.time)
          albumlistBody.appendChild(albumlistContentClone);
     }
}
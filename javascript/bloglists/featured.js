import { bloglistData } from "../modules/shortcuts.js"
import { toUpperFirstCase } from '../modules/shortcuts.js'

const bloglistBody = document.querySelector('.blogs__bloglist tbody')
const bloglistSection = document.querySelector('.blogs__bloglist-section');
const bloglistContent = document.querySelector('.blogs__bloglist-content');
bloglistSection.remove();
bloglistContent.remove();

for (const [key, value] of Object.entries(bloglistData)) {
     if (Object.keys(value).length === 0) break; // No empty content, there's nothing special here

     const bloglistSectionClone = bloglistSection.cloneNode(true);
     bloglistSectionClone.querySelector('.blogs__bloglist-section-grp').textContent = toUpperFirstCase(key)
     bloglistBody.appendChild(bloglistSectionClone)

     let elementIndices = 0;
     for (const element of Object.values(value)) {
          elementIndices += 1; if (elementIndices > 3) break;
          const bloglistContentClone = bloglistContent.cloneNode(true);

          bloglistContentClone.querySelector('.blogs__bloglist-link').setAttribute('href', element.title.link);
          bloglistContentClone.querySelector('.blogs__bloglist-title').textContent = element.title.content;

          bloglistContentClone.querySelector('.blogs__bloglist-type').textContent = element.type;
          bloglistContentClone.querySelector('.blogs__bloglist-description').textContent = element.description;
          bloglistContentClone.querySelector('.blogs__bloglist-time').textContent = element.time;
          bloglistContentClone.querySelector('.blogs__bloglist-time').setAttribute('datetime', element.time)
          bloglistBody.appendChild(bloglistContentClone);
     }
}
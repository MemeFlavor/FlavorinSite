import featured from '../pages/blogs/json/featured.json' with { type: 'json' };

function toUpperFirstCase(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);
}

const blogListsBody = document.querySelector('.bloglists__body');
const blogListsObjSection = document.querySelector('.bloglists__object-section');
const blogListsObjContent = document.querySelector('.bloglists__object-content');

for (const [key, value] of Object.entries(featured)) {
     if (Object.keys(value).length === 0) break; // No empty content, there's nothing special here

     const blogListsSectionClone = blogListsObjSection.content.cloneNode(true);
     blogListsSectionClone.querySelector('.bloglists__section-text').textContent = toUpperFirstCase(key);
     blogListsBody.appendChild(blogListsSectionClone);

     for (const element of Object.values(value)) {
          const blogListsContentClone = blogListsObjContent.content.cloneNode(true);

          const blopgListsContentLink = blogListsContentClone.querySelector('.bloglists__content-link');
          blopgListsContentLink.textContent = element.title.content;
          blopgListsContentLink.setAttribute('href', element.title.link);

          blogListsContentClone.querySelector('.bloglists__content-type').textContent = element.type;
          blogListsContentClone.querySelector('.bloglists__content-description').textContent = element.description;
          blogListsContentClone.querySelector('.bloglists__content-time').textContent = element.time;
          blogListsContentClone.querySelector('.bloglists__content-time').setAttribute('datetime', element.time)

          blogListsBody.appendChild(blogListsContentClone);
     }
}
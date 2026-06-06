/**
 * TODO: Revamp the entire thing cuz its a mess
     * Unoptimize code at the pagination section
     * Slight spaghetti code shenanigans 
*/

import announcements from '../../json/blogs/announcements.json' with { type: 'json' };
import weblogs from '../../json/blogs/weblogs.json' with { type: 'json' };

function toUpperFirstCase(str) {
     return str.charAt(0).toUpperCase() + str.slice(1);
}

function bloglistGenerateChunks(bloglistData) {
     const SEPARATE = 10

     let chunksIndex = -1
     const chunks = []
     for (let index = 0; index < bloglistData.length; index++) {
          if (index % SEPARATE == 0) {
               chunksIndex += 1
               chunks[chunksIndex] = []
          }
          chunks[chunksIndex][index % SEPARATE] = bloglistData[index]
     }
     return chunks
}

let bloglist = null
let bloglistName = window.location.pathname.match(/\w+\.html$/g)[0].replace('\.html', '')
if (bloglistName == 'announcements') {
     bloglist = bloglistGenerateChunks(announcements)
} else if (bloglistName == 'weblogs') {
     bloglist = bloglistGenerateChunks(weblogs)
}

const bloglistBody = document.querySelector('.blogs__bloglist tbody')
const bloglistSection = document.querySelector('.blogs__bloglist-section');
const bloglistContent = document.querySelector('.blogs__bloglist-content');
function bloglistGenerateForum(bloglistSectionName, bloglistPage) {
     document.querySelectorAll('.blogs__bloglist-section').forEach(element => element.remove())
     document.querySelectorAll('.blogs__bloglist-content').forEach(element => element.remove())

     const bloglistSectionClone = bloglistSection.cloneNode(true);
     bloglistSectionClone.querySelector('.blogs__bloglist-section-grp').textContent = toUpperFirstCase(bloglistSectionName)
     bloglistBody.appendChild(bloglistSectionClone)

     for (const element of Object.values(bloglist[bloglistPage])) {
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

/** 
 * TODO: Recode this entire area since its unoptimize, also I've gone insaning from coding this shit
*/
// Page Navigation type stuff //

const currentUrl = new URL(window.location.href);
const currentUrlSearch = new URLSearchParams()

const bloglistPagesBtn = document.querySelectorAll('.blogs__pagination-pages-btn')
const bloglistPagesBtnNext = bloglistPagesBtn[2]
const bloglistPagesBtnPrev = bloglistPagesBtn[0]

const bloglistPages = [1, 2, 3]
for (let index = 0; index < bloglist.length; index++) {
     bloglistPages[index] = index + 1
}

const bloglistPageGroupMax = bloglistPages.length - 2
const bloglistPageRangeMax = bloglistPages.length - 3
const bloglistPageGroup = []
for (let index = 0; index < bloglistPageGroupMax; index++) {
     bloglistPageGroup.push(bloglistPages.slice(index, index + 3))
}

const bloglistPageIndexRange = [0, bloglistPageRangeMax]
for (let index = bloglistPageGroupMax; index > 0; index--) {
     bloglistPageIndexRange.splice(1, 0, index - 1)
}

const pageIndexAdjustment = () => { // Helper function
     const currentPage = Number(currentUrlSearch.get('page'))
     return currentPage <= bloglist.length ? (currentPage == 0 ? 1 : currentPage) : 1;
}
let pageSection = 1
let pageIndex = pageIndexAdjustment()
function bloglistRenderPagination(bloglistItem) {
     if (bloglistItem.textContent == pageIndex) {
          bloglistItem.classList.add('blogs__pagination-pages-btn--current')
          bloglistItem.setAttribute('disabled', '')
          bloglistGenerateForum(toUpperFirstCase(bloglistName), Number(pageIndex) - 1)

          if (pageIndex == 1) {
               currentUrl.searchParams.delete('page');
          } else {
               currentUrl.searchParams.set('page', Number(pageIndex));
          }
          window.history.pushState({}, '', currentUrl);
     } else {
          bloglistItem.classList.remove('blogs__pagination-pages-btn--current')
          bloglistItem.removeAttribute('disabled')
     }

     if (bloglist.length < Number(bloglistItem.textContent)) {
          bloglistItem.classList.add('blogs__pagination-pages-btn--nil')
          bloglistItem.setAttribute('disabled', '')
     }
}

// Initial execution rendering and loading
bloglistPagesBtn.forEach((item, index) => {
     pageSection = bloglistPageIndexRange[pageIndex - 1]

     item.textContent = bloglistPageGroup[pageSection][index]
     item.addEventListener('click', () => pageIndex = Number(item.textContent))
     bloglistRenderPagination(item)
})

// Navigation stuff
bloglistPagesBtnNext.addEventListener('click', () => {
     if (bloglistPageGroup[pageSection + 1] != undefined) {
          pageSection += 1
          bloglistPagesBtn.forEach((item, index) => item.textContent = bloglistPageGroup[pageSection][index])
     };
})

bloglistPagesBtnPrev.addEventListener('click', () => {
     if (bloglistPageGroup[pageSection - 1] != undefined) {
          pageSection -= 1
          bloglistPagesBtn.forEach((item, index) => item.textContent = bloglistPageGroup[pageSection][index])
     };
})

// Update pagination rendering
bloglistPagesBtn.forEach((item) => {
     item.addEventListener('click', () => bloglistPagesBtn.forEach(item => bloglistRenderPagination(item)))
})
import weblogs from '../../json/weblogs.json' with { type: 'json' };

const Ranks = Object.freeze({
     FRESH: 0,
     PRESERVED: 3
});

const weblogsBodyDirectory = document.querySelector('.weblog__directory tbody')
const weblogsBodyRank = document.querySelector('.weblog__rank');
const weblogsBodyPage = document.querySelector('.weblog__pages');
const weblogsPageTags = document.querySelector('.weblog__pages-tags')
weblogsBodyRank.remove();
weblogsBodyPage.remove();
weblogsPageTags.remove()

function createWeblogRank(rankName) {
     const weblogsBodyRankClone = weblogsBodyRank.cloneNode(true);
     weblogsBodyRankClone.querySelector('.weblog__ranktitle').textContent = rankName
     weblogsBodyDirectory.appendChild(weblogsBodyRankClone)
}

function createWeblogPages(weblogData) {
     const bloglistContentClone = weblogsBodyPage.cloneNode(true);
     bloglistContentClone.querySelector('.weblog__pages-titlelink').textContent = weblogData.title.content;
     bloglistContentClone.querySelector('.weblog__pages-titlelink').setAttribute('href', weblogData.title.link);
     bloglistContentClone.querySelector('.weblog__pages-date').textContent = weblogData.date;
     bloglistContentClone.querySelector('.weblog__pages-date').setAttribute('datetime', weblogData.date)

     for (const tags of weblogData.tags) {
          const weblogPageNewTags = document.createElement("span");
          weblogPageNewTags.textContent = tags;
          weblogPageNewTags.classList.add('weblog__pages-tags', `weblog__pages-tags--${tags}`)

          bloglistContentClone.querySelector('.weblog__pages-stickers').appendChild(weblogPageNewTags)
     }
     bloglistContentClone.setAttribute('data-tags', weblogData.tags.join(' '))

     bloglistContentClone.querySelector('.weblog__pages-description').textContent = weblogData.description;
     weblogsBodyDirectory.appendChild(bloglistContentClone);
}

for (const [weblogPage, weblogData] of Object.entries(weblogs)) {
     if (weblogPage == Ranks.FRESH) {
          createWeblogRank('Fresh Bumfuzzles')
     } else if (weblogPage == Ranks.PRESERVED) {
          createWeblogRank('Preserved Flavors')
     }
     createWeblogPages(weblogData)
}
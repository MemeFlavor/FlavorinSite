const postCodeBody = document.querySelectorAll('.post__code-text')

for (let codeBodyIndex = 0; codeBodyIndex < postCodeBody.length; codeBodyIndex++) {
     const codeBodyElement = postCodeBody[codeBodyIndex];

     const observer = new IntersectionObserver((entries) => {
          const self = entries[0]
          if (!self.isIntersecting) return;

          const postCodeBodyLines = self.target.textContent.match(/\n/g)
          const postCodeBodyNums = Object.keys(postCodeBodyLines).map((_, lines) => lines + 1)

          const postCodeLines = document.querySelectorAll('.post__code-lines')[codeBodyIndex]
          for (const nums of postCodeBodyNums) {
               const span = document.createElement('span')
               span.textContent = nums;
               postCodeLines.appendChild(span)
          }

          postCodeLines.firstElementChild.remove();
          observer.unobserve(self.target);
     }, {})
     observer.observe(codeBodyElement)
}
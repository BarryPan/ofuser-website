document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-fade-in");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});

function toggleReadMore(link) {
  const content = link.nextElementSibling;
  const isExpanded = content.style.display === 'block';

  if (!isExpanded) {
    // Expand: show content
    content.style.display = 'block';

    // Create "Read Less" link
    const readLessLink = document.createElement('span');
    readLessLink.textContent = 'Read Less';
    readLessLink.className = 'read-more-link';
    readLessLink.style.display = 'block';
    readLessLink.style.marginTop = '1rem';
    readLessLink.style.cursor = 'pointer';

    // Attach the same toggle function
    readLessLink.onclick = () => {
      toggleReadMore(link);
    };

    // Append Read Less and hide original
    content.appendChild(readLessLink);
    link.style.display = 'none';

  } else {
    // Collapse: hide content
    content.style.display = 'none';

    // Remove "Read Less" link if exists
    const lastChild = content.lastElementChild;
    if (lastChild && lastChild.textContent === 'Read Less') {
      content.removeChild(lastChild);
    }

    // Show original "Read More" link again
    link.style.display = 'inline';
  }
};


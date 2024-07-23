function process_path_elem(path_elem) {
    let parent = path_elem.parentElement;
    // heuristic: find 1st parent that is not a span nor an svg
    while (parent && (parent.tagName.toLowerCase() === 'span' || parent.tagName.toLowerCase() === 'svg')) {
        parent = parent.parentElement;
    }
    if (parent) {
        // parent.style.display = 'none';
        // less aggressive, just set opacity to 10%
        parent.style.opacity = '0.05';
    }
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                // find any path child with the proper data
                let path_elem = node.querySelector('path[d="M7.51 4.87C7.01 6.27 6.45 6.95 5.94 7c-.57.07-1.07-.18-1.54-.8a.54.54 0 0 0-.1-.1 1 1 0 1 0-.8.4l.01.12.82 3.24A1.5 1.5 0 0 0 5.78 11h4.44a1.5 1.5 0 0 0 1.45-1.14l.82-3.24a.54.54 0 0 0 .01-.12 1 1 0 1 0-.8-.4.54.54 0 0 0-.1.09c-.49.62-1 .87-1.54.81-.5-.05-1.04-.74-1.57-2.13a1 1 0 1 0-.98 0zM11 11.75a.5.5 0 1 1 0 1H5a.5.5 0 1 1 0-1h6z"]');
                if (path_elem) {
                    process_path_elem(path_elem);
                }
            }
        });
    });
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});

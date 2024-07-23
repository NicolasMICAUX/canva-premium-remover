function process_path_elem(path_elem) {
    let parent = path_elem.parentElement;
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
                // check if contains a child element of class 'path'
                let path_elem = node.querySelector('path[d^="M7.51"]');
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

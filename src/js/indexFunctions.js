export function collapseButtonClicked(button) {
    const icons = {
        notCollapsed: "bi-caret-up-fill",
        collapsed: "bi-caret-down-fill"
    }
    if (button.dataset.collapsed === "true") {
        button.dataset.collapsed = "false"
        button.classList.remove(icons.collapsed)
        button.classList.add(icons.notCollapsed)
    }
    else {
        button.dataset.collapsed = "true"
        button.classList.add(icons.collapsed)
        button.classList.remove(icons.notCollapsed)
    }
}
export function openURL(newURL) {
    window.open(openURL)
}
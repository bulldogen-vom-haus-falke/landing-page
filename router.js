const subRoutes = {
    "/": "/home.html",
    "/gallery": "/gallery.html",
    "/gallery/schoko-merle": "/bully_babes/schoko_merle/schoko-merle.html",
    "/impressum": "/impressum.html"
};
const render = path => {
    const templateName = subRoutes[path];
    $("#root").load(subRoutes[path]);
};
window.addEventListener("popstate", e =>
    render(new URL(window.location.href).pathname)
);
document.querySelectorAll('[href^="/"]').forEach(el =>
    el.addEventListener("click", evt => {
        evt.preventDefault();
        const { pathname: path } = new URL(evt.target.href);
        window.history.pushState({ path }, path, path);
        render(path);
    })
);
render("/");
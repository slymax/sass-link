(() => {
    const styles = [
        ...document.getElementsByTagName("link"),
        ...document.getElementsByTagName("style")
    ].filter(item => {
        return ["text/scss","text/sass"].includes(item.type);
    });
    let processed = 0;
    function inject() {
        styles.forEach(item => {
            const style = document.createElement("style");
            style.innerHTML = item;
            document.head.appendChild(style);
        });
        document.body.removeAttribute("sass-cloak");
    }
    function compile(sass, type, index, href) {
        Sass.compile(sass, {
            indentedSyntax: type === "text/sass"
        }, css => {
            processed++;
            if (css.status === 0) styles[index] = css.text;
            else console.error(css.message + (href ? `on line ${css.line} of ${href}` : ""));
            if (processed === styles.length) inject();
        });
    }
    styles.forEach((item, index) => {
        if (item.href) {
            fetch(item.href).then(response => {
                return response.text();
            }).then(data => {
                compile(data, item.type, index, item.href);
            });
        } else {
            compile(item.innerHTML, item.type, index);
        }
    });
})();
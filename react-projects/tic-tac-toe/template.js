export default () => {
    return `<!doctype html>
    <html lang = "en">
        <head>
            <meta charset="utf-8">
            <title>MERN Kickstart</title>
        </head>
        <body>
            <div id="errors" style="
                background: #c00;
                color: #fff;
                display: none;
                margin: -20px -20px 20px;
                padding: 20px;
                white-space: pre-wrap;
            "></div>

            <div id="root"></div>
            <script>
                window.addEventListener('mousedown', function(e) {
                document.body.classList.add('mouse-navigation');
                document.body.classList.remove('kbd-navigation');
                });
                window.addEventListener('keydown', function(e) {
                if (e.keyCode === 9) {
                    document.body.classList.add('kbd-navigation');
                    document.body.classList.remove('mouse-navigation');
                }
                });
                window.addEventListener('click', function(e) {
                if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
                    e.preventDefault();
                }
                });
                window.onerror = function(message, source, line, col, error) {
                var text = error ? error.stack || error : message + ' (at ' + source + ':' + line + ':' + col + ')';
                errors.textContent += text + '\n';
                errors.style.display = '';
                };
                console.error = (function(old) {
                return function error() {
                    errors.textContent += Array.prototype.slice.call(arguments).join(' ') + '\n';
                    errors.style.display = '';
                    old.apply(this, arguments);
                }
                })(console.error);
            </script>
            <script type="text/javascript" src="/dist/bundle.js">
            </script>
        </body>
    </html>`
}
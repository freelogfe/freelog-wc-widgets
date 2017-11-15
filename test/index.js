var htmlminify = require('html-minifier').minify
var fs = require('fs')
var uglifyjs = require('uglify-js');



var input = fs.readFileSync('../src/widgets/image.html').toString()
var output = htmlminify(input, {
    collapseWhitespace: true,
    minifyJS:  function (text, inline) {
        var result = uglifyjs.minify(text,{
            mangle: false
        })
        console.log(result)
        return text
    },
    minifyCSS: true
})
fs.writeFileSync('output.html', output)
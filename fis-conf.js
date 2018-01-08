fis.match('*.{html, css}', {
    postprocessor: fis.plugin('webp',{
        quality: 50
    })
})

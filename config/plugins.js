module.exports = () => {
    return {
        ckeditor: true,
        "new-page-plugin": {
            enabled: true,
            resolve: "./src/plugins/new-page-plugin"
        }
    }
}
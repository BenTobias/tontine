({
    // appDir: "../",
    baseUrl: "js/",
    dir: "trequire_build",

    //Put in a mapping so that 'requireLib' in the
    //modules section below will refer to the require.js
    //contents.
    paths: {
        requireLib: "lib/require/require"
    },

    //Indicates the namespace to use for require/requirejs/define.
    namespace: "trequire",

    mainConfigFile: 'js/main.js',

    optimize: "none",

    modules: [
        {
            name: "trequire",
            include: ["requireLib", "main"],
            //True tells the optimizer it is OK to create
            //a new file foo.js. Normally the optimizer
            //wants foo.js to exist in the source directory.
            create: true
        }
    ]
})

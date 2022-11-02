import esbuild from 'esbuild'

esbuild.build({
    entryPoints:['' ],
    watch: true,
    bundle: true,
    outdir: 'dist',
    minify: false,
    allowOverwrite: true
})
    .then(response=>console.log(JSON.stringify(response)))
    .catch(err=> console.log(err))
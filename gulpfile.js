const { watch, series, src, dest } = require('gulp');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const through = require('through2');

const tsProject = ts.createProject('tsconfig.json');

const generateEnv = () => {
    var transform = (file, enc, cb) => {
        var content = file.contents.toString(enc);

        var lines = content.split('\n').reduce((acc, line) => {
            return `${acc}\n${line.replace(/(.+)=(.+)/, '$1 = "$2"')},`;
        }, "");

        var result = `enum Env
        {
            ${lines}
        }`;

        file.contents = new Buffer(result, enc);

        cb(null, file);
    }

    return through.obj(transform);
}

/**
 * Task that generates Env.ts from .env
 */
const gen_env = () => {
    return src('.env')
        .pipe(generateEnv())
        .pipe(rename('Env.ts'))
        .pipe(dest('src'));
}

/**
 * Task that compiles all ts files under src directory into .jsx script
 */
const tsc = () => {
    return src(['es5.js', 'src/**/*.ts'])
        .pipe(tsProject())
        .js
        .pipe(dest('./'));
}

/**
 * Task that that execute in series gen_env and tsc tasks
 */
const build = series(gen_env, tsc);

/**
 * Same as build task but additionaly watches the changes
 */
const build_watch = series(build, () => {
    watch('.env', gen_env);
    watch('src/**/*.ts', tsc);
});

exports.gen_env = gen_env;
exports.tsc = tsc;
exports.build = build;
exports.build_watch = build_watch;
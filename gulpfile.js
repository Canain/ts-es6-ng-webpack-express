/// <reference path="typings/main.d.ts" />
'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const ts = require('gulp-typescript');
const merge = require('merge2');
const gls = require('gulp-live-server');

gulp.task('webpack', () => {
	return gulp.src('src/ts/browser/main.ts')
		.pipe(webpack(require('./webpack.config.js')))
		.pipe(gulp.dest('./'));
});

const server = gls('server/js/app.js', {
	env: {
		NODE_ENV: 'development'
	}
});

gulp.task('ts', () => {
	const tsProject = ts.createProject('src/ts/server/tsconfig.json');
	const tsResult = tsProject.src().pipe(ts(tsProject));
	return merge([
		tsResult.dts.pipe(gulp.dest('server/definitions')),
		tsResult.js.pipe(gulp.dest('server/js'))
	]);
});

gulp.task('serve', ['ts'], () => {
	server.start();
});

gulp.task('watch-serve', ['serve'], () => {
	gulp.watch('src/ts/server/**/*.ts', ['serve']);
	gulp.watch('pub/**/*', (file) => {
		console.log(file);
		server.notify.bind(server)(file);
	});
});

gulp.task('watch', ['webpack', 'watch-serve']);

gulp.task('default', ['watch']);
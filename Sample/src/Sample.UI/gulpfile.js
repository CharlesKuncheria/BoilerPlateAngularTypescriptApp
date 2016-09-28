var gulp = require('gulp'),
    del = require('del'),
    gutil = require('gulp-util'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    html2js = require('gulp-html2js'),
    babel = require('gulp-babel');

var paths = {
    mainScript: ['client/app.js'],
    demoScripts: [
        'client/demo/demo.js',
        'client/demo/demoController.js',
        'client/demo/demoService.js',
        'client/demo/answer.js',
        'client/demo/answerDirective.js',
        'client/demo/ToGo.js',
        'client/demo/ToGoService.js'
    ],
    adalScripts: ['client/demo/adalConfig.js'],
    demoTemplates: ['client/demo/templates/*.html'],
    portfolioNavTemplates: ['client/portfolioNav/templates/*.html'],
    accountManagementTemplates: ['client/accountManagement/templates/*.html'],
    routes: ['client/demo/routes/*.js']
};


gulp.task('routes', function () {
    gulp.src(paths.routes).pipe(gulp.dest('wwwroot/routes'));
});

gulp.task('adalConfigs', function () {
    gulp.src(paths.adalScripts).pipe(gulp.dest('wwwroot/adalConfigs'));
});

gulp.task('cacheDemoTemplates', function () {
    gulp.src(paths.demoTemplates)
        .pipe(html2js('cachedDemoTemplates.js', {
            adapter: 'angular',
            name: 'SampleApp'
        }))
        .pipe(gulp.dest('wwwroot/templates'));
});


gulp.task('clean', function () {
    return del(['wwwroot/scripts/**/*', 'wwwroot/templates/**/*', 'wwwroot/libs/**/*', 'wwwroot/routes/**/*', 'wwwroot/adalConfigs/**/*' ]);
});

gulp.task('mainScript', function () {
    gulp.src(paths.mainScript).pipe(gulp.dest('wwwroot/scripts'));
});


gulp.task('bundleDemo', ['cacheDemoTemplates'], function () {
    return gulp.src(paths.demoScripts)
        .pipe(sourcemaps.init())
        .pipe(concat('demo.bundle.js'))
        // only uglify if gulp us run with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('wwwroot/scripts'));
});

gulp.task('default', ['clean', 'routes', 'mainScript', 'bundleDemo'], function () {
});
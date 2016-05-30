var gulp = require('gulp');
var minifycss = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');

// 获取 gulp-imagemin 模块
var imagemin = require('gulp-imagemin')

// 压缩 public 目录 css
gulp.task('minify-css', function() {
    return gulp.src('./css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./dist/css'));
});

// 压缩 public 目录 css
gulp.task('font', function() {
    return gulp.src('./font/*.*')
        .pipe(gulp.dest('./dist/font'));
});

// 压缩 public 目录 html
gulp.task('minify-html', function() {
  return gulp.src('./*.html')
    .pipe(htmlclean())
    
    .pipe(htmlmin({
         removeComments: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
    }))
    .pipe(gulp.dest('./dist/'))
});
// 压缩 public/js 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

// 压缩 public/js 目录 js
gulp.task('lib-js', function() {
    return gulp.src('./lib/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/lib'));
});

// 压缩图片任务
// 在命令行输入 gulp images 启动此任务
gulp.task('images', function () {
    // 1. 找到图片
    gulp.src('./images/*.*')
    // 2. 压缩图片
        .pipe(imagemin({
            progressive: true
        }))
    // 3. 另存图片
        .pipe(gulp.dest('dist/images'))
});



// 执行 gulp 命令时执行的任务
gulp.task('default', [
    'minify-html','minify-css','lib-js','font','minify-js','images'
]);

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js', './dist/images'], {read: false})
        .pipe(clean());
});

// 监听任务 运行语句 gulp watch
gulp.task('watch',function(){

    server.listen(port, function(err){
        if (err) {
            return console.log(err);
        }

        // 监听html
        gulp.watch('./*.html', function(event){
            gulp.run('minify-html');
        })

        // 监听css
        gulp.watch('./css/*.css', function(){
            gulp.run('minify-css');
        });

        // 监听images
        gulp.watch('./images/**/*', function(){
            gulp.run('images');
        });

        // 监听js
        gulp.watch('./js/*.js', function(){
            gulp.run('minify-js');
        });
    });

});




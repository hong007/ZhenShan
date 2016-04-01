var gulp = require("gulp");
var gulpLoadPlugins = require("gulp-load-plugins");
var plugins = gulpLoadPlugins();
var browserSync = require('browser-sync');
//var karma = require('gulp-karma');
var del = require("del");
////////////////////////////////////////////////////////////////////////////////////////////////////////////版本
//版本

var demoName="single";

//css
var bootstrapCssVersion="1.0.0";

//js
var jqueryVersion="1.7.2";
var angularVersion="1.0.0";
var angularRouteVersion="1.3.9";
var angularResourceVersion="1.3.9";
var angularUiVersion="1.0.0";
var browserVersion="1.0.0";

var xnDirectiveCommonVersion="1.0.0";
var xnServiceCommonVersion="1.0.0";
var xnDirectiveLoadingVersion="0.0.2";

var xnDirectiveFormVersion="1.0.1";



//路径

var buildBaseFiles=[
    "./spm_modules/jquery/"+jqueryVersion+"/jquery.js",
    "./spm_modules/xn-angular/"+angularVersion+"/angular.js",
    "./spm_modules/angular-route/"+angularRouteVersion+"/angular-route.js",
    "./spm_modules/angular-resource/"+angularResourceVersion+"/angular-resource.js",
    "./spm_modules/angular-ui/"+angularUiVersion+"/bootstraptpls.js",
    "./spm_modules/xn-browser/"+browserVersion+"/browser.js"
];


//压缩本地的js文件路径 build-local-js
var buildLocalFiles=[
    "./scripts/"+demoName+".js",
    "./scripts/xn-"+demoName+"-filter.js",
    "./scripts/xn-"+demoName+"-service.js",
    "./scripts/controllers/*.js"
];



//压缩依赖进来的js文件路径  build-global-js
var buildGlobalFiles=[
    "!./spm_modules/angular/"+angularVersion+"/angular.js",
    "!./spm_modules/jquery/"+jqueryVersion+"/jquery.js",
    "!./spm_modules/angular-ui/"+angularUiVersion+"/bootstraptpls.js",
    "./spm_modules/xn-directive-common/"+xnDirectiveCommonVersion+"/directive/commons.js",
    "./spm_modules/xn-service-common/"+xnServiceCommonVersion+"/service/commons.js",
    "./spm_modules/xn-directive-form/"+xnDirectiveFormVersion+"/directive/forms.js",
    "./spm_modules/xn-directive-loading/"+xnDirectiveLoadingVersion+"/directive/loading.js",
    "./spm_modules/xn-directive-loading/"+xnDirectiveLoadingVersion+"/directive/nprogress.js",
];

//指令里的css
var buildGlobalCssFiles=[
    "./spm_modules/bootstrap-css/"+bootstrapCssVersion+"/bootstrap.css",
    "./spm_modules/xn-directive-common/"+xnDirectiveCommonVersion+"/directive/style.css",
    "./spm_modules/xn-directive-loading/"+xnDirectiveLoadingVersion+"/directive/style.css"
];


var copyCssImagesFiles=[
    "./styles/images/*"
];

var copyFontFiles=[
    "./styles/font/*",
    "./spm_modules/bootstrap-css/"+bootstrapCssVersion+"/font/*"
];

///////////////////////////////////////////////////////////////////////////////////////////////////////版本公共的js

    gulp.task("build-base-js", function() {
        gulp.src(buildBaseFiles)
            .pipe(plugins.concat("base.src.js"))
            .pipe(plugins.uglify())
            .pipe(plugins.rename("base.min.js"))
            .pipe(gulp.dest("./dist/scripts/"));
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // 图片处理
    gulp.task('copy-css-images', function(){
        gulp.src(copyCssImagesFiles)
            .pipe(gulp.dest("./dist/styles/images/"));
    });

    // 字体添加
    gulp.task('copy-font', function(){
        gulp.src(copyFontFiles)
            .pipe(gulp.dest("./dist/styles/font/"));
    });

    // 字体xn-icon
    gulp.task('copy-xn-icon', function(){
        gulp.src(fontFiles)
            .pipe(gulp.dest("dist/styles/font/"));
    });

    //清除字font文件夹
    gulp.task("clean-font", function(){
        gulp.src(["./dist/styles/font/*.ttf","./dist/styles/font/*.eot","./dist/styles/font/*.svg","./dist/styles/font/*.woff"], { read:false })
            .pipe(plugins.clean());
    });

    gulp.task("copy-cookies-map", function() {
        del(["./dist/scripts/angular-cookies.min.js.map", "./dist/scripts/angular-cookies.min.js.map.gz"], function(err, file) {
            console.log('Deleted files/folders:\n', file.join('\n'));
            gulp.src(["./vendor/angular-cookie/angular-cookies.min.js.map"])
                .pipe(gulp.dest("./dist/scripts"))
                .pipe(plugins.gzip())
                .pipe(gulp.dest("./dist/scripts"));
        });
    });

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     // 合并，压缩指令，过滤器，服务等js到common.min.js
    gulp.task("build-global-js", function() {
        gulp.src(buildGlobalFiles)
            .pipe(plugins.concat("global.src.js"))
            .pipe(plugins.uglify())
            .pipe(plugins.rename("global.min.js"))
            .pipe(gulp.dest("./dist/scripts/"));
    });

    // css合并，压缩文件
    gulp.task("build-global-css", function() {
        gulp.src(buildGlobalCssFiles)
            .pipe(plugins.concat("global.src.css"))
            .pipe(plugins.minifyCss())
            .pipe(plugins.rename("global.min.css"))
            .pipe(gulp.dest("./dist/styles/"));
    });


    //清除css样式
    gulp.task("clean-all-css", function(){
        gulp.src("./dist/styles/*.css",{ read:false })
            .pipe(plugins.clean());
    });

    //清除js样式
    gulp.task("clean-all-js", function(){
        gulp.src("./dist/scripts/*.js", { read:false })
            .pipe(plugins.clean());
    });

    //清除css样式
    gulp.task("clean-local-css", function(){
        gulp.src("./dist/**/local.min.css", { read:false })
            .pipe(plugins.clean());
    });

    //清除js样式
    gulp.task("clean-local-js", function(){
        gulp.src("./dist/**/local.min.js", { read:false })
            .pipe(plugins.clean());
    });

    // css合并，压缩文件
    gulp.task("build-local-less",["clean-local-css"], function() {
        gulp.src(["./styles/base.less","./styles/"+demoName+".less"])
            .pipe(plugins.concat("local.src.less"))
            .pipe(plugins.less())
            .pipe(plugins.minifyCss())
            .pipe(plugins.rename("local.min.css"))
            .pipe(gulp.dest("./dist/styles/"));

    });


    gulp.task("build-local-js",["clean-local-js"],function() {
        gulp.src(buildLocalFiles)
            .pipe(plugins.concat("local.src.js"))
         //   .pipe(plugins.uglify())
            .pipe(plugins.rename("local.min.js"))
            .pipe(gulp.dest("./dist/scripts/"));
    });

    gulp.task("watch", function() {
        gulp.watch("styles/"+demoName+".less", ["build-local-less",browserSync.reload]);
        gulp.watch("styles/base.less", ["build-local-less",browserSync.reload]);
        gulp.watch("styles/print.less", ["build-print-less",browserSync.reload]);
        gulp.watch("scripts/**/*.js", ["build-local-js",browserSync.reload]);
        gulp.watch("styles/images/", ["copy-css-images",browserSync.reload]);
        gulp.watch("templates/**/*.vm", ["bs-reload"]);
    });

    //检查错误代码
    gulp.task('lint', function() {
        gulp.src('./scripts/*.js')
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));
    });

    //浏览器同步
    gulp.task('browser-sync', function() {
        browserSync({
            proxy: "http://localhost:80"
        });
    });

    // 定义develop任务在日常开发中使用
    gulp.task("clean-all",["clean-all-css","clean-all-js","clean-font"],function(){});

    // 定义develop任务在日常开发中使用
    gulp.task("dev",["build-base-js","build-global-js","build-local-js","build-global-css","build-local-less","copy-css-images","copy-font"],function(){});

    // Reload all Browsers
    gulp.task('bs-reload', function () {
        browserSync.reload();
    });

    // gulp命令默认启动的就是default认为,这里将clean任务作为依赖,也就是先执行一次clean任务,流程再继续.
    gulp.task("default",["browser-sync","clean-all","dev"], function() {
        gulp.run("watch");
    });

const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
const uglify = require("gulp-uglify");
const pump = require("pump");

gulp.task("clean-css", clean_css);

function clean_css(params) {
  return gulp
    .src("stylesheets/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("dist"));
}

gulp.task("minify", minify_it);

function minify_it() {
  gulp
    .src(["./*.js", "./*.mjs", "stylesheets/*.css"])
    .pipe(minify())
    .pipe(gulp.dest("dist"));
}

gulp.task("uglify", uglify_it);

function uglify_it(cb) {
  pump([gulp.src("./*.js"), uglify(), gulp.dest("dist")], cb);
}

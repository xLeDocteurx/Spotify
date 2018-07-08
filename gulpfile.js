const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
const uglify = require("gulp-uglify");
const pump = require("pump");

const nodemon = require("gulp-nodemon");
const exec = require("child_process").exec;

// let server = require("./server");

gulp.task("start", () => {
  clean_css();
  // minify_it();
  // uglify_it();

  exec("node server.js");

  // nodemon({
  //   script: "server.js"
  // })
  // .on("restart", function() {
  //   console.log("restarted!");
  // });
});

gulp.task("clean-css", clean_css);

function clean_css(params) {
  return gulp
    .src("public/stylesheets/*.css")
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("public/dist"));
}

gulp.task("minify", minify_it);

function minify_it() {
  gulp
    .src(["public/*.js", "public/*.mjs", "public/stylesheets/*.css"])
    .pipe(minify())
    .pipe(gulp.dest("public/dist"));
}

gulp.task("uglify", uglify_it);

function uglify_it(cb) {
  pump([gulp.src("public/*.js"), uglify(), gulp.dest("public/dist")], cb);
}

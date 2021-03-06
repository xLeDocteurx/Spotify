const gulp = require("gulp");
const compass = require("gulp-for-compass");
const browserSync = require("browser-sync");
const reload = browserSync.reload;
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");
let uglify = require("gulp-uglify-es").default;
// const uglify = require("gulp-uglify");
const pump = require("pump");

const nodemon = require("gulp-nodemon");
const exec = require("child_process").exec;

// let server = require("./server");

gulp.task("start", () => {
  // exec("npm i");

  compass_this_shhh();
  bsync_this();

  clean_css();
  // minify_it();
  uglify_it();

  exec("node server.js &");

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

function uglify_it(/*cb*/) {
  // pump([gulp.src("public/scripts.js"), uglify(), gulp.dest("public/dist")], cb);

  return (
    gulp
      .src("public/*.js")
      // .pipe(rename("scripts.min.js"))
      .pipe(uglify(/* options */))
      .pipe(gulp.dest("public/dist"))
  );
}

gulp.task("compass_it", compass_this_shhh);

function compass_this_shhh() {
  gulp
    .src("sass/*.scss")
    .pipe(
      compass({
        sassDir: "sass/",
        cssDir: "stylesheets/"
      })
    )
    .pipe(gulp.dest("stylesheets/"));
}

gulp.task("serve", function() {

});

function bsync_this () {
  browserSync({
    server: {
      baseDir: "./"
    }
  });

  // gulp.watch(
  //   ["styles/**/*.css", "scripts/**/*.js"],
  //   { cwd: "./" },
  //   reload
  // );
}

var gulp = require('gulp'), // Сообственно Gulp JS
    // csso = require('gulp-csso'), // Минификация CSS
    sass = require('gulp-sass'), // Конверстация SASS (SCSS) в CSS
    prettify = require('gulp-prettify'),
    clean = require('gulp-clean'),
    jade = require('gulp-jade'); // Конвертация JADE В html

    // Компилируем Jade в html
gulp.task('jade', function() {
  gulp.src('src/markups/pages/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(''));
});

// Задача "sass". Запускается командой "gulp sass"
gulp.task('sass', function () {
	gulp.src('src/css/style.scss') // файл, который обрабатываем
		.pipe(sass().on('error', sass.logError)) // конвертируем sass в css
		// .pipe(csso()) // минифицируем css, полученный на предыдущем шаге
		.pipe(gulp.dest('dist/css/')); // результат пишем по указанному адресу
});

gulp.task('watch', function () {
	// При изменение файлов *.scss в папке "styles" и подпапках запускаем задачу sass
	gulp.watch('src/css/**/*.scss', ['sass']);
  gulp.watch('src/markups/**/*.jade', ['jade']);
});

namespace :jekyll do
  desc 'serve'
  task :serve do
    sh "bundle install --path vendor/bundle"
    sh "bundle exec jekyll serve"
  end

  desc 'build'
  task :build do
    sh "bundle install --path vendor/bundle"
    sh "bundle exec jekyll build"
  end

  desc 'debug'
  task :debug do
    sh "cp debug.gitignore .gitignore"
  end

  desc 'release'
  task :release do
    sh "cp release.gitignore .gitignore"
  end
end

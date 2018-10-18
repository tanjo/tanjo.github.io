namespace :jekyll do
  desc 'serve'
  task :serve do
    sh "bundle install --path vendor/bundle"
    sh "bundle exec jekyll serve --destination master"
  end

  desc 'build'
  task :build do
    sh "bundle install --path vendor/bundle"
    sh "JEKYLL_ENV=production bundle exec jekyll build --destination master"
  end

  desc 'clone'
  task :clone do
    sh "git clone --branch master --depth 1 git@github.com:tanjo/tanjo.github.io.git master"
  end
end

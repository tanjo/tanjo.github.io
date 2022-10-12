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

namespace :qr do
  desc 'QRcode'
  task :code do
    sh "bundle install --path vendor/bundle"
    sh "bundle exec rake qr:svg"
  end

  task :svg do
    require "rqrcode"
    require 'yaml'
    data = YAML.load_file("_config.yml")
    qr = RQRCode::QRCode.new(data["bitcoin_address"])
    svg = qr.as_svg(
      color: "000",
      shape_rendering: "crispEdges",
      module_size: 11,
      standalone: true,
      use_path: true,
      viewbox: true
    )
    File.open("assets/svg/bitcon.svg", "w") { |f| f.write(svg)}
  end
end
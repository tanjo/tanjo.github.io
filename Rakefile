namespace :release do
  desc "リリース作業" do
    sh "trash master"
    sh "rake jekyll:clone"
    sh "rake jekyll:build"
    Dir.chdir("master") do
      sh "git add ."
      sh "git commit -m \"Update files\""
      sh "git push origin master"
    end
  end
end

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

namespace :image do
  desc "アイコン各サイズ生成"
  task :icon do
    sh "bundle install --path vendor/bundle"
    sh "bundle exec rake image:resize"
    sh "bundle exec rake image:grayscale"
  end

  task :resize do
    require 'mini_magick'
    image = MiniMagick::Image.open("assets/images/icon.png")
    image.format "png"
    image.resize "64x64"
    image.write "assets/images/icon_64x64.png"
    image.resize "48x48"
    image.write "assets/images/icon_48x48.png"
    image.resize "32x32"
    image.write "assets/images/icon_32x32.png"
    image.resize "24x24"
    image.write "assets/images/icon_24x24.png"
    image.resize "16x16"
    image.write "assets/images/icon_16x16.png"
  end

  task :grayscale do
    require 'mini_magick'
    image = MiniMagick::Image.open("assets/images/icon.png")
    image.format "png"
    image.resize "16x16"
    image.colorspace "Gray"
    image.write "assets/images/icon_grayscale.png"
  end
end
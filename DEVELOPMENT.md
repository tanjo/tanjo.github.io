# Development

## Release

```
trash master
rake jekyll:clone
rake jekyll:build
pushd master
git add .
git commit -m "Update files"
git push origin master
popd
```

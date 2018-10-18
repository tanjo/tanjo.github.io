# Development

## Release

```
rake jekyll:clone
rake jekyll:build
pushd master
git commit -m "Update files"
git push origin master
popd
```

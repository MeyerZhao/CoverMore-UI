please use node 12.

## 发布代码
复制文件夹 public 并重名为 docs 即可。

### Where to modify CSS file import ？
source/_meta/_head.twig
source/_meta/_foot.twig

patternlab-config.json
```
"public": {
      "root": "public/",
      "patterns": "public/patterns/",
      "data": "public/styleguide/data/",
      "annotations": "public/annotations/",
      "styleguide": "public/styleguide/",
      "js": "public/js",
      "images": "public/images",
      "fonts": "public/fonts",
      "css": "public/css",
      "theme": "public/theme"
    }
```
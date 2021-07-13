# Custom Materials

[Docs](https://appworks.site/materials/about.html).

## Install Iceworks CLI

```bash
$ npm i -g iceworks
$ iceworks --help
```

## Install Deps

```bash
$ npm install
```

## Develop materials

```bash
# block
$ cd blocks/ExampleBlock
$ npm install
$ npm run start

# component
$ cd blocks/ExampleBlock
$ npm install
$ npm run start

# page
$ cd pages/ExamplePage
$ npm install
$ npm run start
```

## Add new material

```bash
$ iceworks add  # select block|component|scaffold|page
```

## Generate materials data

```bash
$ iceworks generate
```

## Publish materials data

```bash
# sync to fusion material center
$ iceworks sync
```

## Use materials in AppWorks

Add the materials data url to [AppWorks](https://appworks.site/pack/basic/materials.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%89%A9%E6%96%99%E6%BA%90).

<div align="center">

<img src="https://cdn.discordapp.com/attachments/780148374514827325/939085428982693898/idk3.jpg" heigh="100px" width="100px" alt="Akira Logo">

# @chikoshidori/akira

**An anime scraper.**

[![GitHub](https://img.shields.io/github/license/chikoshidori/akira)](https://github.com/chikoshidori/akira/blob/main/LICENSE.md)
[![npm](https://img.shields.io/npm/v/@chikoshidori/akira?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@chikoshidori/akira)

</div>

# Description

A scraper to get information about some anime pages.

## Features

-   TioAnime support
    -   search anime by name
    -   latest anime releases
-   AnimixPlay support
    -   search anime by name
    -   latest anime releases

## Examples

To search for an anime by name

```ts
// const { AnimixPlay } = require('@chikoshidori/akira');
import { AnimixPlay } from '@chikoshidori/akira';

new AnimixPlay().search('Seishun buta Yarou wa Bunny').then(console.log); // -> ['...', '...']
```

To get the latest anime releases

```ts
import { AnimixPlay } from '@chikoshidori/akira';
// const { AnimixPlay } = require('@chikoshidori/akira');

new AnimixPlay().lastAnimes().then(console.log); // -> ['...', '...']
```

---

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://chikum.me"><img src="https://avatars.githubusercontent.com/u/53100578?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chiko</b></sub></a><br /><a href="https://github.com/ChikoShidori/akira/issues?q=author%3AChikoShidori" title="Bug reports">🐛</a> <a href="https://github.com/ChikoShidori/akira/commits?author=ChikoShidori" title="Code">💻</a> <a href="#maintenance-ChikoShidori" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

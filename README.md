# Advanced Notes

## Functionalities
- A. The application should display “other people” notes in the element from a static JSON that you’ll define
- B. The final user will be able to write text notes and publish it in the notes message list
- C. Each note must have the photo of the author, her/his name-surname and the publishing date and time
- D. If a note is greater than three rows trim the rest of the content and show a “Read More” CTA that expands the note message with the whole text.
- E. All notes should be sorted by publishing date (newest at bottom)
- F. Store the messages you’ve published inside Browser LocalStorage and keep them in the notes message list as long as user doesn’t delete browser cache (e.g. if I write: “Hello!”, it should be displayed also if I refresh the page)
- G. Make it responsive: min-width: 375px, max-width 1200px;
- H. Add a “filter” functionality to show only messages from selected “people”

## Getting Started

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5

### Clone the repo

```shell
git clone https://github.com/ciakki92/advanced-notes.git
cd advanced-notes
```

### Install npm packages

Install packages described in` package.json`

```shell
npm install
```

#### npm scripts

Questi sono i comandi definiti in `package.json`:

* `npm run start` - for a dev server.
* `npm run build` - prod build the project.

### Demo

Published site at https://advanced-notes.surge.sh

### Codesandbox

Published sandbox at https://codesandbox.io/s/wizardly-https-wrdbu

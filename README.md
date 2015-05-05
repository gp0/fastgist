## Fastgist - faster gists.

* Copy some code to the clipboard
* Press <kbd>CTRL</kbd>+<kbd>Shift</kbd>+<kbd>1</kbd>
* <kbd>CTRL</kbd>+<kbd>v</kbd> to paste the Github gist URL
* That's it.

### Build instructions:

Generate your .pem key and store it in the root as `mykey.pem` file. On
unix / mac, the command to generate the file is
`openssl genrsa 2048 | openssl pkcs8 -topk8 -nocrypt > mykey.pem`.
Note: the generated file is in `.gitignore` file, it won't be (and should NOT
be) commited to the repository unless you know what you are doing.

    cd chrome-extension-skeleton
    npm install
    grunt
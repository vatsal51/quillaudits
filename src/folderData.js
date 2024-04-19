const someJSCodeExample = `
  // The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325

  const CANCELATION_MESSAGE = {
    type: 'cancelation',
    msg: 'operation is manually canceled',
  };

  function makeCancelable(promise) {
    let hasCanceled_ = false;

    const wrappedPromise = new Promise((resolve, reject) => {
      promise.then(val => hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val));
      promise.catch(reject);
    });

    return (wrappedPromise.cancel = () => (hasCanceled_ = true), wrappedPromise);
  }

  export default makeCancelable;
`;

const someCSSCodeExample = `

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  *::-webkit-scrollbar {
    display: none;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [type=reset], [type=submit], button, html [type=button] {
      -webkit-appearance: button;
  }

  [type=button]{
    -webkit-appearance: none;
  }

  .full-width {
    width: 100%;
  }
  .full-height {
    height: 100%;
  }
  .full-size {
    width: 100%;
    height: 100%;
  }
 
`;

const someHTMLCodeExample = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      <!-- https://web.dev/uses-rel-preconnect -->
      <link rel="preconnect" href="https://storage.googleapis.com">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#111" />
      <link rel="preload" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
      <title>Wlist</title>
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
     
      <div id="root"></div>
    </body>
  </html>
`;

const explorer = {
  id: "1",
  name: "Example Folder",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "Sample Folder",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "Folder",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "Folder 123",
          isFolder: true,
          items: [
            {
              id: "7",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "8",
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: "9",
          isFolder: false,
          name: "script.js",
          language: "javascript",
          value: someJSCodeExample,
          items: [],
        },
        {
          id: "10",
          name: "style.css",
          language: "css",
          value: someCSSCodeExample,
          isFolder: false,
          items: [],
        },
        {
          id: "11",
          name: "index.html",
          language: "html",
          value: someHTMLCodeExample,
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "12",
      name: "Sample Folder",
      isFolder: true,
      items: [
        {
          id: "13",
          name: "Folder",
          isFolder: true,
          items: [
            {
              id: "14",
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: "15",
              name: "hello.html",
              isFolder: false,
              items: [],
            },
          ],
        },

        {
          id: "16",
          name: "Example File 2",
          isFolder: false,
          items: [],
        },
        {
          id: "17",
          name: "Example File 321",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "18",
      name: "Folder 123",
      isFolder: true,
      items: [
        {
          id: "19",
          name: "index.html",
          isFolder: false,
          items: [],
        },
        {
          id: "20",
          name: "hello.html",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "21",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "22",
          name: "App.js",
          isFolder: false,
          items: [],
        },
        {
          id: "23",
          name: "Index.js",
          isFolder: false,
          items: [],
        },
        {
          id: "24",
          name: "styles.css",
          isFolder: false,
          items: [],
        },
      ],
    },
  ],
};

export default explorer;

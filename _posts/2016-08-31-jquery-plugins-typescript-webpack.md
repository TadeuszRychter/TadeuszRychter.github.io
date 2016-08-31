---
layout: post
title:  "Use jQuery and jQuery plugins with TypeScript and Webpack"
date:   2016-08-31
categories:
tags: TypeScript Webpack jQuery
permalink: jquery-plugins-typescript-webpack
author: "Tadeusz Rychter"
---

Webpack’s documentation is pretty big, but it still doesn’t provide too many examples, especially for the more complex scenarios. That’s why I created [a repository](https://github.com/TadeuszRychter/webpack-jquery-plugins-typescript) with the maximally reduced code solving the title issue.
<!-- more -->

The first thing to do after downloading the repo is to run <code class="language-js">npm install</code> in the project’s root directory. It will install Webpack, TypeScript compiler and ts-loader (to be able to preprocess TypeScript files with Webpack). For the sake of clarity the jQuery and jQuery UI are simply commited into the repository.

Then, from the project’s root directory, we can run Webpack with <code class="language-js">./node_modules/webpack/bin/webpack.js</code> Had we installed Webpack globally (or configured the PATH), we could have simply called <code class="language-js">webpack</code>.
After running the command we should see the output like the following:

<pre class="line-numbers"><code class="language-javascript">ts-loader: Using typescript@1.8.10 and /home/tadeusz/webpack-ts-jquery-plugins/tsconfig.json
Hash: c8fb3aeedc8d5e8c71b0
Version: webpack 1.13.2
Time: 2257ms
    Asset    Size  Chunks             Chunk Names
bundle.js  756 kB       0  [emitted]  app
   [1] ./jquery.js 259 kB {0} [built]
   [4] ./jqueryui.js 471 kB {0} [built]
    + 3 hidden modules</code></pre>
    
That’s it, we have a bundle with size similar to the sum of the sizes of both files, but we won’t pollute the global scope.

Probably the most important thing in the whole setup is the usage of <code class="language-js">ProvidePlugin</code> in the webpack.config.js. Thanks to it the jQuery plugins won’t have any trouble using this library.

For the cases with complex directory structure placing <code class="language-js">root: path.resolve('./some-path’)</code> in the resolve section of the webpackConfig variable (webpack.config.js) would be helpful, because it would tell Webpack where to search for the files to be included.
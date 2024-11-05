import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a,o as t}from"./app-BKm4zcv9.js";const r={};function n(l,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h1 id="dillinger" tabindex="-1"><a class="header-anchor" href="#dillinger"><span>Dillinger</span></a></h1><h2 id="the-last-markdown-editor-ever" tabindex="-1"><a class="header-anchor" href="#the-last-markdown-editor-ever"><span><em>The Last Markdown Editor, Ever</em></span></a></h2><figure><a href="https://nodesource.com/products/nsolid" target="_blank" rel="noopener noreferrer"><img src="https://cldup.com/dTxpPi9lDf.thumb.png" alt="N|Solid" tabindex="0" loading="lazy"></a><figcaption>N|Solid</figcaption></figure><figure><a href="https://travis-ci.org/joemccann/dillinger" target="_blank" rel="noopener noreferrer"><img src="https://travis-ci.org/joemccann/dillinger.svg?branch=master" alt="Build Status" tabindex="0" loading="lazy"></a><figcaption>Build Status</figcaption></figure><p>Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible, AngularJS-powered HTML5 Markdown editor.</p><ul><li>Type some Markdown on the left</li><li>See HTML in the right</li><li>✨Magic ✨</li></ul><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>Features</span></a></h2><ul><li>Import a HTML file and watch it magically convert to Markdown</li><li>Drag and drop images (requires your Dropbox account be linked)</li><li>Import and save files from GitHub, Dropbox, Google Drive and One Drive</li><li>Drag and drop markdown and HTML files into Dillinger</li><li>Export documents as Markdown, HTML and PDF</li></ul><p>Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email. As <a href="http://daringfireball.net" target="_blank" rel="noopener noreferrer">John Gruber</a> writes on the <a href="http://daringfireball.net/projects/markdown/" target="_blank" rel="noopener noreferrer">Markdown site</a></p><blockquote><p>The overriding design goal for Markdown&#39;s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it&#39;s been marked up with tags or formatting instructions.</p></blockquote><p>This text you see here is *actually- written in Markdown! To get a feel for Markdown&#39;s syntax, type some text into the left window and watch the results in the right.</p><h2 id="tech" tabindex="-1"><a class="header-anchor" href="#tech"><span>Tech</span></a></h2><p>Dillinger uses a number of open source projects to work properly:</p><ul><li><a href="http://angularjs.org" target="_blank" rel="noopener noreferrer">AngularJS</a> - HTML enhanced for web apps!</li><li><a href="http://ace.ajax.org" target="_blank" rel="noopener noreferrer">Ace Editor</a> - awesome web-based text editor</li><li><a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it</a> - Markdown parser done right. Fast and easy to extend.</li><li><a href="http://twitter.github.com/bootstrap/" target="_blank" rel="noopener noreferrer">Twitter Bootstrap</a> - great UI boilerplate for modern web apps</li><li><a href="http://nodejs.org" target="_blank" rel="noopener noreferrer">node.js</a> - evented I/O for the backend</li><li><a href="http://expressjs.com" target="_blank" rel="noopener noreferrer">Express</a> - fast node.js network app framework <a href="http://twitter.com/tjholowaychuk" target="_blank" rel="noopener noreferrer">@tjholowaychuk</a></li><li><a href="http://gulpjs.com" target="_blank" rel="noopener noreferrer">Gulp</a> - the streaming build system</li><li><a href="https://breakdance.github.io/breakdance/" target="_blank" rel="noopener noreferrer">Breakdance</a> - HTML to Markdown converter</li><li><a href="http://jquery.com" target="_blank" rel="noopener noreferrer">jQuery</a> - duh</li></ul><p>And of course Dillinger itself is open source with a <a href="https://github.com/joemccann/dillinger" target="_blank" rel="noopener noreferrer">public repository</a> on GitHub.</p><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2><p>Dillinger requires <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">Node.js</a> v10+ to run.</p><p>Install the dependencies and devDependencies and start the server.</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dillinger</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> i</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For production environments...</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --production</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">NODE_ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">production</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins"><span>Plugins</span></a></h2><p>Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.</p><table><thead><tr><th>Plugin</th><th>README</th></tr></thead><tbody><tr><td>Dropbox</td><td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md" target="_blank" rel="noopener noreferrer">plugins/dropbox/README.md</a></td></tr><tr><td>GitHub</td><td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md" target="_blank" rel="noopener noreferrer">plugins/github/README.md</a></td></tr><tr><td>Google Drive</td><td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md" target="_blank" rel="noopener noreferrer">plugins/googledrive/README.md</a></td></tr><tr><td>OneDrive</td><td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md" target="_blank" rel="noopener noreferrer">plugins/onedrive/README.md</a></td></tr><tr><td>Medium</td><td><a href="https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md" target="_blank" rel="noopener noreferrer">plugins/medium/README.md</a></td></tr><tr><td>Google Analytics</td><td><a href="https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md" target="_blank" rel="noopener noreferrer">plugins/googleanalytics/README.md</a></td></tr></tbody></table><h2 id="development" tabindex="-1"><a class="header-anchor" href="#development"><span>Development</span></a></h2><p>Want to contribute? Great!</p><p>Dillinger uses Gulp + Webpack for fast developing. Make a change in your file and instantaneously see your updates!</p><p>Open your favorite Terminal and run these commands.</p><p>First Tab:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">node</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> app</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Second Tab:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gulp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> watch</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>(optional) Third:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">karma</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> test</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="building-for-source" tabindex="-1"><a class="header-anchor" href="#building-for-source"><span>Building for source</span></a></h4><p>For production release:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gulp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --prod</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Generating pre-built zip archives for distribution:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">gulp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dist</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --prod</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2><p>Dillinger is very easy to install and deploy in a Docker container.</p><p>By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> dillinger</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">youruse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">r&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/dillinger:</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out <code>\${package.json.version}</code> with the actual version of Dillinger.</p><p>Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 8000:8080</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --restart=always</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --cap-add=SYS_ADMIN</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --name=dillinger</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">youruse</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">r&gt;</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/dillinger:</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">\${</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">package</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">json</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#E45649;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>Note: <code>--capt-add=SYS-ADMIN</code> is required for PDF rendering.</p></blockquote><p>Verify the deployment by navigating to your server address in your preferred browser.</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">127.0.0.1:8000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license"><span>License</span></a></h2><p>MIT</p><p><strong>Free Software, Hell Yeah!</strong></p>`,52)]))}const d=i(r,[["render",n],["__file","tomato.html.vue"]]),p=JSON.parse('{"path":"/posts/tomato.html","title":"Test","lang":"ja-JP","frontmatter":{"title":"Test","description":"Dillinger The Last Markdown Editor, Ever N|SolidN|Solid Build StatusBuild Status Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible, AngularJS-powered HTML5 ...","head":[["meta",{"property":"og:url","content":"https://yuweb.club/posts/tomato.html"}],["meta",{"property":"og:site_name","content":"ユのWeb開発クラブ"}],["meta",{"property":"og:title","content":"Test"}],["meta",{"property":"og:description","content":"Dillinger The Last Markdown Editor, Ever N|SolidN|Solid Build StatusBuild Status Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible, AngularJS-powered HTML5 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://cldup.com/dTxpPi9lDf.thumb.png"}],["meta",{"property":"og:locale","content":"ja-JP"}],["meta",{"property":"og:updated_time","content":"2024-11-05T05:26:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-05T05:26:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Test\\",\\"image\\":[\\"https://cldup.com/dTxpPi9lDf.thumb.png\\",\\"https://travis-ci.org/joemccann/dillinger.svg?branch=master\\"],\\"dateModified\\":\\"2024-11-05T05:26:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ユ\\",\\"url\\":\\"https://yuweb.club\\"}]}"]]},"headers":[{"level":2,"title":"The Last Markdown Editor, Ever","slug":"the-last-markdown-editor-ever","link":"#the-last-markdown-editor-ever","children":[]},{"level":2,"title":"Features","slug":"features","link":"#features","children":[]},{"level":2,"title":"Tech","slug":"tech","link":"#tech","children":[]},{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Plugins","slug":"plugins","link":"#plugins","children":[]},{"level":2,"title":"Development","slug":"development","link":"#development","children":[]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":2,"title":"License","slug":"license","link":"#license","children":[]}],"git":{"createdTime":1730784417000,"updatedTime":1730784417000,"contributors":[{"name":"yuweb.club","email":"yuweb.club@gmail.com","commits":1}]},"readingTime":{"minutes":2.38,"words":713},"filePathRelative":"posts/tomato.md","localizedDate":"2024年11月5日","excerpt":"\\n<h2><em>The Last Markdown Editor, Ever</em></h2>\\n<figure><a href=\\"https://nodesource.com/products/nsolid\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://cldup.com/dTxpPi9lDf.thumb.png\\" alt=\\"N|Solid\\" tabindex=\\"0\\" loading=\\"lazy\\"></a><figcaption>N|Solid</figcaption></figure>\\n<figure><a href=\\"https://travis-ci.org/joemccann/dillinger\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://travis-ci.org/joemccann/dillinger.svg?branch=master\\" alt=\\"Build Status\\" tabindex=\\"0\\" loading=\\"lazy\\"></a><figcaption>Build Status</figcaption></figure>","autoDesc":true}');export{d as comp,p as data};

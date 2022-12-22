import{_ as s,o as a,c as n,f as l,e}from"./app.bde7ec14.js";const o={},p=e(`<h1 id="quickstart" tabindex="-1"><a class="header-anchor" href="#quickstart" aria-hidden="true">#</a> Quickstart</h1><div class="language-bash" data-ext="sh"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#ABB2BF;">dart pub add telegram_client</span></span>
<span class="line"></span></code></pre></div><div class="language-dart" data-ext="dart"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;dart:io&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">import</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;package:telegram_client/telegram_client.dart&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">main</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">List</span><span style="color:#ABB2BF;">&lt;</span><span style="color:#E5C07B;">String</span><span style="color:#ABB2BF;">&gt; args) </span><span style="color:#C678DD;">async</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">var</span><span style="color:#ABB2BF;"> path </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Directory</span><span style="color:#ABB2BF;">.current.path;</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E5C07B;">Tdlib</span><span style="color:#ABB2BF;"> tg </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">Tdlib</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;libtdjson.so&quot;</span><span style="color:#ABB2BF;">, clientOption</span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&#39;api_id&#39;</span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">12345</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&#39;api_hash&#39;</span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&#39;abcdefgjjaijiajdisd&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&#39;database_directory&#39;</span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;$</span><span style="color:#E06C75;">path</span><span style="color:#98C379;">/user/&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#98C379;">&#39;files_directory&#39;</span><span style="color:#C678DD;">:</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;$</span><span style="color:#E06C75;">path</span><span style="color:#98C379;">/user/&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">  tg.</span><span style="color:#C678DD;">on</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;update&quot;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E5C07B;">UpdateTd</span><span style="color:#ABB2BF;"> update) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#61AFEF;">print</span><span style="color:#ABB2BF;">(update.raw);</span></span>
<span class="line"><span style="color:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">await</span><span style="color:#ABB2BF;"> tg.</span><span style="color:#61AFEF;">initIsolate</span><span style="color:#ABB2BF;">();</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div>`,3);function t(r,c){return a(),n("div",null,[p,l(` ## Other resources

Are you a visual learner? Check out these videos to get started with Isar:
<div class="video-block">
  <iframe max-width=100% height=auto src="https://www.youtube.com/embed/CwC9-a9hJv4" title="Isar Database" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>
<div class="video-block">
  <iframe max-width=100% height=auto src="https://www.youtube.com/embed/videoseries?list=PLKKf8l1ne4_hMBtRykh9GCC4MMyteUTyf" title="Isar Database" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<br>
<div class="video-block">
  <iframe max-width=100% height=auto src="https://www.youtube.com/embed/pdKb8HLCXOA " title="Isar Database" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> `)])}const i=s(o,[["render",t],["__file","quickstart.html.vue"]]);export{i as default};

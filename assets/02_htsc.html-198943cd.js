import{_ as e,r as p,o as c,c as o,a as s,b as n,d as i,e as a}from"./app-df053de9.js";const l={},u=a(`<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><h2 id="获取当前登录用户的信息" tabindex="-1"><a class="header-anchor" href="#获取当前登录用户的信息" aria-hidden="true">#</a> 获取当前登录用户的信息</h2><h3 id="获取当前登录用户" tabindex="-1"><a class="header-anchor" href="#获取当前登录用户" aria-hidden="true">#</a> 获取当前登录用户</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">AuthUser</span> user <span class="token operator">=</span> <span class="token class-name">SecurityUtil</span><span class="token punctuation">.</span><span class="token function">getLoginUser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取当前登录用户的角色列表" tabindex="-1"><a class="header-anchor" href="#获取当前登录用户的角色列表" aria-hidden="true">#</a> 获取当前登录用户的角色列表</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SysRole</span><span class="token punctuation">&gt;</span></span> roles <span class="token operator">=</span> <span class="token class-name">SecurityUtil</span><span class="token punctuation">.</span><span class="token function">getLoginUserRoles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="权限注解" tabindex="-1"><a class="header-anchor" href="#权限注解" aria-hidden="true">#</a> 权限注解</h2><p>项目中使用到了<code>Sa-Token</code>，它提供了一系列的注解，方便我们控制访问权限。</p><h3 id="sacheckpermission" tabindex="-1"><a class="header-anchor" href="#sacheckpermission" aria-hidden="true">#</a> @SaCheckPermission</h3><p>当前登录用户必须有指定的功能权限才能访问</p><p>示例：以下代码表示当前登录用户必须有<code>system:user:list</code>权限才能访问</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SaCheckPermission</span><span class="token punctuation">(</span><span class="token string">&quot;system:user:list&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span>
<span class="token keyword">public</span> <span class="token class-name">ResultBody</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ResultBody</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sacheckrole" tabindex="-1"><a class="header-anchor" href="#sacheckrole" aria-hidden="true">#</a> @SaCheckRole</h3><p>当前登录用户必须有指定的角色才能访问</p><p>示例：以下代码表示当前登录用户必须有<code>ceo</code>角色才能访问</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SaCheckRole</span><span class="token punctuation">(</span><span class="token string">&quot;ceo&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span>
<span class="token keyword">public</span> <span class="token class-name">ResultBody</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ResultBody</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="saignore" tabindex="-1"><a class="header-anchor" href="#saignore" aria-hidden="true">#</a> @SaIgnore</h3><p>被注解的方法不会进行鉴权</p><p>示例：以下代码表示访问该接口不需要鉴权</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SaIgnore</span>
<span class="token annotation punctuation">@GetMapping</span>
<span class="token keyword">public</span> <span class="token class-name">ResultBody</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">ResultBody</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),d={href:"https://sa-token.cc/doc.html#/use/at-check",target:"_blank",rel:"noopener noreferrer"},r=a(`<h2 id="自动填充创建人和修改人" tabindex="-1"><a class="header-anchor" href="#自动填充创建人和修改人" aria-hidden="true">#</a> 自动填充创建人和修改人</h2><p>在实际项目中，每个表正常情况下都应该会有<code>创建人</code>、<code>修改人</code>字段，但是如果每次新增和修改操作的时候，都要去设置这两个字段就会很繁琐，所以我们希望能够自动填充这两个字段。</p><p>项目中使用到了<code>Mybatis-Plus</code>，<code>Mybatis-Plus</code>提供了<code>MetaObjectHandler</code>接口，我们只需要实现这个接口，然后在创建人和修改人字段上添加<code>@TableField(fill = FieldFill.{INSERT/UPDATE})</code>即可。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MetaHandler</span> <span class="token keyword">implements</span> <span class="token class-name">MetaObjectHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">insertFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 填充创建人</span>
            <span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token function">currentUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strictInsertFill</span><span class="token punctuation">(</span>metaObject<span class="token punctuation">,</span> <span class="token string">&quot;createBy&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateFill</span><span class="token punctuation">(</span><span class="token class-name">MetaObject</span> metaObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 填充修改人</span>
            <span class="token class-name">String</span> userId <span class="token operator">=</span> <span class="token function">currentUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strictUpdateFill</span><span class="token punctuation">(</span>metaObject<span class="token punctuation">,</span> <span class="token string">&quot;updateBy&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实体类</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XxxxEntity</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">INSERT</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> createBy<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token class-name">FieldFill</span><span class="token punctuation">.</span><span class="token constant">UPDATE</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> updateBy<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br><div class="highlight-line"> </div><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="系统日志" tabindex="-1"><a class="header-anchor" href="#系统日志" aria-hidden="true">#</a> 系统日志</h2><p>在实际项目中，我们希望对一些关键的动作进行日志记录，比如添加用户、删除用户等。一个动作调用一次记录日志的方法，每次还待去收集参数等，会造成大量的代码重复。我们希望代码中只有业务相关的操作，使用注解的方式来记录日志。</p><p>在需要记录日志的<code>controller</code>方法上添加<code>@Log</code>注解，使用方法如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Log</span><span class="token punctuation">(</span>title <span class="token operator">=</span> <span class="token string">&quot;新增部门&quot;</span><span class="token punctuation">,</span> businessType <span class="token operator">=</span> <span class="token class-name">BusinessType</span><span class="token punctuation">.</span><span class="token constant">INSERT</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@PostMapping</span>
<span class="token keyword">public</span> <span class="token class-name">ResultBody</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">return</span> <span class="token class-name">ResultBody</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注解参数说明" tabindex="-1"><a class="header-anchor" href="#注解参数说明" aria-hidden="true">#</a> 注解参数说明</h3><table><thead><tr><th>参数</th><th>类型</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td>title</td><td>String</td><td>无</td><td>操作模块</td></tr><tr><td>businessType</td><td>BusinessType</td><td>OTHER</td><td>操作功能（OTHER其他、INSERT新增、UPDATE修改、DELETE删除、EXPORT导出、IMPORT导入等）</td></tr><tr><td>isSaveRequestData</td><td>boolean</td><td>true</td><td>是否保存请求的参数</td></tr><tr><td>isSaveResponseData</td><td>boolean</td><td>true</td><td>是否保存响应的参数</td></tr><tr><td>excludeParamNames</td><td>String[]</td><td>{}</td><td>排除指定的请求参数</td></tr></tbody></table><h3 id="自定义操作功能" tabindex="-1"><a class="header-anchor" href="#自定义操作功能" aria-hidden="true">#</a> 自定义操作功能</h3><p>1、在<code>BusinessType.java</code>中新增操作功能类型</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">BusinessType</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token doc-comment comment">/**
     * 测试
     */</span>
    <span class="token constant">TEST</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、在Vue项目中的<code>src/utils/enums.js</code>中新增操作功能类型</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">const</span> BusinessTypeEnums <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token constant">TEST</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;测试&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">8</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>@Log</code>注解的逻辑实现代码<code>LogAspect.java</code></p><p>可以在<code>系统监控</code>/<code>操作日志</code>中进行查看日志数据和详细信息</p><h2 id="数据权限" tabindex="-1"><a class="header-anchor" href="#数据权限" aria-hidden="true">#</a> 数据权限</h2><p><code>功能权限</code>控制的是用户可以访问哪些菜单、按钮等资源，而<code>数据权限</code>控制的是用户能看到的<code>数据范围</code>。所谓数据范围，不是指能看到的数据字段，而是指能查出来的数据集合。 比如，出纳A和出纳B，他们都有权限访问财务管理模块，但是A只能看到A自己的数据，B只能看到B自己的数据，这就是数据权限的作用。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>默认系统管理员<code>admin</code>拥有所有数据权限<code>(sys_user.admin = 1)</code>，默认角色拥有所有数据权限（如不需要数据权限不用设置数据权限操作）</p></div><h3 id="数据权限的使用" tabindex="-1"><a class="header-anchor" href="#数据权限的使用" aria-hidden="true">#</a> 数据权限的使用</h3><p>1、目前支持以下几种数据权限：</p><ul><li><code>全部数据权限</code>：可以访问所有数据</li><li><code>本部门数据权限</code>：可以访问本部门的数据</li><li><code>本部门及以下数据权限</code>：可以访问本部门及以下的数据</li><li><code>自定义数据权限</code>：可以访问自定义的数据</li><li><code>本人数据权限</code>：只能访问本人的数据</li></ul><p>2、在需要数据权限控制的地方加上<code>@DataScope</code>注解</p>`,26);function k(v,h){const t=p("ExternalLinkIcon");return c(),o("div",null,[u,s("p",null,[n("想要了解更详细的内容，可以查看"),s("a",d,[n("Sa-Token官方文档"),i(t)]),n("。")]),r])}const b=e(l,[["render",k],["__file","02_htsc.html.vue"]]);export{b as default};
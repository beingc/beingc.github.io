import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.ObsCMCsf.js";const C=JSON.parse('{"title":"Linux常用基础命令","description":"","frontmatter":{},"headers":[],"relativePath":"linux/cmd/Linux常用基础命令.md","filePath":"linux/cmd/Linux常用基础命令.md"}'),l={name:"linux/cmd/Linux常用基础命令.md"},h=n(`<h1 id="linux常用基础命令" tabindex="-1">Linux常用基础命令 <a class="header-anchor" href="#linux常用基础命令" aria-label="Permalink to &quot;Linux常用基础命令&quot;">​</a></h1><h2 id="善用man命令-善用google" tabindex="-1">善用man命令, 善用Google <a class="header-anchor" href="#善用man命令-善用google" aria-label="Permalink to &quot;善用man命令, 善用Google&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># man, manual的简写，可以用来查看命令参考文档</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 man 命令的用法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">man</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> man</span></span></code></pre></div><h3 id="_1-基础命令" tabindex="-1">1. 基础命令 <a class="header-anchor" href="#_1-基础命令" aria-label="Permalink to &quot;1. 基础命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. cd  切换目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 当前目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ..</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 上级目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 根目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # home目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 上次访问目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. ls</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # 展示当前目录下的内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 使用长列表格式展示</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -al</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 显示隐藏文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -alt</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 按时间排序，新文件在最前</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -alrt</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 按时间排序-逆序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Sl</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 按文件大小排序，大文件在最前（未统计文件夹大小）</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. pwd</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看当前工作目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. touch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName.txt</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 创建文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. mkdir</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> temp</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 创建目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir1/dir2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 创建多层目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test-{a,b,c}/subtest-{1,2,3}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 同时创建多个目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 6. rmdir</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rmdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> temp</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 删除空目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 7. rm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 删除文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dirName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 删除目录及其内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 删除所有内容，不显示过程</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 8. mv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 文件重命名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> temp/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 移动文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 9. cp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 复制文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 复制文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -av</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dir2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 完整复制并展示过程</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 10. zip &amp; gzip &amp; tar</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">zip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.zip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> testFile</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 压缩</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.zip</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # 解压</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                       # 压缩</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.gz</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                 # 解压</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gunzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.gz</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # 解压</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DirName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 打包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.tar</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                # 解包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zcvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DirName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 压缩</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.tar.gz</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 解压</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ztvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.tar.gz</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 查阅压缩包内文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 只解压压缩包内指定文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jcvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.tar.bz2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DirName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 压缩</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> jxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FileName.tar.bz2</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           # 解压</span></span></code></pre></div><h3 id="_2-查看文件" tabindex="-1">2. 查看文件 <a class="header-anchor" href="#_2-查看文件" aria-label="Permalink to &quot;2. 查看文件&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># cat</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     # 查看文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 显示行号</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># vim</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 查看编辑文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 查看编辑文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">view</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># more</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">more</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># less</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">less</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># head</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">head</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看文件开头</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># tail</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tail</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 查看文件结尾</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tail</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 动态显示结尾，常用查看新增日志</span></span></code></pre></div><h3 id="_3-用户管理" tabindex="-1">3. 用户管理 <a class="header-anchor" href="#_3-用户管理" aria-label="Permalink to &quot;3. 用户管理&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 新增用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useradd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/test</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /bin/bash</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -d 指定用户目录</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -m 用户目录不存在则创建</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -s 指定用户shell</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 删除用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">userdel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改用户</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usermod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> NewUser</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/NewUser</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OldUser</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -l 修改用户名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -d 修改登录后使用的路径</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -m 修改登录名称的同时将目录名称一同修改</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改密码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">passwd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建用户组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">groupadd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> testgroup</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chgrp</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> users</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filename</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 改变文件的群组属性</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改用户组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">usermod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> users</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改文件权限</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># chmod [ugo] [+-=] [rwx]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName　　#</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 增加执行权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 755</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName　</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 更改权限</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改文件属组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test:users</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 修改文件属组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test:users</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> DirName</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 修改文件夹及其所有文件的属组</span></span></code></pre></div><h3 id="_4-其它常用命令" tabindex="-1">4. 其它常用命令 <a class="header-anchor" href="#_4-其它常用命令" aria-label="Permalink to &quot;4. 其它常用命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看操作系统版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/os-release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看磁盘空间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">df</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看文件大小</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">du</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -sh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调试脚本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileName</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看进程状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ps</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -ef</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看端口监听</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">netstat</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -an</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8000</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 终止进程</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">kill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PID</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 终止你所有的全部进程</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">kill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -9</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span></code></pre></div>`,11),p=[h];function k(t,e,F,r,d,g){return a(),i("div",null,p)}const c=s(l,[["render",k]]);export{C as __pageData,c as default};

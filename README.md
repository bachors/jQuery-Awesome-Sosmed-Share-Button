AyoShare.js the new name of this plugin
=======================================

Awesome Social Media Share Button With Share Count

<h2>Plug and play :)</h2>

Options:
<ul>
	<li>Website. Appears in all devices
		<ul>
			<li>google</li>
			<li>stumbleupon</li>
			<li>facebook</li>
			<li>linkedin</li>
			<li>pinterest</li>
			<li>bufferapp</li>
			<li>reddit</li>
			<li>vk</li>
			<li>pocket</li>
			<li>twitter</li>
			<li>digg</li>
			<li>email</li>
		</ul>
	</li>
	<li>Mobile. Appears when opened using mobile
		<ul>
			<li>whatsapp</li>
			<li>telegram</li>
			<li>viber</li>
			<li>line</li>
			<li>bbm</li>
			<li>sms</li>
		</ul>
	</li>
</ul>
Value option: <code>true</code>

<h3><a href="https://github.com/bachors/jQuery-Awesome-Sosmed-Share-Button/tree/master/src">DOWNLOAD</a></h3>

<h2>Usage:</h2>
CSS
<pre>&lt;!-- Include Font Awesome v4.7.0 --&gt;
&lt;link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"&gt;

&lt;!-- Custom Style --&gt;
&lt;link href="src/css/ayoshare.css" rel="stylesheet"&gt;</pre>
JS
<pre>&lt;!-- Include jQuery --&gt;
&lt;script src="https://code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;

&lt;!-- jQuery Awesome Sosmed Share Button --&gt;
&lt;script src="src/js/ayoshare.js"&gt;&lt;/script&gt;</pre>
<h2>Example:</h2>
<pre>&lt;!-- By Class Name --&gt;
&lt;div class="anu" data-ayoshare="http://your-site.com/bla"&gt;&lt;/div&gt;
&lt;div class="anu" data-ayoshare="http://your-site.com/foo/bar"&gt;&lt;/div&gt;

&lt;!-- By ID --&gt;
&lt;div id="unik" data-ayoshare="http://your-site.com/test.html"&gt;&lt;/div&gt;

&lt;script&gt;
    $(function() {
    
        $(".anu").ayoshare({
            google : true,
            facebook : true,
            pinterest : true,
            linkedin : true,
            twitter : true,
            email : true,
            whatsapp : true,
            telegram : true,
            line : true,
            bbm : true,
            viber : true,
            sms : true
        });
        
        $("#unik").ayoshare({
            google : true,
            stumbleupon : true,
            facebook : true,
            pinterest : true,
            bufferapp : true,
            reddit : true,
            vk : true,
            pocket : true,
            twitter : true,
            digg : true,
            telegram : true,
            sms : true
        });
        
    });
&lt;/script&gt;</pre>

<h3><a href="http://ibacor.com/demo/jquery-awesome-sosmed-share-button/">DEMO</a></h3>

AyoShare.js the new name of this plugin
=======================================

Awesome Social Media Share Button With Share Count

<h2>Plug and play :)</h2>

<h2>Usage:</h2>
CSS
<pre>&lt;!-- Include Font Awesome v4.1.0 --&gt;
&lt;link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"&gt;

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
    
        $(".anu").ayoshare(
            google = true, // true or false
            stumbleupon = false,
            facebook = true,
            linkedin = true,
            pinterest = true,
            bufferapp = false,
            reddit = false,
            vk = false,
            pocket = false,
            twitter = true
        );
        
        $("#unik").ayoshare(
            google = true, // true or false
            stumbleupon = true,
            facebook = true,
            linkedin = true,
            pinterest = true,
            bufferapp = true,
            reddit = true,
            vk = true,
            pocket = true,
            twitter = true
        );
        
    });
&lt;/script&gt;</pre>
<h2>Screenshot:</h2>
<img src="https://1.bp.blogspot.com/-3HZwy8Z-9tw/VrY0eRGxQMI/AAAAAAAABnM/o4W3sPPIJjo/s1600/sdsdssssssssss1.jpg">

<h3><a href="http://ibacor.com/demo/jquery-awesome-sosmed-share-button/">DEMO</a></h3>

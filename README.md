AyoShare.js the new name of this plugin
=======================================

Awesome Social Media Share Button With Share Count

<h2>Plug and play :)</h2>

<h2>Install</h2>
<pre>&lt;!-- Include Font Awesome v4.5.0 --&gt;
&lt;link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"&gt;

&lt;!-- Custom Style --&gt;
&lt;link href="src/css/ayoshare.css" rel="stylesheet"&gt;
    
&lt;!-- Display all Shares Button --&gt;
&lt;div id="share"&gt;&lt;/div&gt;

&lt;!-- Include jQuery --&gt;
&lt;script src="https://code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;

&lt;!-- ayoshare.js --&gt;
&lt;script src="src/js/ayoshare.js"&gt;&lt;/script&gt;        
&lt;script&gt;
    $(function() {
    
		$("#share").ayoshare(
			url = location.href, // Dynamic url	
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
		
		$(".share2").ayoshare(
			url = "http://your domain.com/blabla", // Static url
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
<h1>Screenshot:</h1>
<img src="https://1.bp.blogspot.com/-3HZwy8Z-9tw/VrY0eRGxQMI/AAAAAAAABnM/o4W3sPPIJjo/s1600/sdsdssssssssss1.jpg">

<h3><a href="http://ibacor.com/demo/jquery-awesome-sosmed-share-button/">DEMO</a></h3>

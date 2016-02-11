/*********************************************************************
 * #### jQuery Awesome Sosmed Share Button / AyoShare.js v10 ####
 * Coded by Ican Bachors 2014.
 * http://ibacor.com/labs/jquery-awesome-sosmed-share-button/
 * Updates will be posted to this site.
 *********************************************************************/

$.fn.ayoshare = function() {

    var b = encodeURIComponent(location.href),
        a = ($(document).attr('title') != null) ? $(document).attr('title') : '',
        desk = ($('meta[name="description"]').attr('content') != null) ? $('meta[name="description"]').attr('content') : '',
        img = ($('meta[property="og:image"]').attr('content') != null) ? $('meta[property="og:image"]').attr('content') : '',
        html = '';
    
	if (facebook == true) {
        html += '<p><a href="http://www.facebook.com/sharer/sharer.php?u=' + b + '" onclick="javascript:void window.open(\'http://www.facebook.com/sharer/sharer.php?u=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-facebook" title="Facebook"><i class="fa fa-facebook"></i> <span id="ayo_count_fb"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_facebook(b)
    }
    if (twitter == true) {
        html += '<p><a href="https://twitter.com/share?text=' + a + '+-+via @bachors&url=' + b + '" onclick="javascript:void window.open(\'https://twitter.com/share?text=' + a + '+-+via @bachors&url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-twitter" title="Twitter"><i class="fa fa-twitter"></i> <span id="ayo_count_tw"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_twitter(b)
    }
    if (google == true) {
        html += '<p><a href="https://plus.google.com/share?url=' + b + '" onclick="javascript:void window.open(\'https://plus.google.com/share?url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-google" title="Google+"><i class="fa fa-google-plus"></i> <span id="ayo_count_gp"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_google(b)
    }
    if (reddit == true) {
        html += '<p><a href="http://reddit.com/submit?url=' + b + '&title=' + a + '+-+via @bachors" onclick="javascript:void window.open(\'http://reddit.com/submit?url=' + b + '&title=' + a + '+-+via @bachors\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-reddit" title="Reddit"><i class="fa fa-reddit"></i> <span id="ayo_count_rd"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_reddit(b)
    }
    if (linkedin == true) {
        html += '<p><a href="https://www.linkedin.com/shareArticle?mini=true&url=' + b + '&title=' + a + '&summary=' + desk + '" onclick="javascript:void window.open(\'https://www.linkedin.com/shareArticle?mini=true&url=' + b + '&title=' + a + '&summary=' + desk + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-linkedin" title="Linkedin"><i class="fa fa-linkedin"></i> <span id="ayo_count_in"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_linkedin(b)
    }
    if (pinterest == true) {
        html += '<p><a href="http://pinterest.com/pin/create/button/?url=' + b + '&media=' + img + '&description=' + desk + '" onclick="javascript:void window.open(\'http://pinterest.com/pin/create/button/?url=' + b + '&media=' + img + '&description=' + desk + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-pinterest" title="Pinterest"><i class="fa fa-pinterest"></i> <span id="ayo_count_pn"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_pinterest(b)
    }
    if (stumbleupon == true) {
        html += '<p><a href="http://www.stumbleupon.com/badge/?url=' + b + '" onclick="javascript:void window.open(\'http://www.stumbleupon.com/badge/?url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-stumbleupon" title="Stumbleupon"><i class="fa fa-stumbleupon"></i> <span id="ayo_count_up"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_stumbleupon(b)
    }
    if (bufferapp == true) {
        html += '<p><a href="https://bufferapp.com/add?url=' + b + '&text=' + desk + '" onclick="javascript:void window.open(\'https://bufferapp.com/add?url=' + b + '&text=' + desk + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-buffer" title="Bufferapp"><i class="fa fa-bars"></i> <span id="ayo_count_bf"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_bufferapp(b)
    }
    if (vk == true) {
        html += '<p><a href="http://vk.com/share.php?url=' + b + '" onclick="javascript:void window.open(\'http://vk.com/share.php?url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-vk" title="VK"><i class="fa fa-vk"></i> <span id="ayo_count_vk"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_vk(b)
    }
    if (pocket == true) {
        html += '<p><a href="https://getpocket.com/save?title=' + a + '&url=' + b + '" onclick="javascript:void window.open(\'https://getpocket.com/save?title=' + a + '&url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" class="ayo-btn ayo-pocket" title="Pocket"><i class="fa fa-get-pocket"></i> <span id="ayo_count_pc"><i class="fa fa-spinner fa-spin"></i></span></a></p>'
        ayo_pocket(b)
    }

    $(this).html(html);

    function ayo_bufferapp(c) {
        $.ajax({
            url: 'https://api.bufferapp.com/1/links/shares.json?url=' + c,
            crossDomain: true,
            dataType: 'jsonp',
            success: function(a) {
                var b = ayo_num(a.shares);
                $('#ayo_count_bf').html(b)
            },
            error: function() {
                $('#ayo_count_bf').html(0)
            }
        })
    }

    function ayo_facebook(c) {
        $.ajax({
            url: 'https://api.facebook.com/method/links.getStats?urls=' + c + '&format=json',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(a) {
                var b = ayo_num(a[0].share_count);
                $('#ayo_count_fb').html(b)
            },
            error: function() {
                $('#ayo_count_fb').html(0)
            }
        })
    }

    function ayo_linkedin(c) {
        $.ajax({
            url: 'https://www.linkedin.com/countserv/count/share?url=' + c + '&callback=?',
            crossDomain: true,
            dataType: 'json',
            success: function(a) {
                var b = ayo_num(a.count);
                $('#ayo_count_in').html(b)
            },
            error: function() {
                $('#ayo_count_in').html(0)
            }
        })
    }

    function ayo_pinterest(c) {
        $.ajax({
            url: 'http://api.pinterest.com/v1/urls/count.json?url=' + c + '&callback=?',
            crossDomain: true,
            dataType: 'json',
            success: function(a) {
                var b = ayo_num(a.count);
                $('#ayo_count_pn').html(b)
            },
            error: function() {
                $('#ayo_count_pn').html(0)
            }
        })
    }

    function ayo_vk(f) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"http://vk.com/share.php?act=count&index=1&url=" + f + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            },
            success: function(a) {
                var b = $(a).find("content").text();
                var c = b.split(",");
                var d = c[1].split(")");
                var e = ayo_num(d[0]);
                $('#ayo_count_vk').html(e)
            },
            error: function() {
                $('#ayo_count_vk').html(0)
            }
        })
    }

    function ayo_reddit(d) {
        $.ajax({
            url: 'http://www.reddit.com/api/info.json?url=' + d,
            crossDomain: true,
            dataType: 'json',
            success: function(a) {
                var b = (a.data.children != null) ? a.data.children.length : 0;
				var c = (b == 25) ? 25 + '+' : b;
                $('#ayo_count_rd').html(c)
            },
            error: function() {
                $('#ayo_count_rd').html(0)
            }
        })
    }

    function ayo_google(e) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"https://plusone.google.com/_/+1/fastbutton?url=" + e + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            },
            success: function(a) {
                var b = $(a).find("content").text();
                var c = b.match(/window\.__SSR[\s*]=[\s*]{c:[\s*](\d+)/i);
                var d = (c !== null) ? ayo_num(c[1]) : 0;
                $('#ayo_count_gp').html(d)
            },
            error: function() {
                $('#ayo_count_gp').html(0)
            }
        })
    }

    function ayo_stumbleupon(e) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"http://www.stumbleupon.com/services/1.01/badge.getinfo?url=" + e + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            },
            success: function(a) {
                var b = $(a).find("content").text();
                var c = b.match(/views\":([0-9]+),/i);
                var d = (c !== null) ? ayo_num(c[1]) : 0;
                $('#ayo_count_up').html(d)
            },
            error: function() {
                $('#ayo_count_up').html(0)
            }
        })
    }

    function ayo_pocket(e) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"https://widgets.getpocket.com/v1/button?label=pocket&count=horizontal&v=1&url=" + e + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            },
            success: function(a) {
                var b = $(a).find("content").text();
                var c = b.match(/<em\sid=\"cnt\">([0-9]+)<\/em>/i);
                var d = (c !== null) ? ayo_num(c[1]) : 0;
                $('#ayo_count_pc').html(d)
            },
            error: function() {
                $('#ayo_count_pc').html(0)
            }
        })
    }

	function ayo_twitter(d) {
		$.ajax({
			url: 'http://cdn.api.twitter.com/1/urls/count.json?url=' + d,
			crossDomain: true,
			dataType: 'jsonp',
            success: function(a) {
                var b = ayo_num(a.count);
                $('#ayo_count_tw').html(b)
            },
            error: function() {
                $('#ayo_count_tw').html(0)
            }
        })
	}

    function ayo_num(a) {
        var b = parseInt(a, 10);
        if (b === null) {
            return 0
        }
        if (b >= 1000000000) {
            return (b / 1000000000).toFixed(1).replace(/\.0$/, "") + "G"
        }
        if (b >= 1000000) {
            return (b / 1000000).toFixed(1).replace(/\.0$/, "") + "M"
        }
        if (b >= 1000) {
            return (b / 1000).toFixed(1).replace(/\.0$/, "") + "K"
        }
        return b
    }

};

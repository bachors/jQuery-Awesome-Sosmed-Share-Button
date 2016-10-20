/*********************************************************************
 * #### jQuery Awesome Sosmed Share Button / AyoShare.js v14 ####
 * Coded by Ican Bachors 2014.
 * http://ibacor.com/labs/jquery-awesome-sosmed-share-button/
 * Updates will be posted to this site.
 *********************************************************************/

$.fn.ayoshare = function(h, j, k, l, m, n, o, p, q, r, email, whatsapp, telegram, viber) {
    $(this).each(function(i, aa) {
        var b = encodeURIComponent($(this).data('ayoshare')),
            a = ($(document).attr('title') != null) ? $(document).attr('title') : '',
            desk = ($('meta[name="description"]').attr('content') != null) ? $('meta[name="description"]').attr('content') : '',
            img = ($('meta[property="og:image"]').attr('content') != null) ? $('meta[property="og:image"]').attr('content') : '',
            html = '';
        var c = ($(this).attr('id') != null ? '#' + $(this).attr('id') : '.' + $(this).attr('class'));
        if (k == true) {
            html += '<div class="facebook button"><a href="http://www.facebook.com/sharer/sharer.php?u=' + b + '" onclick="javascript:void window.open(\'http://www.facebook.com/sharer/sharer.php?u=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Facebook">';
			html += '<i class="icon"><i class="fa fa-facebook"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_facebook(b, c, i);
        }
        if (h == true) {
            html += '<div class="google button"><a href="https://plus.google.com/share?url=' + b + '" onclick="javascript:void window.open(\'https://plus.google.com/share?url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Google+">';
			html += '<i class="icon"><i class="fa fa-google-plus"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_google(b, c, i);
        }
        if (o == true) {
            html += '<div class="reddit button"><a href="http://reddit.com/submit?url=' + b + '&title=' + a + '+-+via @bachors" onclick="javascript:void window.open(\'http://reddit.com/submit?url=' + b + '&title=' + a + '+-+via @bachors\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Reddit">';
			html += '<i class="icon"><i class="fa fa-reddit"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_reddit(b, c, i);
        }
        if (l == true) {
            html += '<div class="linkedin button"><a href="https://www.linkedin.com/shareArticle?mini=true&url=' + b + '&title=' + a + '&summary=' + desk + '" onclick="javascript:void window.open(\'https://www.linkedin.com/shareArticle?mini=true&url=' + b + '&title=' + a + '&summary=' + desk + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Linkedin">';
			html += '<i class="icon"><i class="fa fa-linkedin"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_linkedin(b, c, i);
        }
        if (m == true) {
            html += '<div class="pinterest button"><a href="http://pinterest.com/pin/create/button/?url=' + b + '&media=' + img + '&description=' + desk + '" onclick="javascript:void window.open(\'http://pinterest.com/pin/create/button/?url=' + b + '&media=' + img + '&description=' + desk + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Pinterest">';
			html += '<i class="icon"><i class="fa fa-pinterest"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_pinterest(b, c, i);
        }
        if (j == true) {
            html += '<div class="stumbleupon button"><a href="http://www.stumbleupon.com/badge/?url=' + b + '" onclick="javascript:void window.open(\'http://www.stumbleupon.com/badge/?url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Stumbleupon">';
			html += '<i class="icon"><i class="fa fa-stumbleupon"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_stumbleupon(b, c, i);
        }
        if (n == true) {
            html += '<div class="bufferapp button"><a href="https://bufferapp.com/add?url=' + b + '&text=' + desk + '" onclick="javascript:void window.open(\'https://bufferapp.com/add?url=' + b + '&text=' + desk + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Bufferapp">';
			html += '<i class="icon"><i class="fa fa-bars"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_bufferapp(b, c, i);
        }
        if (p == true) {
            html += '<div class="vk button"><a href="http://vk.com/share.php?url=' + b + '" onclick="javascript:void window.open(\'http://vk.com/share.php?url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Vk">';
			html += '<i class="icon"><i class="fa fa-vk"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_vk(b, c, i);
        }
        if (q == true) {
            html += '<div class="pocket button"><a href="https://getpocket.com/save?title=' + a + '&url=' + b + '" onclick="javascript:void window.open(\'https://getpocket.com/save?title=' + a + '&url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Pocket">';
			html += '<i class="icon"><i class="fa fa-get-pocket"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_pocket(b, c, i);
        }
        if (r == true) {
            html += '<div class="twitter button"><a href="https://twitter.com/share?text=' + a + '+-+via @bachors&url=' + b + '" onclick="javascript:void window.open(\'https://twitter.com/share?text=' + a + '+-+via @bachors&url=' + b + '\',\'ibacor.com\',\'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0\');return false;" title="Twitter">';
			html += '<i class="mobile"><i class="fa fa-twitter"></i></i></a></div>';
        }
        if (whatsapp == true) {
            html += '<div class="whatsapp button"><a href="whatsapp://send?text=' + a + '%20' + b + '" target="_BLANK" title="Whatsapp">';
			html += '<i class="mobile"><i class="fa fa-whatsapp"></i></i></a></div>';
        }
        if (telegram == true) {
            html += '<div class="telegram button"><a href="tg://msg_url?text=' + a + '%20' + b + '" target="_BLANK" title="Telegram">';
			html += '<i class="mobile"><i class="fa fa-paper-plane"></i></i></a></div>';
        }
        if (viber == true) {
            html += '<div class="viber button"><a href="viber://forward?text=' + a + '%20' + b + '" target="_BLANK" title="Viber">';
			html += '<i class="mobile"><i class="fa fa-volume-control-phone"></i></i></a></div>';
        }
        if (email == true) {
            html += '<div class="email button"><a href="mailto:?subject=' + a + '&amp;body=' + desk + '%20' + b + '" title="Email">';
			html += '<i class="mobile"><i class="fa fa-envelope"></i></i></a></div>';
        }
        $(this).html('<div class="ayoshare">' + html + '</div>');
    });

    function ayo_bufferapp(c, d, z) {
        $.ajax({
            url: 'https://api.bufferapp.com/1/links/shares.json?url=' + c,
            crossDomain: true,
            dataType: 'jsonp',
            success: function(a) {
                var b = ayo_num(a.shares);
                $(d + ':eq(' + z + ') .ayoshare .bufferapp .counter p').html(b)
            },
            error: function() {
                $(d + ':eq(' + z + ') .ayoshare .bufferapp .counter p').html(0)
            }
        })
    }

    function ayo_facebook(c, d, z) {
        $.ajax({
            url: 'https://graph.facebook.com/v2.7/?id=' + c + '&access_token=443213172472393|l2IEt1tuyYta_278fR5NAg8V1jI',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(a) {
                var b = ayo_num(a.share.share_count);
                $(d + ':eq(' + z + ') .ayoshare .facebook .counter p').html(b)
            },
            error: function() {
                $(d + ':eq(' + z + ') .ayoshare .facebook .counter p').html(0)
            }
        })
    }

    function ayo_linkedin(c, d, z) {
        $.ajax({
            url: 'https://www.linkedin.com/countserv/count/share?url=' + c + '&callback=?',
            crossDomain: true,
            dataType: 'json',
            success: function(a) {
                var b = ayo_num(a.count);
                $(d + ':eq(' + z + ') .ayoshare .linkedin .counter p').html(b)
            },
            error: function() {
                $(d + ':eq(' + z + ') .ayoshare .linkedin .counter p').html(0)
            }
        })
    }

    function ayo_pinterest(c, d, z) {
        $.ajax({
            url: 'http://api.pinterest.com/v1/urls/count.json?url=' + c + '&callback=?',
            crossDomain: true,
            dataType: 'json',
            success: function(a) {
                var b = ayo_num(a.count);
                $(d + ':eq(' + z + ') .ayoshare .pinterest .counter p').html(b)
            },
            error: function() {
                $(d + ':eq(' + z + ') .ayoshare .pinterest .counter p').html(0)
            }
        })
    }

    function ayo_vk(f, g, z) {
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
                $(g + ':eq(' + z + ') .ayoshare .vk .counter p').html(e)
            },
            error: function() {
                $(g + ':eq(' + z + ') .ayoshare .vk .counter p').html(0)
            }
        })
    }

    function ayo_reddit(d, e, z) {
        $.ajax({
            url: 'http://www.reddit.com/api/info.json?url=' + d,
            crossDomain: true,
            dataType: 'json',
            success: function(a) {
                var b = (a.data.children != null) ? a.data.children.length : 0;
                var c = (b == 25) ? 25 + '+' : b;
                $(e + ':eq(' + z + ') .ayoshare .reddit .counter p').html(c)
            },
            error: function() {
                $(e + ':eq(' + z + ') .ayoshare .reddit .counter p').html(0)
            }
        })
    }

    function ayo_google(e, f, z) {
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
                $(f + ':eq(' + z + ') .ayoshare .google .counter p').html(d)
            },
            error: function() {
                $(f + ':eq(' + z + ') .ayoshare .google .counter p').html(0)
            }
        })
    }

    function ayo_stumbleupon(e, f, z) {
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
                $(f + ':eq(' + z + ') .ayoshare .stumbleupon .counter p').html(d)
            },
            error: function() {
                $(f + ':eq(' + z + ') .ayoshare .stumbleupon .counter p').html(0)
            }
        })
    }

    function ayo_pocket(e, f, z) {
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
                $(f + ':eq(' + z + ') .ayoshare .pocket .counter p').html(d)
            },
            error: function() {
                $(f + ':eq(' + z + ') .ayoshare .pocket .counter p').html(0)
            }
        })
    }

    function ayo_num(a) {
        var b = parseInt(a, 10);
        if (b === null) {
            return 0
        }
        if (b >= 1000000000) {
            return (b / 1000000000).toFixed(1).replace(/\.0$/, "") + "g"
        }
        if (b >= 1000000) {
            return (b / 1000000).toFixed(1).replace(/\.0$/, "") + "m"
        }
        if (b >= 1000) {
            return (b / 1000).toFixed(1).replace(/\.0$/, "") + "k"
        }
        return b
    }
};

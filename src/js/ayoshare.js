/*********************************************************************
 * #### jQuery Awesome Sosmed Share Button / AyoShare.js v16 ####
 * Coded by Ican Bachors 2014.
 * http://ibacor.com/labs/jquery-awesome-sosmed-share-button/
 * Updates will be posted to this site.
 *********************************************************************/
$.fn.ayoshare = function(opt) {
    var defaultopt = {
        google: false,
        stumbleupon: false,
        facebook: false,
        linkedin: false,
        pinterest: false,
        bufferapp: false,
        reddit: false,
        vk: false,
        pocket: false,
        twitter: false,
        digg: false,
        email: false,
        whatsapp: false,
        telegram: false,
        viber: false,
        line: false,
        bbm: false
    };
    opt.google = (opt.google == undefined ? defaultopt.google : opt.google);
    opt.stumbleupon = (opt.stumbleupon == undefined ? defaultopt.stumbleupon : opt.stumbleupon);
    opt.facebook = (opt.facebook == undefined ? defaultopt.facebook : opt.facebook);
    opt.linkedin = (opt.linkedin == undefined ? defaultopt.linkedin : opt.linkedin);
    opt.pinterest = (opt.pinterest == undefined ? defaultopt.pinterest : opt.pinterest);
    opt.bufferapp = (opt.bufferapp == undefined ? defaultopt.bufferapp : opt.bufferapp);
    opt.reddit = (opt.reddit == undefined ? defaultopt.reddit : opt.reddit);
    opt.vk = (opt.vk == undefined ? defaultopt.vk : opt.vk);
    opt.pocket = (opt.pocket == undefined ? defaultopt.pocket : opt.pocket);
    opt.twitter = (opt.twitter == undefined ? defaultopt.twitter : opt.twitter);
    opt.digg = (opt.digg == undefined ? defaultopt.digg : opt.digg);
    opt.email = (opt.email == undefined ? defaultopt.email : opt.email);
    opt.whatsapp = (opt.whatsapp == undefined ? defaultopt.whatsapp : opt.whatsapp);
    opt.telegram = (opt.telegram == undefined ? defaultopt.telegram : opt.telegram);
    opt.viber = (opt.viber == undefined ? defaultopt.viber : opt.viber);
    opt.line = (opt.line == undefined ? defaultopt.line : opt.line);
    opt.bbm = (opt.bbm == undefined ? defaultopt.bbm : opt.bbm);
    $(this).each(function(i, d) {
        var b = $(this).data('ayoshare'),
            html = '';
        var c = ($(this).attr('id') != null && $(this).attr('id') != undefined ? '#' + $(this).attr('id') : '.' + $(this).attr('class'));
        if (opt.facebook) {
            html += '<div class="facebook button"><a onclick="ayo_share_og(\'' + b + '\', \'facebook\');" title="Facebook">';
            html += '<i class="icon"><i class="fa fa-facebook"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_facebook(b, c, i);
        }
        if (opt.google) {
            html += '<div class="google button"><a onclick="ayo_share_og(\'' + b + '\', \'google\');" title="Google+">';
            html += '<i class="icon"><i class="fa fa-google-plus"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_google(b, c, i);
        }
        if (opt.reddit) {
            html += '<div class="reddit button"><a onclick="ayo_share_og(\'' + b + '\', \'reddit\');" title="Reddit">';
            html += '<i class="icon"><i class="fa fa-reddit"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_reddit(b, c, i);
        }
        if (opt.linkedin) {
            html += '<div class="linkedin button"><a onclick="ayo_share_og(\'' + b + '\', \'linkedin\');" title="Linkedin">';
            html += '<i class="icon"><i class="fa fa-linkedin"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_linkedin(b, c, i);
        }
        if (opt.pinterest) {
            html += '<div class="pinterest button"><a onclick="ayo_share_og(\'' + b + '\', \'pinterest\');" title="Pinterest">';
            html += '<i class="icon"><i class="fa fa-pinterest"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_pinterest(b, c, i);
        }
        if (opt.stumbleupon) {
            html += '<div class="stumbleupon button"><a onclick="ayo_share_og(\'' + b + '\', \'stumbleupon\');" title="Stumbleupon">';
            html += '<i class="icon"><i class="fa fa-stumbleupon"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_stumbleupon(b, c, i);
        }
        if (opt.bufferapp) {
            html += '<div class="bufferapp button"><a onclick="ayo_share_og(\'' + b + '\', \'bufferapp\');" title="Bufferapp">';
            html += '<i class="icon"><i class="fa fa-bufferapp"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_bufferapp(b, c, i);
        }
        if (opt.vk) {
            html += '<div class="vk button"><a onclick="ayo_share_og(\'' + b + '\', \'vk\');" title="VK">';
            html += '<i class="icon"><i class="fa fa-vk"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_vk(b, c, i);
        }
        if (opt.pocket) {
            html += '<div class="pocket button"><a onclick="ayo_share_og(\'' + b + '\', \'pocket\');" title="Pocket">';
            html += '<i class="icon"><i class="fa fa-get-pocket"></i></i><div class="counter"><p><i class="fa fa-spinner fa-spin"></i></p></div></a></div>';
            ayo_pocket(b, c, i);
        }
        if (opt.twitter) {
            html += '<div class="twitter button"><a onclick="ayo_share_og(\'' + b + '\', \'twitter\');" title="Twitter">';
            html += '<i class="mobile"><i class="fa fa-twitter"></i></i></a></div>';
        }
        if (opt.digg) {
            html += '<div class="digg button"><a onclick="ayo_share_og(\'' + b + '\', \'digg\');" title="Digg">';
            html += '<i class="mobile"><i class="fa fa-digg"></i></i></a></div>'
        }
        if (opt.whatsapp) {
            html += '<div class="whatsapp button"><a onclick="ayo_share_og(\'' + b + '\', \'whatsapp\');" title="Whatsapp">';
            html += '<i class="mobile"><i class="fa fa-whatsapp"></i></i></a></div>';
        }
        if (opt.telegram) {
            html += '<div class="telegram button"><a onclick="ayo_share_og(\'' + b + '\', \'telegram\');" title="Telegram">';
            html += '<i class="mobile"><i class="fa fa-paper-plane"></i></i></a></div>';
        }
        if (opt.viber) {
            html += '<div class="viber button"><a onclick="ayo_share_og(\'' + b + '\', \'viber\');" title="Viber">';
            html += '<i class="mobile"><i class="fa fa-volume-control-phone"></i></i></a></div>';
        }
        if (opt.email) {
            html += '<div class="email button"><a onclick="ayo_share_og(\'' + b + '\', \'email\');" title="Email">';
            html += '<i class="mobile"><i class="fa fa-envelope"></i></i></a></div>';
        }
        if (opt.line) {
            html += '<div class="line button"><a onclick="ayo_share_og(\'' + b + '\', \'line\');" title="Line">';
            html += '<i class="mobile"><i class="fa fa-line"></i></i></a></div>';
        }
        if (opt.bbm) {
            html += '<div class="bbm button"><a onclick="ayo_share_og(\'' + b + '\', \'bbm\');" title="BBM">';
            html += '<i class="mobile"><i class="fa fa-bbm"></i></i></a></div>';
        }
        $(this).html('<div class="ayoshare">' + html + '</div>');
    });

    function ayo_bufferapp(c, d, z) {
        $.ajax({
            url: 'https://api.bufferapp.com/1/links/shares.json?url=' + encodeURIComponent(c),
            crossDomain: true,
            dataType: 'jsonp'
        }).done(function(a) {
            var b = ayo_num(a.shares);
            $(d + ':eq(' + z + ') .ayoshare .bufferapp .counter p').html(b);
        }).fail(function() {
            $(d + ':eq(' + z + ') .ayoshare .bufferapp .counter p').html(0);

        })
    }

    function ayo_facebook(c, d, z) {
        $.ajax({
            url: 'https://graph.facebook.com/v2.7/?id=' + encodeURIComponent(c) + '&access_token=443213172472393|l2IEt1tuyYta_278fR5NAg8V1jI',
            crossDomain: true,
            dataType: 'jsonp'
        }).done(function(a) {
            var b = ayo_num(a.share.share_count);
            $(d + ':eq(' + z + ') .ayoshare .facebook .counter p').html(b);
        }).fail(function() {
            $(d + ':eq(' + z + ') .ayoshare .facebook .counter p').html(0);

        })
    }

    function ayo_linkedin(c, d, z) {
        $.ajax({
            url: 'https://www.linkedin.com/countserv/count/share?url=' + encodeURIComponent(c) + '&callback=?',
            crossDomain: true,
            dataType: 'json'
        }).done(function(a) {
            var b = ayo_num(a.count);
            $(d + ':eq(' + z + ') .ayoshare .linkedin .counter p').html(b);
        }).fail(function() {
            $(d + ':eq(' + z + ') .ayoshare .linkedin .counter p').html(0);

        })
    }

    function ayo_pinterest(c, d, z) {
        $.ajax({
            url: 'http://api.pinterest.com/v1/urls/count.json?url=' + encodeURIComponent(c) + '&callback=?',
            crossDomain: true,
            dataType: 'json'
        }).done(function(a) {
            var b = ayo_num(a.count);
            $(d + ':eq(' + z + ') .ayoshare .pinterest .counter p').html(b);
        }).fail(function() {
            $(d + ':eq(' + z + ') .ayoshare .pinterest .counter p').html(0);

        })
    }

    function ayo_vk(f, g, z) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"http://vk.com/share.php?act=count&index=1&url=" + encodeURIComponent(f) + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            }
        }).done(function(a) {
            var b = $(a).find("content").text();
            var c = b.split(",");
            var d = c[1].split(")");
            var e = ayo_num(d[0]);
            $(g + ':eq(' + z + ') .ayoshare .vk .counter p').html(e);
        }).fail(function() {
            $(g + ':eq(' + z + ') .ayoshare .vk .counter p').html(0);

        })
    }

    function ayo_reddit(d, e, z) {
        $.ajax({
            url: 'http://www.reddit.com/api/info.json?url=' + encodeURIComponent(d),
            crossDomain: true,
            dataType: 'json'
        }).done(function(a) {
            var b = (a.data.children != null) ? a.data.children.length : 0;
            var c = (b == 25) ? 25 + '+' : b;
            $(e + ':eq(' + z + ') .ayoshare .reddit .counter p').html(c);
        }).fail(function() {
            $(e + ':eq(' + z + ') .ayoshare .reddit .counter p').html(0);

        })
    }

    function ayo_google(e, f, z) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"https://plusone.google.com/_/+1/fastbutton?url=" + encodeURIComponent(e) + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            }
        }).done(function(a) {
            var b = $(a).find("content").text();
            var c = b.match(/window\.__SSR[\s*]=[\s*]{c:[\s*](\d+)/i);
            var d = (c !== null) ? ayo_num(c[1]) : 0;
            $(f + ':eq(' + z + ') .ayoshare .google .counter p').html(d);
        }).fail(function() {
            $(f + ':eq(' + z + ') .ayoshare .google .counter p').html(0);

        })
    }

    function ayo_stumbleupon(e, f, z) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"http://www.stumbleupon.com/services/1.01/badge.getinfo?url=" + encodeURIComponent(e) + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            }
        }).done(function(a) {
            var b = $(a).find("content").text();
            var c = b.match(/views\":([0-9]+),/i);
            var d = (c !== null) ? ayo_num(c[1]) : 0;
            $(f + ':eq(' + z + ') .ayoshare .stumbleupon .counter p').html(d);
        }).fail(function() {
            $(f + ':eq(' + z + ') .ayoshare .stumbleupon .counter p').html(0);

        })
    }

    function ayo_pocket(e, f, z) {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"https://widgets.getpocket.com/v1/button?label=pocket&count=horizontal&v=1&url=" + encodeURIComponent(e) + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            }
        }).done(function(a) {
            var b = $(a).find("content").text();
            var c = b.match(/<em\sid=\"cnt\">([0-9]+)<\/em>/i);
            var d = (c !== null) ? ayo_num(c[1]) : 0;
            $(f + ':eq(' + z + ') .ayoshare .pocket .counter p').html(d);
        }).fail(function() {
            $(f + ':eq(' + z + ') .ayoshare .pocket .counter p').html(0);

        })
    }

    function ayo_num(a) {
        var b = parseInt(a, 10);
        if (b === null) {
            return 0;
        }
        if (b >= 1000000000) {
            return (b / 1000000000).toFixed(1).replace(/\.0$/, "") + "g";
        }
        if (b >= 1000000) {
            return (b / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
        }
        if (b >= 1000) {
            return (b / 1000).toFixed(1).replace(/\.0$/, "") + "k";
        }
        return b;
    }

}

function ayo_share_og(c, s) {
    var e = new RegExp(location.host);
    if (e.test(c)) {
        $.ajax({
            url: c
        }).done(function(a) {
            var tit = ($(a).filter('title').text() != null && $(a).filter('title').text() != undefined ? $(a).filter('title').text() : ''),
                des = ($(a).filter('meta[name="description"]').attr("content") != null && $(a).filter('meta[name="description"]').attr("content") != undefined ? $(a).filter('meta[name="description"]').attr("content") : ''),
                img = ($(a).filter('meta[property="og:image"]').attr("content") != null && $(a).filter('meta[property="og:image"]').attr("content") != undefined ? $(a).filter('meta[property="og:image"]').attr("content") : '');
            if (s == 'facebook') {
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'google') {
                window.open('https://plus.google.com/share?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'linkedin') {
                window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + c + '&title=' + tit + '&summary=' + des, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'reddit') {
                window.open('http://reddit.com/submit?url=' + c + '&title=' + tit + '+-+via @bachors', 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'pinterest') {
                window.open('http://pinterest.com/pin/create/button/?url=' + c + '&media=' + img + '&description=' + des, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'stumbleupon') {
                window.open('http://www.stumbleupon.com/badge/?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'bufferapp') {
                window.open('https://bufferapp.com/add?url=' + c + '&text=' + des, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'vk') {
                window.open('http://vk.com/share.php?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'pocket') {
                window.open('https://getpocket.com/save?title=' + tit + '&url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'twitter') {
                window.open('https://twitter.com/share?text=' + tit + '+-+via @bachors&url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'digg') {
                window.open('http://digg.com/submit?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'whatsapp') {
                window.open('whatsapp://send?text=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'telegram') {
                window.open('tg://msg_url?text=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'viber') {
                window.open('viber://forward?text=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'email') {
                window.open('mailto:?subject=' + tit + '&amp;body=' + des + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'line') {
                window.open('line://msg/text/' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'bbm') {
                window.open('bbmi://api/share?message=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            }
        });
    } else {
        $.ajax({
            type: "GET",
            dataType: "xml",
            url: "https://query.yahooapis.com/v1/public/yql",
            data: {
                q: "SELECT content FROM data.headers WHERE url=\"" + c + "\" and ua=\"#Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.154 Safari/537.36\"",
                format: "xml",
                env: "http://datatables.org/alltables.env"
            }
        }).done(function(x) {
            var a = $(x).find("content").text(),
                tit = ($(a).filter('title').text() != null && $(a).filter('title').text() != undefined ? $(a).filter('title').text() : ''),
                des = ($(a).filter('meta[name="description"]').attr("content") != null && $(a).filter('meta[name="description"]').attr("content") != undefined ? $(a).filter('meta[name="description"]').attr("content") : ''),
                img = ($(a).filter('meta[property="og:image"]').attr("content") != null && $(a).filter('meta[property="og:image"]').attr("content") != undefined ? $(a).filter('meta[property="og:image"]').attr("content") : '');
            if (s == 'facebook') {
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'google') {
                window.open('https://plus.google.com/share?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'linkedin') {
                window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + c + '&title=' + tit + '&summary=' + des, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'reddit') {
                window.open('http://reddit.com/submit?url=' + c + '&title=' + tit + '+-+via @bachors', 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'pinterest') {
                window.open('http://pinterest.com/pin/create/button/?url=' + c + '&media=' + img + '&description=' + des, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'stumbleupon') {
                window.open('http://www.stumbleupon.com/badge/?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'bufferapp') {
                window.open('https://bufferapp.com/add?url=' + c + '&text=' + des, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'vk') {
                window.open('http://vk.com/share.php?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'pocket') {
                window.open('https://getpocket.com/save?title=' + tit + '&url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'twitter') {
                window.open('https://twitter.com/share?text=' + tit + '+-+via @bachors&url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'digg') {
                window.open('http://digg.com/submit?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'whatsapp') {
                window.open('whatsapp://send?text=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'telegram') {
                window.open('tg://msg_url?text=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'viber') {
                window.open('viber://forward?text=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'email') {
                window.open('mailto:?subject=' + tit + '&amp;body=' + des + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'line') {
                window.open('line://msg/text/' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'bbm') {
                window.open('bbmi://api/share?message=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            }
        }).fail(function() {
            var tit = ($(document).attr('title') !== null && $(document).attr('title') !== undefined ? $(document).attr('title') : ''),
                des = ($('meta[name="description"]').attr("content") != null && $('meta[name="description"]').attr("content") != undefined ? $('meta[name="description"]').attr("content") : ''),
                img = ($('meta[property="og:image"]').attr("content") != null && $('meta[property="og:image"]').attr("content") != undefined ? $('meta[property="og:image"]').attr("content") : '');
            if (s == 'facebook') {
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'google') {
                window.open('https://plus.google.com/share?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'linkedin') {
                window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + c + '&title=' + tit + '&summary=' + des, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'reddit') {
                window.open('http://reddit.com/submit?url=' + c + '&title=' + tit + '+-+via @bachors', 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'pinterest') {
                window.open('http://pinterest.com/pin/create/button/?url=' + c + '&media=' + img + '&description=' + des, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'stumbleupon') {
                window.open('http://www.stumbleupon.com/badge/?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'bufferapp') {
                window.open('https://bufferapp.com/add?url=' + c + '&text=' + des, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'vk') {
                window.open('http://vk.com/share.php?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'pocket') {
                window.open('https://getpocket.com/save?title=' + tit + '&url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'twitter') {
                window.open('https://twitter.com/share?text=' + tit + '+-+via @bachors&url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'digg') {
                window.open('http://digg.com/submit?url=' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'whatsapp') {
                window.open('whatsapp://send?text=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'telegram') {
                window.open('tg://msg_url?text=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'viber') {
                window.open('viber://forward?text=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'email') {
                window.open('mailto:?subject=' + tit + '&amp;body=' + des + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'line') {
                window.open('line://msg/text/' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            } else if (s == 'bbm') {
                window.open('bbmi://api/share?message=' + tit + '%20' + c, 'ibacor.com', 'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');
            }
        });
    }
}

var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var htmlToJson = require('html-to-json');

var fs;
var parseResult;
var ayoshare;

jsdom();

before(function(){

	// Digunakan untuk membaca line.html
	fs = require('fs');

	// global jQuery
	global.$ = require('jquery');

	// include pustaka yang akan diuji
	// otomatis ditambahkan ke dalam selektor $ jquery
	ayoshare = require('../src/js/ayoshare.js');
});

describe('General Page "test/line.html" tests', function () {
	before(function(){
		// inisialisasi halaman yang akan diuji
		document.body.innerHTML = fs.readFileSync(__dirname + '/line.html', "utf-8");

		// setting lingkungan uji
	    global.$(function() {
	        global.$("#unik").ayoshare(
	            google = true, // true
	            stumbleupon = false,
	            facebook = false,
	            linkedin = false,
	            pinterest = false,
	            bufferapp = false,
	            reddit = false,
	            vk = false,
	            pocket = false,
	            twitter = false,
	            email = false,
	            whatsapp = false,
	            telegram = true, // true
	            viber = false,
	            line = true // true
	        );
	    });

	    var str_data = "\n";
	    str_data += "	Data Test: \n\n";
	    str_data += "	$(function() {\n";
	    str_data += "		$(\"#unik\").ayoshare(\n";
	    str_data += "			google = true, // true\n";
	    str_data += "			stumbleupon = false,\n";
	    str_data += "			facebook = false,\n";
	    str_data += "			linkedin = false,\n";
	    str_data += "			pinterest = false,\n";
	    str_data += "			bufferapp = false,\n";
	    str_data += "			reddit = false,\n";
	    str_data += "			vk = false,\n";
	    str_data += "			pocket = false,\n";
	    str_data += "			twitter = false,\n";
	    str_data += "			email = false,\n";
	    str_data += "			whatsapp = false,\n";
	    str_data += "			telegram = true, // true\n";
	    str_data += "			viber = false,\n";
	    str_data += "			line = true // true\n";
	    str_data += "		);\n";
	    str_data += "	});\n";

	    // expose data test
	    console.log(str_data);
	});

	it('Should ".ayoshare" element is exist', function (){
		// mengambil elemen #unik
		var ps = global.$('#unik').html();

		// parsing html
		// mengambil elemen .ayoshare
		var promise = htmlToJson.parse(ps, {
			'ayoshare': function ($doc) {
				return $doc.find('.ayoshare').html();
			}
		}, function (err, result) {
		  	parseResult = result;
		  	expect(typeof parseResult.ayoshare).eql('string');
		});
	});

	it('Should have 3 (three) ".button" element', function (){

		// parsing html
		// mengambil elemen .button
		var promise = htmlToJson.parse(parseResult.ayoshare, {
			'button': function ($doc) {
				return $doc.find('.button');
			}
		}, function (err, result) {
		  	expect(result.button.length).eql(3);
		});
	});

	it('Should have 3 (three) "a" element', function (){

		// parsing html
		// mengambil elemen anchor (a)
		var promise = htmlToJson.parse(parseResult.ayoshare, {
			'a': function ($doc) {
				return $doc.find('a');
			}
		}, function (err, result) {
		  	expect(result.a.length).eql(3);
		});
	});

	it('1st element should "google"', function (){

		// parsing html
		// mengambil elemen .button
		var promise = htmlToJson.parse(parseResult.ayoshare, {
			'button': function ($doc) {
				return $doc.find('.button');
			}
		}, function (err, result) {

			// mengecek class
		  	expect(result.button[0].attribs.class.indexOf('google')).not.equal(-1);
		});
	});

	it('1st anchor element should contain url "https://plus.google.com/share?url="', function (){

		// parsing html
		// mengambil elemen anchor (a)
		var promise = htmlToJson.parse(parseResult.ayoshare, {
			'a': function ($doc) {
				return $doc.find('a');
			}
		}, function (err, result) {

			// mengecek atribut href
		  	expect(result.a[0].attribs.href.indexOf('https://plus.google.com/share?url=')).not.equal(-1);
		});
	});

	it('2nd element should "telegram"', function (){

		// parsing html
		// mengambil elemen .button
		var promise = htmlToJson.parse(parseResult.ayoshare, {
			'button': function ($doc) {
				return $doc.find('.button');
			}
		}, function (err, result) {

			// mengecek class
		  	expect(result.button[1].attribs.class.indexOf('telegram')).not.equal(-1);
		});
	});

	it('2nd anchor element should contain url "tg://msg_url?text="', function (){

		// parsing html
		// mengambil elemen anchor (a)
		var promise = htmlToJson.parse(parseResult.ayoshare, {
			'a': function ($doc) {
				return $doc.find('a');
			}
		}, function (err, result) {

			// mengecek atribut href
		  	expect(result.a[1].attribs.href.indexOf('tg://msg_url?text=')).not.equal(-1);
		});
	});

	it('3rd element should "line"', function (){

		// parsing html
		// mengambil elemen .button
		var promise = htmlToJson.parse(parseResult.ayoshare, {
			'button': function ($doc) {
				return $doc.find('.button');
			}
		}, function (err, result) {

			// mengecek class
		  	expect(result.button[2].attribs.class.indexOf('line')).not.equal(-1);
		});
	});

	it('3rd anchor element should contain url "line://msg/text/"', function (){

		// parsing html
		// mengambil elemen anchor (a)
		var promise = htmlToJson.parse(parseResult.ayoshare, {
			'a': function ($doc) {
				return $doc.find('a');
			}
		}, function (err, result) {

			// mengecek atribut href
		  	expect(result.a[2].attribs.href.indexOf('line://msg/text/')).not.equal(-1);
		});
	});
});
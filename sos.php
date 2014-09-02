<?php
	class shareCount {
		private $url,$timeout;
		function __construct($url,$timeout=100) {
			$this->url=rawurlencode($url);
			$this->timeout=$timeout;
		}
		function get_plusones()  {
			$curl = curl_init();
			curl_setopt($curl, CURLOPT_URL, "https://clients6.google.com/rpc");
			curl_setopt($curl, CURLOPT_POST, true);
			curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($curl, CURLOPT_POSTFIELDS, '[{"method":"pos.plusones.get","id":"p","params":{"nolog":true,"id":"'.rawurldecode($this->url).'","source":"widget","userId":"@viewer","groupId":"@self"},"jsonrpc":"2.0","key":"p","apiVersion":"v1"}]');
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
			curl_setopt($curl, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
			$curl_results = curl_exec ($curl);
			curl_close ($curl);
			$json = json_decode($curl_results, true);
			return isset($json[0]['result']['metadata']['globalCounts']['count'])?intval( $json[0]['result']['metadata']['globalCounts']['count'] ):0;
		}
		private function file_get_contents_curl($url){
			$ch=curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
			curl_setopt($ch, CURLOPT_FAILONERROR, 1);
			curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
			curl_setopt($ch, CURLOPT_TIMEOUT, $this->timeout);
			$cont = curl_exec($ch);
			if(curl_error($ch))
			{
				die(curl_error($ch));
			}
			return $cont;
		}
	}
	
	function google($url){
		$obj=new shareCount($url);      
		$arr = array('kon' => $obj->get_plusones());
		return $arr;
	}
	function upon($url){
		$json=file_get_contents("http://www.stumbleupon.com/services/1.01/badge.getinfo?url=".$url);
		$result= json_decode($json);
		if(!empty($result->result->views)){
			$arr = array('kon' => $result->result->views);
		}else {
			$arr = array('kon' => 0);
		}
		return $arr;
	}
	
	if(!empty($_GET['gog'])){
		echo json_encode(google($_GET['gog']));
	}else if(!empty($_GET['upo'])) {
		echo json_encode(upon($_GET['upo']));
	}
?>

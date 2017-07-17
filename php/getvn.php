<?php
	include('../simple_html_dom.php');

	$trang = 1;
	$trang = $_GET["trang"]; settype($trang, "int");

	$html = file_get_html("http://vnexpress.net/tin-tuc/the-gioi/page/".$trang.".html");

	$tins = $html->find("#news_home li");

	$mang = array();

	foreach ($tins as $tin) {
		$img = $tin->find("div.block_image_news", 0);
		if(isset($img->innertext)) {
			$hinh = $img->find("div.thumb a img", 0);
			$urlHinh = $hinh->src;
			$tieude = trim($hinh->alt);
			$link = $img->find("h3", 0)->find("a", 0)->href;
			$mota = trim($img->find(".news_lead", 0)->innertext);

			$m = explode("-", $link);
			$key = str_replace(".html", "", $m[count($m)-1]);
			array_push($mang, new Tin($key, $tieude, $mota, $urlHinh, $link));
		}
		
	}
	echo json_encode($mang);

	/**
	* 
	*/
	class Tin
	{
		public $key;
		public $TIEUDE;
		public $TOMTAT;
		public $URL;
		public $LINK;
		
		function Tin($k, $t, $tt, $u, $l)
		{
			$this->key = $k;
			$this->TIEUDE = $t;
			$this->TOMTAT = $tt;
			$this->URL = $u;
			$this->LINK = $l;
		}
	}
?>
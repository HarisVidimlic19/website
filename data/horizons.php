<?php
// $path = realpath('website/data'); 
$path = getcwd();
$a = array();
foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($path)) as $filename) {
    $ext = pathinfo($filename, PATHINFO_EXTENSION);
    if ($ext != 'txt') continue;

    $file = fopen($filename, "r");
    $contents = fread($file, filesize($filename));
    fclose($file);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,"https://ssd.jpl.nasa.gov/api/horizons_file.api");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,
                array(
                    'format' => 'text',
                    'input' => $contents,
                )
            );
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $server_output = curl_exec ($ch);
    curl_close ($ch);

    //Find the information we want for json file
    $name = pathinfo($filename, PATHINFO_FILENAME);
    $parsed = get_string_between($server_output, '$$SOE', '$$EOE');
    $myArray = explode(',', $parsed);

    // Create array for json file
    $a[$name] = array();
    $a[$name] = array(
        'JD' => $myArray[0],
        'e' => $myArray[2],
        'QR' => $myArray[3],
        'IN' => $myArray[4],
        'OM' => $myArray[5],
        'W' => $myArray[6],
        'Tp' => $myArray[7],
        'N' => $myArray[8],
        'MA' => $myArray[9],
        'TA' => $myArray[10],
        'A' => $myArray[11],
        'AD' => $myArray[12],
        'PR' => $myArray[13]
    );

};
    //Write to json file
    $fp = fopen('./horizons.json', 'w');
    fwrite($fp, json_encode($a));
    fclose($fp);

    function get_string_between($string, $start, $end){
        $string = ' ' . $string;
        $ini = strpos($string, $start);
        if ($ini == 0) return '';
        $ini += strlen($start);
        $len = strpos($string, $end, $ini) - $ini;
        return substr($string, $ini, $len);
    }
    
?>
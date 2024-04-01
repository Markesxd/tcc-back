<?php

namespace App\Util;

use DateInterval;
use DateTime;

class DateUtil {
    public static function convertDateToGMT(DateTime $date): void
    {
        $date->add(new DateInterval('PT3H'));
    }
}
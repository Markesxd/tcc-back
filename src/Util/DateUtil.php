<?php

namespace App\Util;

use DateInterval;
use DateTime;
use Doctrine\Common\Collections\Collection;

class DateUtil {
    public static function convertDateToGMT(DateTime $date): void
    {
        $date->add(new DateInterval('PT3H'));
    }
}
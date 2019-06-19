<?php

namespace App\Cart;
use Money\Currency;
use Money\Money as BaseMoney;
use NumberFormatter;
use Money\Formatter\IntlMoneyFormatter;
use Money\Currencies\ISOCurrencies;

class Money
{
    protected $money;

    public function __construct($value)
    {
        $this->money = new BaseMoney($value, new Currency('USD'));
    }

    public function amount()
    {
        return $this->money->getAmount();
    }

    public function formatted()
    {
        $formatter = new IntlMoneyFormatter (
            new NumberFormatter('en_US', NumberFormatter::CURRENCY),
            new ISOCurrencies()
        );

        return $formatter->format($this->money);
    }

    public function add(Money $money)
    {
        $this->money = $this->money->add($money->instance());
        
        return $this;
    }

    public function instance()
    {
        return $this->money;
    }
}
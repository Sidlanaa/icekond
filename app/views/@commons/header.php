<header>
    <div class="header container d-flex justify-between flex-start">
        <a href="main" class="main-logo">
            <img class="logo-desktop" src="style/images/logo.png" alt="logo">
            <img class="logo-mobile" src="style/images/logo-mobile.png" alt="logo">
        </a>
        <nav>
            <ul class="d-flex">
                <li>
                    <a href="#our-certifications">Про нас</a>
                </li>
                <li>
                    <a href="#order-section">Ціни на монтаж</a>
                </li>
                <li>
                    <a href="#hit-sale">Послуги</a>
                </li>
            </ul>
        </nav>
        <div class="d-flex justify-between flex-start">
            <div class="header-icons d-flex">
                <a href="<?=$this->text('tel2', 0)?>">
                    <img src="style/images/tele.svg" alt="telephone">
                </a>
                <a href="<?=$this->text('telegram', 0)?>">
                    <img src="style/images/telegram.svg" alt="telegram">
                </a>
                <a href="<?=$this->text('viber', 0)?>">
                    <img src="style/images/viber.svg" alt="viber">
                </a>
            </div>
            <div class="header-contacts">
                <img class="header-border-desk" src="style/images/headerheaderBorder.png" alt="">
                <img class="header-border-mob" src="style/images/headBor.svg" alt="">
                <div class="header-contacts-into">
                    <a href="<?=$this->text('tel1', 0)?>" class="header-tel"><?=$this->text('tel1', 0)?></a>
                    <a href="<?=$this->text('tel2', 0)?>" class="header-tel"><?=$this->text('tel2', 0)?></a>
                    <a href="#" class="recall-me call-pop-up-phone">Передзвоніть мені</a>
                    <p class="header-adress">м. Івано-Франківськ, вул. Тичини 8А</p>
                </div>
            </div>
            <a href="#" class="green-button call-pop-up-phone">Безкоштовна консультація</a>
        </div>
    </div>
</header>
<footer>
    <div class="footer container d-flex">
        <div class="">
            <h6>IceKond</h6>
            <p>Продаж, монтаж, сервісне обслуговування систем кондиціонування та вентиляції</p>
            <div class="d-flex footer-icons">
                <a href="<?=$this->text('telegram', 0)?>"><img src="style/images/telegram.svg" alt="telegram"></a>
                <a href="<?=$this->text('viber', 0)?>"><img src="style/images/viber.svg" alt="viber"></a>
                <a href="<?=$this->text('instagram', 0)?>"><img src="style/images/instagram.svg" alt="instagram"></a>
                <a href="<?=$this->text('facebook', 0)?>"><img src="style/images/facebook.svg" alt="facebook"></a>
            </div>
            <p>© 2022 All rights reserved.</p>
        </div>
        <div class="">
            <h6>Контакти</h6>
            <a href="tel:<?=$this->text('tel1', 0)?>" class="footer-tel"><?=$this->text('tel1', 0)?></a>
            <a href="tel:<?=$this->text('tel2', 0)?>" class="footer-tel"><?=$this->text('tel2', 0)?></a>
            <a class="footer-mail" href="mailto:icekond@gmail.com">icekond@gmail.com</a>
            <p>м. Івано-Франківськ, вул. Павла Тичини, 8А, 95</p>
        </div>
        <div class="">
            <p>Якщо у Вас залишилися запитання - залиште заявку і отримайте безкоштовну консультацію</p>
            <form action="" class="common-form">
                <label for="tel-order-calculation flex">
                    <img src="style/images/tel.svg" alt="tel">
                    <input id="tel-order-calculation" type="tel" required placeholder="Ваш телефон">
                </label>
                <input type="submit" class="green-button" value="Замовити консультацію">
            </form>
        </div>
    </div>
</footer>

<div class="fixed-butts-wrapper">
    <div class="fixed-butts">
        <a href="<?=$this->text('viber', 0)?>" class="fx-viber">
            <img src="style/images/viber.svg" alt="viber">
        </a>
        <a href="<?=$this->text('telegram', 0)?>" class="fx-telegram">
            <img src="style/images/telegram.svg" alt="telegram">
        </a>
        <a href="tel:<?=$this->text('tel2', 0)?>" class="fx-phone">
            <img src="style/images/tel-white.svg" alt="phone">
        </a>
        <a href="#calc-seaction" class="fx-calc butt-text">
            <img src="style/images/calculate.svg" alt="calc">
            <span>Розрахувати вартість</span>
        </a>
        <a href="#order-calculation" class="fx-order butt-text">
            <img src="style/images/stuff.svg" alt="calc">
            <span>Замовити заміри</span>
        </a>
    </div>
</div>
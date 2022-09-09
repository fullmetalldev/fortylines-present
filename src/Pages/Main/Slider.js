import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {EffectCoverflow, Pagination, Navigation, Keyboard, Zoom} from "swiper";
import Web1 from '../../Assets/imgs/web1.jpg';
import Web2 from '../../Assets/imgs/web2.jpg';
import Web3 from '../../Assets/imgs/web3.jpg';
import BlockchainSteps from '../../Assets/imgs/blockchain-steps.jpg';

const Slider = () => {

    return (
        <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            navigation={true}
            zoom={true}
            keyboard={{
                enabled: true,
            }}
            modules={[Zoom, Keyboard, EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            pagination={{
                type: "progressbar",
                clickable: true
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
            }}
        >
            <SwiperSlide>
                <div className="qrCode">
                    <h2 className="slideTitle">Отсканируйте, чтобы попасть на нашу презентацию :)</h2>
                    <a href="http://qrcoder.ru" target="_blank"><img
                        src="http://qrcoder.ru/code/?https%3A%2F%2Ffortylines-present.vercel.app%2F&4&0" width="148"
                        height="148" border="0" title="QR код"></a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="qrCode">
                    <h2 className="slideTitle-big">90% процентов населения не знают про Web3, но это наше будущее.</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Что такое Web 1.0?</h2>
                    <div className="slide__row">
                        <p className="slideDescr">Web 1.0 состоял из сайтов, обслуживающих статический контент вместо
                            динамического HTML. Его можно назвать вебом только для чтения.</p>
                        <img className="slideImg" src={Web1} alt="Web1"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Что такое Web 2.0?</h2>
                    <div className="slide__row">
                        <p className="slideDescr">То что мы видим каждый день это и есть Web 2.0. В мире web2 не
                            обязательно быть разработчиком, чтобы участвовать в процессе создания. Многие приложения
                            созданы таким образом, что каждый может стать творцом. Если вы хотите загрузить видео и
                            позволить миллионам людей увидеть его, взаимодействовать с
                            ним и комментировать его, в отличие от Web 1.0.</p>
                        <img className="slideImg" src={Web2} alt="Web2"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Что такое централизованный?</h2>
                    <div className="slide__row">
                        <div>
                            <p className="slideDescrSmall width100">1. Сосредоточенный в едином центре (об
                                управлении).</p>
                            <br/>
                            <p className="slideDescrSmall width100">2. Основанный на подчинении единому центру.</p>
                            <br/>
                            <p className="slideDescrSmall width100">3. Исходящий из единого центра.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Проблемы Web 1.0 и Web 2.0?</h2>
                    <div className="slide__row">
                        <div>
                            <p style={{lineHeight: "150%"}} className="slideDescrSmall width100">
                                В web2 вы не имеете никакого контроля над своими данными или над тем, как они хранятся.
                                Более того, компании часто отслеживают и сохраняют данные пользователей без их согласия.
                                Все эти данные затем принадлежат и контролируются компаниями, отвечающими за эти
                                платформы, то есть они ЦЕНТРАЛИЗОВАНЫ.
                                Поскольку банки также являются цифровыми и находятся под централизованным контролем,
                                правительства часто вмешиваются и туда.
                                Они могут закрыть доступ к банковским счетам или ограничить доступ к средствам во
                                времена нестабильности, экстремальной инфляции или других политических волнений.
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 style={{fontSize: "52px"}} className="slideTitle-big">Что решит проблемы Web 1.0 и Web 2.0?</h2>
                    <div className="slide__row">
                        <div>
                            <p className="slideDescr width100">
                                Web3 призван решить многие из этих недостатков путем фундаментального переосмысления
                                того, как мы создаем приложения и взаимодействуем с ними с самого начала.
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Что такое децентрализованный?</h2>
                    <div className="slide__row">
                        <div>
                            <p className="slideDescrSmall width100">Антоним слова централизованный, то есть:</p>
                            <p style={{padding: "0 0 0 30px", margin: "40px 0 0"}}
                               className="slideDescrSmall width100">1. НЕсосредоточенный
                                в едином центре (об управлении).</p>
                            <br/>
                            <p style={{padding: "0 0 0 30px"}} className="slideDescrSmall width100">2. НЕ на подчинении
                                единому центру.</p>
                            <br/>
                            <p style={{padding: "0 0 0 30px"}} className="slideDescrSmall width100">3. НЕ исходящий из
                                единого центра.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Что такое Web 3.0?</h2>
                    <div className="slide__row">
                        <div className="slideDescr">
                            <p>В основе Web 3.0 лежит децентрализация.</p>
                            <p>Web3 улучшает Интернет, каким мы его знаем сегодня, и
                                добавляет еще несколько характеристик: Верифицируемость, Не требуются доверенные центры,
                                Самоуправляемость, Не требуются разрешения, Распределенность и надежность, Нативные
                                платежи.
                            </p>
                        </div>
                        <img className="slideImg" src={Web3} alt="Web3"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Как работает Web 3.0?</h2>
                    <div className="slide__row">
                        <div className="slideDescr">
                            <p className="slideDescrSmall">В web3 разработчики обычно не создают и не развертывают
                                приложения, которые работают на
                                одном сервере или хранят свои данные в одной базе данных (обычно размещенной на одном
                                облачном провайдере и управляемой им). Вместо этого приложения web3 работают либо на
                                блокчейне, либо в децентрализованных сетях из множества одноранговых узлов (серверов),
                                либо в комбинации этих двух технологий, образующих криптоэкономический протокол. Такие
                                приложения часто называют dapps (децентрализованные приложения).</p>
                        </div>
                        <img className="slideImg" src={Web3} alt="Web3"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Криптовалюта и Web 3.0?</h2>
                    <div className="slide__row">
                        <div className="slideDescr width100">
                            <p className="slideDescrSmall">Криптовалюта играет большую роль
                                во многих из этих протоколов. Она обеспечивает финансовый стимул (токены) для тех,
                                кто хочет принять участие в создании, управлении, внесении вклада или улучшении одного
                                из проектов. Эти протоколы часто предлагают различные услуги, такие как вычисления,
                                хранение данных, пропускная способность, идентификация,
                                хостинг и другие веб-услуги, которые в прошлом обычно предоставлялись облачными
                                провайдерами.</p>
                            <p style={{margin: "20px 0"}} className="slideDescrSmall">Потребители услуг обычно платят за
                                использование протокола,
                                подобно тому, как сегодня они платят облачному провайдеру, например AWS.</p>
                            <p className="slideDescrSmall">За исключением web3, деньги идут непосредственно участникам
                                сети.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Как работает идентификация в Web3?</h2>
                    <div className="slide__row">
                        <div className="slideDescr width100">
                            <p style={{margin: "20px 0"}} className="slideDescrSmall">В web3 идентификация также
                                работает совсем не так, как мы привыкли сегодня. В большинстве случаев в приложениях
                                web3 идентификация будет привязана к адресу кошелька пользователя, взаимодействующего с
                                приложением.</p>
                            <p className="slideDescrSmall">В отличие от таких методов аутентификации web2, как OAuth или
                                email + пароль (которые почти всегда требуют от пользователей передачи конфиденциальной
                                и личной информации), адреса кошельков полностью анонимныю</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 style={{margin: "100px 0 0"}} className="slideTitle-big">И как же называется технология, которая
                        позволяет распределить данные
                        по узлам, и быть одновременно децентрализованным?</h2>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Блокчейн это?</h2>
                    <div className="slide__row">
                        <div className="slideDescr width100">
                            <p className="slideDescrSmall">В дословном переводе блокчейн — это непрерывная цепочка
                                блоков.</p>
                            <p style={{margin: "15px 0"}} className="slideDescrSmall">В отличие от обычных баз данных,
                                изменить или удалить эти записи нельзя, можно только добавить новые.</p>
                            <p className="slideDescrSmall">Блокчейн еще называют технологией распределенных реестров,
                                потому что всю цепочку сделок и актуальный список владельцев хранят на своих компьютерах
                                множество независимых пользователей. Даже если один или несколько компьютеров дадут
                                сбой, информация не пропадет.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="qrCode">
                    <img className="imgBig" src={BlockchainSteps} border="0" title="QR код" alt="QR"/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Преимущества блокчейна?</h2>
                    <div className="slide__row">
                        <div className="slideDescr width100">
                            <p className="slideDescrSmall">Естественно основным преимуществом является возможность
                                децентрализации интернета.</p>
                            <p style={{margin: "15px 0"}} className="slideDescrSmall">Консенсус. Если некоторые
                                участники сети выключат свои компьютеры и часть транзакций у них не отразится или их
                                записи окажутся неверными, это не повлияет на работу сети.
                                Процедура консенсуса, то есть достижения согласия, позволит восстановить верную
                                информацию.</p>
                            <p className="slideDescrSmall">Шифрование данных.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Итог?</h2>
                    <div className="slide__row">
                        <div className="slideDescr width100">
                            <p className="slideDescrSmall">
                                Если вы хотите безопасности в интернет и вы устали кормить Цукербергов, Безосов и других
                                известных нам людей, то мы рекомендуем вам начать изучать Web 3.0 технологии.
                            </p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Хотите стать разработчиком Web 3.0?</h2>
                    <div className="slide__row">
                        <div className="slideDescr width100">
                            <p className="slideDescrSmall width100">Тогда у нас есть несколько советов для вас:</p>
                            <p style={{padding: "0 0 0 30px", margin: "40px 0 0"}}
                               className="slideDescrSmall width100">1. Так как свой блокчейн придумывать не нужно,
                                потому что уже есть проверенные временем эфиры (Ethereum) и битки (Bitcoin), мы советуем
                                выучить JavaScript и подключить свое приложение к этим сетям ))</p>
                            <p style={{padding: "0 0 0 30px", margin: "20px 0"}} className="slideDescrSmall width100">2.
                                В Web 3.0 есть еще
                                такое понятие как SmartContract, без которого никуда, его тоже пишут на JavaScript
                                подобном языке Solidity.</p>
                            <p style={{padding: "0 0 0 30px"}} className="slideDescrSmall width100">3. Ну, а если вы
                                вдруг
                                решили придумать новый, никому невиданный велосипед (блокчейн), то вы можете его
                                написать на любом backend языке программирования, в том числе и на нашей любимой Java,
                                но лучшими языками программирования для создания блокчейна считается C++ и Rust.</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <h2 className="slideTitle-big">Полезные ссылки:</h2>
                    <div className="slide__row">
                        <div className="slideDescr width100">
                            <a href="https://habr.com/ru/post/651077/">
                                <p style={{padding: "0 0 0 30px"}}
                                   className="slideDescrSmall width100">1. https://habr.com/ru/post/651077/</p>
                            </a>
                            <a href="https://fincult.info/article/blokcheyn-chto-eto-takoe-i-kak-ego-ispolzuyut-v-finansakh/">
                                <p style={{padding: "0 0 0 30px", margin: "20px 0"}}
                                   className="slideDescrSmall width100">2.https://fincult.info/article/blokcheyn-chto-eto-takoe-i-kak-ego-ispolzuyut-v-finansakh/</p>
                            </a>
                            <a href="https://docs.soliditylang.org/en/v0.8.17/">
                                <p style={{padding: "0 0 0 30px"}}
                                   className="slideDescrSmall width100">3. https://docs.soliditylang.org/en/v0.8.17/</p>
                            </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
);
};

export default Slider;
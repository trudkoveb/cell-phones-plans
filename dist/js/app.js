new Vue ({
    el:'#plans-list',
    data() {
        return {
            // Array for plans
            plans: [
            {
                name: 'SMS–чек',
                status: 'Обновляется',
                type: 'Услуга.',
                info: 'Подключено с 12.09.2017 10:21 по 12.11.2017 10:21',
                price: '1.00',
                duration: 'в день',
                dropdown: false,
                class: 'active'
            },
            {
                name: 'Автопродление',
                status: '',
                type: 'Услуга.',
                info: 'Отключено с 01.09.2017 10:21',
                price: '',
                duration: '',
                dropdown: false,
                class: 'inactive' // Blocked plan
            },
            {
                name: 'В Абхазии как дома',
                status: '',
                type: 'Пакет.',
                info: 'Заказано c 01.12.2017 10:21 по 12.12.2017 10:21',
                price: '30.00',
                duration: 'в день',
                dropdown: false,
                class: 'renewal'
            },
            {
                name: 'Живой баланс',
                status: 'Обновляется',
                type: 'Пакет.',
                info: 'Заказано вместе со сменой ТП с 08.12.2017 10:21',
                price: '30.00',
                duration: 'в день',
                dropdown: false,
                class: 'renewal' // plan on turn to be functioning
            },
            {
                name: 'Интернет M',
                status: '',
                type: 'Пакет.',
                info: 'Подключено с 12.09.2017 10:21 по 03.12.2017 10:21',
                price: '499.00',
                duration: 'в месяц',
                priceDesc: 'без учета акции',
                show: false, // to create dropdown
                dropdown: true, // to create dropdown
                isOpen: false, // to create dropdown
                currentStock: 'День рождения МегаФон',
                class: 'active' // functioning plan
            },
            {
                name: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, soluta',
                status: '',
                type: 'Услуга.',
                info: 'Подключено с 12.09.2017 10:21 по 12.11.2017 10:21',
                price: '1.50',
                duration: 'в день',
                dropdown: false,
                class: 'active'
            },
            {
                name: 'СуперАОН',
                status: '',
                type: 'Услуга.',
                info: 'Подключено с 12.09.2017 10:21, бессрочно',
                price: '6.00',
                duration: 'в день',
                dropdown: false,
                class: 'active'
            }
            ],
            // Array for stocks
            stocks: [
            {
                planDesc: true,
                name: 'Интернет',
                time: '02.09.2017 10:21',
                currentSize: '20',
                maxSize: '25'
            },
            {
                stockDesc: true,
                name: 'День рождения МегаФон',
                type: 'Акция.',
                info: 'Действует с 12.09.2017 по 12.11.2017',
                price: '30%',
                duration: 'Скидка на АП',
                warning: 'После окончания акции продукт отключен не будет'
            }
            ]
        }
    },
    methods: {
        toggle(plan) {
         plan.show = !plan.show, // display/block stock's info
         plan.isOpen = !plan.isOpen // rotate arrow at plan names
        }
    }
})

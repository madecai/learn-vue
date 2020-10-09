const app = new Vue({
    el: "#app",
    data: {
        books: [
            {id: 1, name: '《算法导论》', date: '2006.9', price: 85.00, count: 1},
            {id: 1, name: '《UNIX编程艺术》', date: '2006.2', price: 33.00, count: 1},
            {id: 1, name: '《编程珠玑》', date: '2008.10', price: 66.00, count: 1},
            {id: 1, name: '《代码大全》', date: '2006.3', price: 55.00, count: 1}
        ]
    },
    methods: {
        decreament(index) {
            this.books[index].count--
        },
        increament(index) {
            this.books[index].count++;
        },
        removeBookHandler(index) {
            this.books.splice(index, 1);
        }
    },
    computed: {
        computeTotalPrice() {
            return this.books.reduce((preValue, book) => {
                return preValue += book.price * book.count;
            }, 0);
        }
    },
    filters: {
        showPrice(price) {
            // 保留两位小数
            return "￥" + price.toFixed(2);
        }
    }
});
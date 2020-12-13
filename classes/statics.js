class Article {
    static publisher = "Илья Кантор";
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }
  
    static createTodays() {
        // помним, что this = Article
        return new this("Сегодняшний дайджест", new Date());
    }
}
  
let article = Article.createTodays();
  
alert( article.title ); // Сегодняшний дайджест
alert( Article.publisher ); // "Илья Кантор"
var newsCollection = [
    {
        title: 'Aëtius',
        text: 'Aëtius grew up in poverty or slavery.' +
        'He later worked as a goldsmith in Antioch to support his widowed mother and studied philosophy. ' +
        'After his mother died, Aëtius continued his trade and extended his studies into the Christian scriptures, ' +
        'Christian theology, and medicine.'
    },
    {
        title: 'Agapius',
        text: 'Neoplatonist philosopher who lived in Athens. ' +
        'He was a notable philosopher in the Neoplatonist school in Athens ' +
        'when Marinus of Neapolis was scholarch after the death of Proclus.' +
        ' He was admired for his love of learning and for putting forward difficult problems.'
    },
    {
        title: 'Anaximander',
        text: 'was a pre-Socratic Greek philosopher who lived in Miletus,' +
        ' a city of Ionia. He belonged to the Milesian school and learned the teachings of his master Thales. ' +
        'He succeeded Thales and became the second master of that school where he counted Anaximenes and, arguably, ' +
        'Pythagoras amongst his pupils.'
    }
];
// newsCollection = [];

var News = React.createClass({
    render: function () {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {
                return (
                    <article className="news__article" key={index}>
                        <h3 className="article__title">{item.title}</h3>
                        <p className="article__text">{item.text}</p>
                    </article>
                )
            });
        } else {
            newsTemplate = <p className="news__empty">No news for today</p>;
        }

        return (
            <section className="news__section">
                <h2>Last news</h2>
                {newsTemplate}
                <strong className={data.length > 0 ? '' : 'none'}>News amount: {data.length}</strong>
            </section>
        );
    }
});

var Comments = React.createClass({
    render: function () {
        return (
            <aside className="news__comments">
                No comments...
            </aside>
        );
    }
});

var App = React.createClass({
    render: function () {
        return (
            <main className="news__section">
                <News data={newsCollection}/>
                <Comments />
            </main>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
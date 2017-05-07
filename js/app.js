var newsCollection = [
    {
        title: 'Macron claims massive hack as emails leaked - media',
        text: 'Leading French presidential candidate Emmanuel Macron\'s ' +
        'campaign said on Friday it had been the target of a "massive"' +
        ' computer hack that dumped its campaign emails online 1-1/2 days before' +
        ' voters choose between the centrist and his far-right rival, ' +
        'Marine Le Pen, according to Reuters',
        time: '12:40, 06 May  2017',
        tag: 'hacking'
    },
    {
        title: 'Ukrainian MP who offered leasing Crimea to Russia stripped of citizenship',
        text: 'Andriy Artemenko, the "back-door diplomat" who allegedly pitched a so-called plan to ' +
        'resolve the conflict with Russia onto the desk of Trump\'s ' +
        'national security adviser (at the time) Michael Flynn, has been deprived ' +
        'of Ukrainian citizenship by a presidential decree, according to the State Migration Service.',
        time: '19:10, 05 May  2017',
        tag: 'citizenship'
    },
    {
        title: 'WW2-era U.S.-made P40 Kittyhawk warcraft recovered from Black Sea at Kerch bridge construction site',
        text: 'In the Kerch Strait, where the construction of Kerch bridge is underway to ' +
        'connect the Russian-annexed Crimea with mainland Russia, ' +
        'the floating crane crew managed to raise from the sea bottom an American P40 “Kittyhawk” ' +
        'fighter jet that crashed into the sea at the times of World War 2, according to media reports.',
        time: '14:40, 06 May  2017',
        tag: 'BlackSea'
    }
];
var SearchInput = React.createClass({
    render: function () {
        return (
            <div className="news__search">
                <input type="text"
                       className="input__search"
                       placeholder="Search news"/>
            </div>
        )
    }
});
var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            time: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return {
            visible: false
        };
    },
    readmoreClick: function (e) {
        this.setState({visible: true});
    },
    render: function () {
        var title = this.props.data.title,
            text = this.props.data.text,
            time = this.props.data.time,
            tagName = this.props.data.tag,
            visible = this.state.visible;

        return (
            <article className="news__article">
                <header className="article__header">
                    <h3 className="article__title">{title}</h3>
                </header>
                <div className="article__content">
                    <button onClick={this.readmoreClick}
                            className={'btn article__readmore' + (visible ? ' none' : '')}>
                        Show article
                    </button>
                    <p className={'article__text' + (visible ? '' : ' none')}>{text}</p>
                </div>
                <footer className="article__footer">
                    <time className="article__datetime">{time}</time>
                    <span className="article__tag">{tagName}</span>
                </footer>
            </article>
        )
    }
});
var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired
    },
    render: function () {
        var data = this.props.data;
        var newsTemplate;

        if (data.length > 0) {
            newsTemplate = data.map(function (item, index) {

                return (
                    <div key={index}
                         className="article__wrap">
                        <Article data={item}/>
                    </div>
                )
            });
        } else {
            newsTemplate = <article className="news__article --is-empty">
                <p>No news for today</p>
            </article>;
        }

        return (
            <section className="news__section">
                <h2 className="section__title">React news app</h2>
                <SearchInput />
                {newsTemplate}
                <strong className={'news__count' + (data.length > 0 ? '' : 'none')}>
                    News amount: {data.length}
                </strong>
            </section>
        );
    }
});
var App = React.createClass({
    render: function () {
        return (
            <main className="news__section">
                <News data={newsCollection}/>
            </main>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
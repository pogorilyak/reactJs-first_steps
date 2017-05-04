var App = React.createClass({
    render: function () {
        return (
            <article className="component-article">
                This is subheading from React component, bitch
            </article>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
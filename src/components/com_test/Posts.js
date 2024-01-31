export default function Posts({ title = 'no title', content = 'no content', children }){

    const divStyle = {
        border: '2px solid red',
        padding: '10px',
        margin: '15px'
    }

    return(
        <div style={divStyle}>
            <h5>{title}</h5>
            <hr />
            <p>{content} {children}</p>
        </div>
    );
}
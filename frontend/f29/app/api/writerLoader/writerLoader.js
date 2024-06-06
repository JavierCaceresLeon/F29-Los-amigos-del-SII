import 'writerLoader.css';

function writerLoader (props) {
    if (props.dataLoaded) {
        return null
    } else {
        return (
            <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <div className="typewriter">
                    <div className="slide"><i></i></div>
                    <div className="paper"></div>
                    <div className="keyboard"></div>
                </div>
            </div>
        )
    }
}

export default writerLoader
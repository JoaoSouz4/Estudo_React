import './styles.css';

export const LoadComponent = () => {
    return(
        <div className='load-component'>
            <div className="loading">
                <div className='load-reverse'></div>
            </div>
            <div>Loading...</div>
        </div>
    )
}
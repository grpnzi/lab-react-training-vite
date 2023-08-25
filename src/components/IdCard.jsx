function IdCard(props) {
    const { lastName, firstName, gender, height, birth, picture } = props;

    return (
        <div className="id-card">
            <div className="picture">
                <img src={picture} alt={`${firstName} ${lastName}`} />
            </div>
            <div className="details">
                <p><strong>Name:</strong> {firstName} {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height} cm</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>
            </div>
        </div>
    );
};

export default IdCard;
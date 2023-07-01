import PropTypes from 'prop-types';

Scores.propTypes = {
    score: PropTypes.number,
    bestScore: PropTypes.number
}

export default function Scores({ score, bestScore }) {

    return (
        <>
            <div className="font-bold text-lg pr-12">
                <h4>Score: {score} </h4>
                <h4>Best Score: {bestScore}</h4>
            </div>
        </>
    );
}
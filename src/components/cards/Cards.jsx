import PropTypes from 'prop-types';


Cards.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};


export default function Cards({ title, img }) {
    return (
        <>
            <div className=" bg-gradient-to-r from-cyan-500 to-blue-500 p-1 gap-8 flex flex-col border-2 border-slate-40 rounded-2xl w-1/4 h-1/4 w-full h-full">
                <img className="h-2/3 rounded-xl" src={img}></img>
                <h1 className='text-3xl italic text-center font-bold'>{title}</h1>

            </div>
        </>
    );
}
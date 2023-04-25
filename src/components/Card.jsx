import { AiTwotoneEdit, AiOutlineDelete } from "react-icons/ai"
import { Link } from "react-router-dom"

const Card = ({ item }) => {
    return (
        <div className="card w-30 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-3xl">{item.name}</h2>
                <p className='text-2xl'>Quantity: {item.quantity}</p>
                <div className="card-actions justify-end">
                    <button
                        className='btn btn-primary'
                    >
                        <Link to={`/${item.id}`}>
                            <AiTwotoneEdit size={30} color={'#fff'} />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card